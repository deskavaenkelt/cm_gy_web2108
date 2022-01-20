const Card = ({ id, name, email }) => {
    return (
        <article className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={ `https://robohash.org/${id}?size=200x200` } alt='Robot'/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </article>
    )
}

export default Card
