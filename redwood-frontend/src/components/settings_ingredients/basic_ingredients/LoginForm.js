import React, {useState} from "react";
import login from "../../../requests/security"

function LoginForm(){
    const [email, setEmail] = useState("admin")
    const [password, setPassword] = useState("admin")

    const onLoginClick =()=>{

        login(email,password).then((data)=>{
            console.log(data);
            if(data.status == true){
                console.log("dodajemy cisteczka, state itp")
            }
        });

    }

    return(
        <form className="login_form">
            <input value={email} onChange={e=>setEmail(e.target.value)} name="email" type="email" placeholder="Email"/>
            <input value={password} onChange={e=>setPassword(e.target.value)} name="password" type="password" placeholder="Hasło"/>
            <button onClick={onLoginClick} type="button">Zaloguj</button>
        </form>
    );

}

export default LoginForm;