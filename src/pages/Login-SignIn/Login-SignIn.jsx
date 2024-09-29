import { useNavigate } from "react-router-dom";
import style from "./Login-SignIn.module.scss";

export function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/")
    }
    function handleSignIn() {
        navigate("S")
    }


    return (
        <div className={style.loginForm}>
            <h1>Login</h1>
            <div className={style.card}>
                <input className={style.input} type="text" id="username" placeholder="Username" />
                <input className={style.input} type="text" id="password" placeholder="Password" />
            <button className={style.loginBtn} onClick={handleLogin}>login</button>
            </div>



            <p> Dont have an account?<button className={style.signInBtn} onClick={handleSignIn}>Sign In</button></p>
        </div>
    )
}