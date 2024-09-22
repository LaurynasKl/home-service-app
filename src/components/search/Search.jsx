import styles from './Search.module.scss';
import { CiSearch } from "react-icons/ci";

function Search() {

    return (
        <div className={styles.search}>
            <div>
                <p>Find Home <span>Service/Repair</span> Near You</p>
                <p className={styles.text}>Explore Best Home Service & Repair near you</p>
            </div>
            
            <div>
                <input type="text" />
                <button><CiSearch /></button>
            </div>
        </div>
    )
}

export default Search;