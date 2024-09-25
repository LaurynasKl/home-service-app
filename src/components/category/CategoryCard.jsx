import style from './CategoryCard.module.scss';
import cleaning1 from '../../assets/cleaning1.png';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

export function CategoryCard() {

    const navigate =  useNavigate();

    const CategoriesCards = [
        {
            category: "Cleaning",
            company: "House Cleaning",
            name: "Vardenis Pavardenis",
            place: "Klaipeda",
            img: cleaning1
            
        },
    ]

    return (
        <div className={style.categoryCard}>
            {CategoriesCards.map((card, index) => (
                <div key={index} className={style.card}>
                    <img src={card.img} alt={card.category} />
                    <div className={style.info}>
                        <h3>{card.category}</h3>
                        <h3>{card.company}</h3>
                        <h4>{card.name}</h4>
                        <h4>{card.place}</h4>
                    <button onClick={() => navigate(routes.searchCategory)}>Book Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}