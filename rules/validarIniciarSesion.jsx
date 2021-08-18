export default function validarIniciarSesion(valores) {

    let errors={}
        
    
        if (!valores.email){
            errors.email="El Correo es Obligatorio"
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
            errors.email="El Correo es inválido"
        }
        
    
        if(!valores.password){
           errors.password="la Contraseña es requerida"
    
        } else if(valores.password.length<6){
            errors.password="la contraseña debe tener mas de 6 caracteres "
        }
    
        return errors
    }