import React,{useState,useEffect} from 'react'
import firebase from '../firebase'

const useAutenticacion = () => {

    const [usuarioAut, setUsuarioAut] = useState(null)

    useEffect(() => {
        const suscrito = firebase.auth.onAuthStateChanged(user=>{
            if(user){
                setUsuarioAut(user)
            }
            else{
                setUsuarioAut(null)
            }
        })
        return () => suscrito()
    }, [])

    return usuarioAut
  
}
 
export default useAutenticacion;