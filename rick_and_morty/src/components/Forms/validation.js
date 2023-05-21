const Validate = (userData) => {
    const errors = {};
   
        if(!/\S+@\S+\.\S+/.test(userData.email)){
           errors.email = "Debe ser un correo electrónico";
        } 
        if(!userData.email){
           errors.email = "Debe Ingresar un email";
        } 
        if(userData.email.length > 35){
           errors.email = "El email no puede superar los 35 caracteres";
        } 
        if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(userData.password)){
          errors.password = "La password debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
          } 
        
         
   
     return errors;
   }


export default Validate;