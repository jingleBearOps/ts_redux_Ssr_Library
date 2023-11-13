export default function Goal(props:{
    name: string;
    prices: number;
    category: string;
} ){
    props
    return (<article>
        <div>
            <h2>{props.name}</h2>
            <h3>{props.prices}</h3>
            <h3>{props.category}</h3>
        </div>
        <button>DELETE</button>
    </article>
    )
}