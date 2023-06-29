import { CustomExeceptions } from "../exceptions/CustomExceptions"
import { firebaseException } from "../exceptions/ExceptionConstants";

export const  FirebaseValidation =  (error)=>{
    console.log("firebase validation method call")
    const temp = {}
if (error === 'auth/user-not-found'){
    temp.email = firebaseException.user_not_found;
}
return temp;
}