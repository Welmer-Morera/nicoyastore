import React, {useState, useEffect} from 'react'


const useValidacion = (initialState ,validacion,func) => {
    
    const [valores, setValores] = useState(initialState)
    const [errores, setErrores] = useState({})
    const [submitForm, setsubmitForm] = useState(false)

    useEffect(()=>{

        if(submitForm){
            const noError = Object.keys(errores).length===0
            if(noError){
                func()
            }
            setsubmitForm(false)
        }
    },[errores])


    const handleChange =e=>{
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    



    const handleSubmit = e=>{
        e.preventDefault();
        const errorValidacion = validacion(valores)
        setErrores(errorValidacion)
        setsubmitForm(true)
    }

    const handleBlur =  ()=>{
        const errorValidacion = validacion(valores)
        setErrores(errorValidacion)
    }
    return {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit,
        handleBlur
    };
}
 
export default useValidacion;