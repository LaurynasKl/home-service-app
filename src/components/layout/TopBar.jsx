import style from './TopBar.module.scss';
import logo from '../../assets/logo.png';
import { routes } from '../../router/router';
import { Link } from 'react-router-dom';

function TopBar() {
    const links = [
        {
            path: routes.home,
            label: "Home",
        },
        {
            path: routes.services,
            label: "Services",
        },
        {
            path: routes.about,
            label: "About Us",
        }
    ];

    return (
        <div className={style.topBar}>
            <div className={style.leftSide}>
                <img src={logo} alt="logo" />
                <h1>Logoipsum</h1>
                <nav>
                    {links.map((link) => (
                        <Link key={link.label} to={link.path} className={style.link}>{link.label}</Link>
                    ))}
                </nav>
            </div>
            
            <div className={style.rightSide}>
                <button> Login / Sign Up </button>
            </div>
        </div>

    )
}

export default TopBar;