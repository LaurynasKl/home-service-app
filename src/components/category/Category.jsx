import style from './Category.module.scss';

import { GiVacuumCleaner } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { GiLargePaintBrush } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";

function Category() {

    const categories = [
        { name:"Cleaning", icon: <GiVacuumCleaner />, color: 'purple'},
        { name:"Repair", icon:<GiAutoRepair />, color: 'orange'},
        { name:"Painting", icon: < GiLargePaintBrush />, color: 'lightseagreen'},
        { name:"Shifting", icon: < CiDeliveryTruck />, color: 'crimson'},
        { name:"Plumbing", icon: < MdOutlinePlumbing />, color: 'orange'},
        { name:"Electric", icon: < MdElectricBolt />, color: 'blue'},
    ]

    return (

        <div className={style.categories}>

            {categories.map((category) => (
                <button key={category.name} className={style.btn}>
                    <div className={style.icon} style={{color: category.color}}> {category.icon} </div>
                    <div className={style.name}> {category.name}</div>
                </button>
            ))}

        </div >
    )
}

export default Category;