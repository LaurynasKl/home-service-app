import styles from './Search.module.scss';
import { CiSearch } from "react-icons/ci";

function Search(){

    return(
        <div className={ styles.search }>
            <div>
            <p>Find Home <span>Service/Repair</span> Near You</p>
            <p>Explore Best Home Servoce & Repair near you</p>
            </div>
            <div>

            <input type="text" />
            <img src="" alt="search-logo" />
            <CiSearch />
            </div>
        </div>
    )
}

export default Search;