import  { useContext, useEffect, useState} from 'react'
import { QuoteContext } from '../Context/quote'
import Bookmark from './Bookmark';

 export   const bookmarkBtn = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
<path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
<path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
</svg>

 export  const addedBookmarkBtn =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks-fill" viewBox="0 0 16 16">
<path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z"/>
<path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z"/>
</svg>

function Home() {
    const [quoteTag,setQuoteTag] = useState('')
  const {quote,tags,fetchQuote,addBookmark,bookmark,removeBookmark} = useContext(QuoteContext);
   

    return (
        <div>
            <div className= 'quotebox' 
            key={quote._id}>
            <p>{quote.content}</p>
            <p>{quote.author}</p>
            <button onClick={() => fetchQuote(quoteTag)}>get quote</button>
            { 
              bookmark.find(q => q._id === quote._id) ?
                <button onClick={() => removeBookmark(quote._id)}>
                    {addedBookmarkBtn}
                </button> : <button onClick={() => addBookmark(quote._id)}>
                    {bookmarkBtn}
                </button>
            }
            
        </div>
         <select onChange={(e) => setQuoteTag(e.target.value)} name="" id="">
            <option value="" key=""></option>
            {tags.map((tag) => {
                return <option  value={tag.name} key={tag._id}>{tag.name}</option>
            })}
         </select>
        </div>
  )
}

export default Home