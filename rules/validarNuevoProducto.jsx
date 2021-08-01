export default function ValidarNuevoProducto(valores){
    let errors={}
    if(!valores.nombre){
        errors.nombre="El Nombre es Obligatorio"

    }
    if(!valores.emprendedor){
        errors.emprendedor="El Nombre del Emprendedor o Compañia es Obligatorio"
    }
    if(!valores.url){
        errors.url="El Url es necesario"
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
        errors.url="El url es Incorrecto"
    }
    
    if (!valores.email){
        errors.email="El Correo es Obligatorio"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errors.email="El Correo es inválido"
    }
    if(!valores.descripcion){
        errors.descripcion="La descripcion del Producto es Obligatoria"
    }
    
    if(!valores.telefono){
       errors.telefono="El Teléfono es obligarorio"

    } else if(valores.telefono.length!==8){
        errors.telefono="El numero debe contener solo 8 digitos "
    }
    if(!valores.precio){
        errors.precio="El Precio es obligarorio"
 
     } else if(!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/.test(valores.precio)){
         errors.precio="El precio incorrecto "
     }

    return errors
}