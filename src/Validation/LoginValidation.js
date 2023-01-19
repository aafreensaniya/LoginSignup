
 export const Validation=(values)=>{
    console.log("===>",values)
    let errors={}
    if (!values.email) {
      errors.email = "please enter email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email ";
    } 
    if (!values.password){
        errors.password="please enter password"
    }
     else if(values.password.length<3 ) {
      errors.password = "password character should be minimum 3"
    }else if (values.password.length > 10) {
        errors.password="character should be max 10"
    }return errors;
    }
