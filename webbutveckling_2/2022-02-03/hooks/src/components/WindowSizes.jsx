import useWindowDimensions from '../utils/hooks/useWindowDimensions'

const WindowSizes = () => {
    // let width = useWindowDimensions().width
    // let height = useWindowDimensions().height
    const { width, height } = useWindowDimensions()

    return (
        <>
            <h1>WindowSizes</h1>
            <h2>Width: { width }</h2>
            <h2>Height: { height }</h2>
        </>
    )
}

export default WindowSizes
