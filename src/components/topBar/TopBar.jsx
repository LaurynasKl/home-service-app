import style from './TopBar.module.scss';
import logo from '../../assets/logo.png';

function TopBar() {

    return (
        <div className={style.topBar}>
            <div>
                <img src={logo} alt="logo" />
                <h1>Logoipsum</h1>
                <ul>
                    <button> Home </button>
                    <button> Services </button>
                    <button> About Us </button>
                </ul>
            </div>

            <button> Login/Sign Up </button>
        </div>

    )
}

export default TopBar;