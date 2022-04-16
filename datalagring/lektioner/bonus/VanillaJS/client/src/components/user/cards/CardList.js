import Card from './Card'
import css from './Table.module.css'

const CardList = ({ users }) => {

    return (
        <>
            { users.length === 0 ? <></> : <table className={ css.border }>
                <thead>
                <tr className={ css.border }>
                    <th className={ `${ css.border }, ${ css.idWidth }` }>Id</th>
                    <th className={ `${ css.border }, ${ css.nameWidth }` }>Name</th>
                    <th className={ `${ css.border }, ${ css.ageWidth }` }>Age</th>
                    <th className={ `${ css.border }, ${ css.genderWidth }` }>Gender</th>
                </tr>
                </thead>
                <tbody>
                { users.map(user => (
                    <Card key={ user._id } user={ user }/>
                )) }
                </tbody>

            </table> }
        </>
    )
}

export default CardList
