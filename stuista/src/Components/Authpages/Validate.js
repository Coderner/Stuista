export default function validateInfo(values){
    let errors = {}

    if(!values.fullname.trim()){
        errors.fullname = "Username required"
    }

    if(!values.email.trim()){
        errors.email = "Email required"
    }
    else if(!/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.password.trim()){
        errors.password = "Password required"
    }else if(values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more"
    }
     
    return errors;
}