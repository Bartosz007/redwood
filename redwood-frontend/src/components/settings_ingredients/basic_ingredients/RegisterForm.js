
function RegisterForm(){
    return(
        <form className="register_form">
            <input name="name" type="text" placeholder="Imię" required/>
            <input name="name" type="text" placeholder="Nazwisko" required/>
            <input name="email" type="email" placeholder="Podaj email" required/>
            <input name="password" type="password" placeholder="Podaj hasło" required/>
            <input name="repassword" type="password" placeholder="Powtórz hasło" required/>
            <input name="photo" type="file"/>
            <button>Zaloguj</button>
        </form>
    );
}

export default RegisterForm;