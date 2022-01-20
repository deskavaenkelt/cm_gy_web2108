const SearchBox = ({ setSearchField }) => {
    return (
        <div className='pa2'>
            <input type='search'
                   style={ { width: '250px' } }
                   className='pa3 ba b--green bg-lightest-blue'
                   placeholder='Search for robots by name'
                   onChange={ event => setSearchField(event.target.value) }/>
        </div>
    )
}

export default SearchBox
