import React, {useState} from "react";
import {getCustomAlert} from "../../../scripts/alert";
import {register} from "../../../requests/security";

function RegisterForm(){
    const [name, setName] = useState("12345");
    const [surname, setSurname] = useState("123456");
    const [email, setEmail] = useState("fdf@bla.pl");
    const [password, setPassword] = useState("passwd123");
    const [repassword, setRepassword] = useState("passwd123");
    const [photo, setPhoto] = useState("");


    const onRegister = () => {
        console.log(photo)


        const [validation, message] = validateData(name, surname, email, password, repassword, photo);

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

function validateData(name, surname, email, password, repassword, photo){

    if(!validateLength(password,8)){
        return [false, "Hasło jest za krótkie!"];
    }

    if(!validatePassword(password,repassword)){
        return [false, "Hasła są niezgodne!"];
    }

    if(!validateLength(name,5)){
        return [false, "Podane imie jest za krótkie!"];
    }

    if(!validateLength(surname,5)){
        return [false, "Podane nazwisko jest za krótkie!"];
    }

    if(!validateEmail(email)){
        return [false, "Podany mail jest nieprawidłowy!"];
    }

    if(!validatePhoto(photo)){
        return [false, "Podany plik jest nieprawidłowy!"];
    }
    return [true, "Validacja zakończona sukcesem!"]
}

function validateLength(text, length){
    return text.length >= length;
}

function validatePassword(password,repassword){
    return password == repassword;
}

function validateEmail(email){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validatePhoto(photo){
    const ALLOWED_FILE_FORMAT =[ "jpg", "png", "jpeg"];
    const MAX_FILE_SIZE = 1024 * 1024 * 2; //2MB

    const fileFormat = photo.name.split(".")[1].toLowerCase();
    if(!ALLOWED_FILE_FORMAT.includes(fileFormat))
        return false;

    if(photo.size > MAX_FILE_SIZE)
        return false

    return true;
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

/*
async function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
*/
