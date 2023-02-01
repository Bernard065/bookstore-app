import './BooksList.css'
import Cart from '../Cart/Cart'


const BooksList = ({ books }) => {
    

    

    const displayBookList = books.map(book => {
        function handleCart(e){
            e.preventDefault()
            return Cart(book)
        }
        return (
              <div className="book" key={book.id}>
                <img src={book.url} alt={book.title} />
                <div className="book-info">
                    <h3>{book.title}</h3>
                    <h4>Author: {book.author}</h4>
                    <p>Publisher: {book.publisher}</p>
                    <p>Publish Date: {book.publish_date}</p>
                    <p>ISBN: {book.isbn}</p>
                    <p>Description: {book.description}</p>
                    <p>${book.price}</p>
                    <button onClick={handleCart}>Add to Cart</button>
                </div>
            </div>
        
        )  
    })
    
  return (
    <div className='books-grid'>
        {displayBookList}
    </div>
  )
}

export default BooksList