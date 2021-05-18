import React, {useState} from "react";
import {getCustomAlert} from "../../../scripts/alert";
import {register} from "../../../requests/security";
import {validateRegisterData} from "../../../scripts/validationScripts";
import toBase64 from "../../../scripts/imageEncoder";

function RegisterForm(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [photo, setPhoto] = useState("");


    const onRegister = () => {
        console.log(photo)


        const [validation, message] = validateRegisterData(name, surname, email, password, repassword, photo);

        if(validation){
         /*    const encodedPhoto = getBase64(photo).then(()=>{

             });*/
                toBase64(photo).then((encodedPhoto)=>{
                  //  console.log(photo)

                    register(name, surname, email, password, encodedPhoto).then(data => {
                        console.log(data)
                        // if(data.status == true){
                        //
                        // }
                    })

                });
             /*
             console.log(photo)
                 console.log(encodedPhoto)
                 register(name, surname, email, password, encodedPhoto).then(data => {
                     console.log(data)
                     // if(data.status == true){
                     //
                     // }

                 })
              */




        }else{
            let alertBox = getCustomAlert(message);
            document.body.append(alertBox)
        }
      //  console.log(photo)

    }

    return(
        <form className="register_form" encType="multipart/form-data" >
            <input name="name" type="text" placeholder="Imię"
                   required value={name} onChange={e=>setName(e.target.value)}/>
            <input name="surname" type="text" placeholder="Nazwisko"
                   required value={surname} onChange={e=>setSurname(e.target.value)}/>
            <input name="email" type="email" placeholder="Podaj email"
                   required value={email} onChange={e=>setEmail(e.target.value)}/>
            <input name="password" type="password" placeholder="Podaj hasło"
                   required value={password} onChange={e=>setPassword(e.target.value)}/>
            <input name="repassword" type="password" placeholder="Powtórz hasło"
                   required value={repassword} onChange={e=>setRepassword(e.target.value)}/>
            <input className="photoInput" name="photo" type="file"
                   required files={photo} onChange={(e)=>setPhoto(e.target.files[0])}/>

            <button type="button" onClick={onRegister}>Zarejestruj się</button>
        </form>
    );

}

export default RegisterForm;



