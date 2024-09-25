import style from './CategoryCard.module.scss';
import cleaning1 from '../../assets/cleaning1.png';

export function CategoryCard() {

    const CategoriesCards = [
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
                    <img src={card.img} alt="cleaning" />
                    <div className={style.info}>
                        <h3>{card.category}</h3>
                        <h3>{card.company}</h3>
                        <h4>{card.name}</h4>
                        <h4>{card.place}</h4>
                    <button>Book Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}