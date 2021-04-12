
function LoginForm(){
    return(
        <form className="login_form">
            <input name="email" type="email" placeholder="Email"/>
            <input name="password" type="password" placeholder="Hasło"/>
            <button>Zaloguj</button>
        </form>
    );
}

export default LoginForm;