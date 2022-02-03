import './Hamburger.css'

const Hamburger = ({ toggleMenu }) => {
    return (
        <>
            <div className='container' onClick={ toggleMenu }>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </div>
        </>
    )
}

export default Hamburger
