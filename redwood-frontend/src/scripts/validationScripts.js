const ALLOWED_FILE_FORMAT =[ "jpg", "png", "jpeg"];
const MAX_FILE_SIZE = 1024 * 1024 * 2; //2MB

export {
    validateRegisterData,
    validateArticleData
}

function validateRegisterData(name, surname, email, password, repassword, photo){

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

function validateArticleData(title, text, images, tags){

    if(!validateLength(title,8)){
        return [false, "Tytuł jest za krótki!"];
    }

    if (!validateLength(text, 200)) {
        return [false, "Tekst jest za krótki!"];
    }

    if (!validateLength(tags, 1)) {
        return [false, "Nie dodano tagów!!"];
    }

    if (images != undefined && images.length == 3) {

        for(let i =0;i< images.length;i++){
            if (!validatePhoto(images[i])) {
                return [false, "Jeden z plików jest nieprawidłowy!"];
            }
        }

    }else{
        return [false, "Wymagane są 3 zdjęcia!"]
    }


    return [true, "Walidacja zakończona sukcesem!"]
}

function validateLength(text, length){
    return text!=undefined && text.length >= length;
}

function validatePassword(password,repassword){
    return password == repassword;
}

function validateEmail(email){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validatePhoto(photo){
    console.log(photo)
    console.log("dupa")
    if(photo == null || photo == "")
        return false

    const fileFormat = photo.name.split(".")[1].toLowerCase();
    if(!ALLOWED_FILE_FORMAT.includes(fileFormat))
        return false;

    if(photo.size > MAX_FILE_SIZE)
        return false

    return true;
}