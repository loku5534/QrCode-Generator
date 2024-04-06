import QrCodeGenerator from "./component/QrCodeGenerator";

// import { useState } from "react";
// import { firestore, storage } from "./config/firebase";
// import { addDoc, getDocs, collection } from "@firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

function App() {
  // const [data, setData] = useState([]);
  // const [image, setImage] = useState(null);

  // const getData = async () => {
  //   const ref = collection(firestore, "demo");
  //   const fireData = await getDocs(ref);
  //   let myList = [];
  //   for (const item of fireData.docs) {
  //     let obj = {
  //       _id: item.id,
  //       data: item.data(),
  //     };
  //     myList.push(obj);
  //   }
  //   setData(myList);
  // };

  // const putData = async (url) => {
  //   let now = new Date().toLocaleString() + "";
  //   let obj = {
  //     url: url,
  //     createdAt: now,
  //   };
  //   const ref = collection(firestore, "users");
  //   await addDoc(ref, obj);
  // };

  // const uploadImage = async () => {
  //   if (image == null) {
  //     return;
  //   }

  //   let now = new Date();
  //   const imageRef = ref(storage, `images/${now.getTime()}`);
  //   let res = await uploadBytes(imageRef, image);
  //   let url = await getDownloadURL(res.ref);
  //   await putData(url);
  // };

  return (
    <>
      <QrCodeGenerator />
    </>
  );
}

export default App;