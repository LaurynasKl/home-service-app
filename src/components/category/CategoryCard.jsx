import style from './CategoryCard.module.scss';
import cleaning1 from '../../assets/cleaning1.png';
import repair from '../../assets/repair.png';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

export const CategoriesCards = [
    {
        category: "Cleaning",
        company: "House Cleaning",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: cleaning1
    },
    {
        category: "Cleaning",
        company: "House Cleaning",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: cleaning1
    },
    {
        category: "Cleaning",
        company: "House Cleaning",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: cleaning1
    },
    {
        category: "Repair",
        company: "Car tyres repair",
        name: "Vardenis Pavardenis",
        place: "Klaipeda",
        img: repair
    },

]

export function CategoryCard() {

    const navigate =  useNavigate();

    return (
        <div className={style.categoryCard}>
            {CategoriesCards.map((card, index) => (
                <div key={index} className={style.card}>
                    <img src={card.img} alt={card.category} />
                    <div className={style.info}>
                        <h3 className={style.category}>{card.category}</h3>
                        <h3 className={style.company}>{card.company}</h3>
                        <h4 className={style.name}>{card.name}</h4>
                        <h4 className={style.place}>{card.place}</h4>
                    <button className={style.btn} onClick={() => navigate(routes.searchCategory)}>Book Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}