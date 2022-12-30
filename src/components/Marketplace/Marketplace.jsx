import React from 'react'
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Context } from '../AppContext/AppContext';

const Marketplace = () => {
    const {initFirebase, db2} = React.useContext(Context)
    React.useEffect(() => {
        initFirebase()
    }, [])
    const insert = async() => {
        try {
            const docRef = await addDoc(collection(db2, "marketplace"), {
              title: "lollo",
              price: "1,000 INR",
              user: "Abhinav CV",
              image: "lol.jpg"
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const display = async() => {
        try{
            const querySnapshot = await getDocs(collection(db2, "marketplace"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().title}`);
            });
        }catch(e){
            console.log(e)
        }
    }
    // insert()
    display()
    return (
        <div>Marketplace</div>
    )
}

export default Marketplace