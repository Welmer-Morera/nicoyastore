import React,{useEffect,useState,useContext} from 'react'
import { FirebaseContext } from '../firebase'
const useProductos = orden => {
    const [productos, setProdutos] = useState([])
    const {firebase}= useContext(FirebaseContext)
    useEffect(() => {
      const obtenerProductos=()=>{
  
        firebase.db.collection('productos').orderBy(orden,'desc').onSnapshot(misSnapshot)
      }
      obtenerProductos() 
    }, [])
  
    const misSnapshot = snapshot =>{
       const misproductos = snapshot.docs.map(doc=>{
         return {
           id:doc.id,
           ...doc.data()
         }
       })
       setProdutos(misproductos)
    }

    return{productos}
}
 
export default useProductos;