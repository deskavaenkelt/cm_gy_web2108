const Card = ({ name, age, gender }) => {
    return (
        <article>
            <h2>{ name }</h2>
            <p>{ age }</p>
            <p>{ gender }</p>
        </article>
    )
}

export default Card
