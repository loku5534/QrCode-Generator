import React, { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";

//Firebase
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

function QrCodeGenerator() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const uploadImage = async () => {
    if (image === null) {
      return;
    }
    let now = new Date();
    const imageRef = ref(storage, `images/${now.getTime()}`);
    let res = await uploadBytes(imageRef, image);
    let downloadUrl = await getDownloadURL(res.ref);
    setUrl(downloadUrl);
  };

  const handleQrCodeGenerator = async () => {
    setLoading(true);
    await uploadImage();
    setQrIsVisible(true);
    setLoading(false);
  };

  const qrCodeRef = useRef(null);
  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrCodeRef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code.png";
        link.click();
      })
      .catch(function (error) {
        console.error("Error generating QR code:", error);
      });
  };

  return (
    <div className="qrcode__container">
      <h1>QR Code Generator</h1>
      <>{loading ? <h3>Loading . . .</h3> : <></>}</>
      <div className="qrcode__container--parent">
        <div className="qrcode__input">
          <input
            type="file"
            placeholder="Upload Image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button onClick={handleQrCodeGenerator}>Generate QR Code</button>
        </div>
        {qrIsVisible ? (
          <div className="qrcode__download">
            <div className="qrcode__image" ref={qrCodeRef}>
              <QRCode value={url} size={180} />
            </div>
            <button onClick={downloadQRCode}>Download QR Code</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default QrCodeGenerator;
