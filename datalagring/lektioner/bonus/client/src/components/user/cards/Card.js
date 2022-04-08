import css from './Table.module.css'

const Card = ({ user }) => {
    return (
        <tr className={ css.border }>
            <td className={ css.border }>{ user._id }</td>
            <td className={ css.border }>{ user.name }</td>
            <td className={ css.border }>{ user.age }</td>
            <td className={ css.border }>{ user.gender }</td>
        </tr>
    )
}

export default Card
