import { app } from './config'
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"

const db = getFirestore(app)

export const callProducts = async (setProducts) => {
    const querySnapshot = await getDocs(collection(db, "products"));

    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });
    setProducts(products)
}

export const getProductsCat = async (category, setProducts) => {
    const itemsRef = collection(db, "products");

    const q = query(itemsRef, where("category", "==", category));

    const querySnapshot = await getDocs(q);

    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)
}


export const callProduct = async (id, setDetail) => {

    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      setDetail(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    
}


export const createOrder = async (order) => {

    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
  }