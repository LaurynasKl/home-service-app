import { useNavigate } from "react-router-dom";
import style from "./Login-SignIn.module.scss";
import { UserContext } from "../../context/LoginContext";
import { useContext } from "react";

export function Login() {

    // const {user, login, logout} = useContext(UserContext);


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