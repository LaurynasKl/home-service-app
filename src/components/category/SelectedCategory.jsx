import { useParams } from "react-router-dom"

export function SelectedCategory() {
    const { Category } = useParams();

    return(
        <div>
            <h1>Categorijos { Category }</h1>
        </div>
    )
}