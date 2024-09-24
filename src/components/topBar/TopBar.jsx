import style from './TopBar.module.scss';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

function TopBar() {

    return (
        <div className={style.topBar}>
            <div>
                <img src={logo} alt="logo" />
                <h1>Logoipsum</h1>
                <nav>
                    <ul>
                        <NavLink> Home </NavLink>
                        <NavLink> Services </NavLink>
                        <NavLink> About Us </NavLink>
                    </ul>
                </nav>
            </div>

            <button> Login / Sign Up </button>
        </div>

    )
}

export default TopBar;