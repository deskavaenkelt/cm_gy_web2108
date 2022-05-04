class Album {
    constructor(id, title, artist, price, link, alt) {
        this.id = id
        this.title = title
        this.artist = artist
        this.price = price
        this.link = link
        this.alt = alt
    }
}

function makeAlbumCards() {
    let createdHtmlElements = ''
    for (const item of data) {
        let album = new Album(item.id, item.title, item.artist, item.price, item.link, item.alt)
        createdHtmlElements += `
    <article class='card'>
        <div class='card-image-height'>
            <img class='card-image' src='${ album.link }' alt='${ album.alt }'>
        </div>
        
        <h2 class='card-title-height'>${ album.title }</h2>
        <h3 class='card-artist'>${ album.artist }</h3>
        <p class='card-price'>${ album.price } kr</p>
        <button id='${ album.id }' 
                class='primary-button buy-button' 
                onclick='addAlbumToCart(${ album.id })'>Buy</button>
    </article>
    `
    }
    // console.log(createdHtmlElements)
    document.getElementById('album-container').innerHTML = createdHtmlElements
}

makeAlbumCards()

