const library = function() {
    fetch ('https://striveschool-api.herokuapp.com/books')
    .then ((Response) => {
        if (Response.ok) {
            console.log('GG')
            return Response.json()
        } else {
            throw new Error('not Good')
        }
    })
    .then((bookList) => {
        console.log('Really GG', bookList)
        generatePrice(bookList)
    })
    .catch((error) => {
        
    })
}

    
const generatePrice = function (arrayOfBooks) {
    console.log('control?')
const price = document.getElementById('bookPrice')
arrayOfBooks.forEach((book) => {
    const priceOfBook = document.createElement('p')
    priceOfBook.classlist.add('fst-italic')
    priceOfBook.innerText = 'Price:' + book.category
    price.appendChild(priceOfBook)
    
})

}

library()
