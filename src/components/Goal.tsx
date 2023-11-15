interface GoalProps {
    name: string;
    price: number;
    category: string;
}

export default function Goal({name, price, category}: GoalProps){
    return (<article>
        <div>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h3>{category}</h3>
        </div>
        <button>DELETE</button>
    </article>
    )
}