

function getCurrentYear() {
    let year = new Date().getFullYear()
    document.getElementById('year').innerHTML = year.toString()
}
getCurrentYear()
