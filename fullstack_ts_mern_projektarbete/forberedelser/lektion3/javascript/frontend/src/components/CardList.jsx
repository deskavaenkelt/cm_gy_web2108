import Card from './Card'

const CardList = ({ users }) => {
    return (
        <>
            {
                users.map((user, index) => {
                    return (
                        <Card key={ index }
                              name={ user.name }
                              age={ user.age }
                              gender={ user.gender }/>
                    )
                })
            }
        </>
    )
}

export default CardList
