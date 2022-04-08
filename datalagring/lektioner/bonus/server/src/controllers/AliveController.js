const alive = (req, res) => {
    res.status(200).send('Connected to API!')
}

export default {
    alive
}
