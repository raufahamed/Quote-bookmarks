import  { useContext } from 'react'
import { QuoteContext } from '../Context/quote';

import {bookmarkBtn,addedBookmarkBtn} from './Home'
function Bookmark() {
 
    const {bookmark,removeBookmark,addBookmark} = useContext(QuoteContext);
     console.log(bookmark);
    return (
     <div>
    {bookmark.map(marked =>(
          <div key={marked._id}>
            <p>{marked.content}</p>
          <p>{marked.author}</p>  
          {
                bookmark.find(q => q._id === marked._id) ?
                <button onClick={() => removeBookmark(marked._id)}>
                    {addedBookmarkBtn}
                </button> : <button onClick={() => addBookmark(marked._id)}>
                    {bookmarkBtn}
                </button>
            }
          </div>    
      ))
    }
    
    </div>
    
  )
}

export default Bookmark