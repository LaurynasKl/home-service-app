import { useState } from 'react';
import styles from './Search.module.scss';
import { CiSearch } from "react-icons/ci";

function Search() {
    const [input, setInput] = useState('');

    function searchInput(event){
        setInput(event.target.value)
    }
    return (
        <div className={styles.search}>
            <div>
                <p>Find Home <span>Service/Repair</span> Near You</p>
                <p className={styles.text}>Explore Best Home Service & Repair near you</p>
            </div>
            
            <div className={styles.searchBtn}>
                <input type="text" value={input} placeholder='Search'/>
                <button onClick={searchInput}><CiSearch /></button>
            </div>
        </div>
    )
}

export default Search;