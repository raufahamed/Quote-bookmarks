import  { useContext } from 'react'
import { QuoteContext } from '../Context/quote';
import './Bookmark.css'
import {bookmarkBtn,addedBookmarkBtn} from './Home'
function Bookmark() {
 
    // Accessing bookmark-related functions and data from the context

     const {bookmark,removeBookmark,addBookmark} = useContext(QuoteContext);
     console.log(bookmark);
     
     
     return (
     <div>

    {bookmark.map(marked =>(
          <div className='quotebox' key={marked._id}>
          
            <p className='quotecontent'>{marked.content}</p>
          <p className='quoteauthor'> -{marked.author}</p>  
           <span className='Bookmarks'>
           {
                bookmark.find(q => q._id === marked._id) ?
                <button className='bookMarkbtn' onClick={() => removeBookmark(marked._id)}>
                    {addedBookmarkBtn}
                </button> : <button className='bookMarkbtn' onClick={() => addBookmark(marked._id)}>
                    {bookmarkBtn}
                </button>
            }
           </span>
          </div>    
      ))
    }
    
    </div>
    
  )
}

export default Bookmark