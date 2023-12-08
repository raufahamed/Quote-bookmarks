import { createContext, useState,useEffect } from 'react';

const BASE_URL = "https://api.quotable.io/random"
const TAGS_URL = "https://api.quotable.io/tags"

export const QuoteContext = createContext([null]);

export default function QuoteProvider({children}) {
    const [quote,setQuote] = useState({});
    const [tags,setTags] = useState([]);
    const[bookmark,setbookmark] = useState([])
    useEffect(()=>{
      fetchQuote("");
      fetchTags()
  },[])

 
  function addBookmark(id){
    if(bookmark.find(q=> q._id === id)) return
    setbookmark([...bookmark,quote])
  }

function removeBookmark(id){
  setbookmark(bookmark.filter(bk=>bk._id !==id))
}

  async function fetchQuote(quoteTag){
      const response = await fetch(quoteTag ? BASE_URL+`?tags=${quoteTag}` : BASE_URL)
      const data = await response.json()
      setQuote(() => data)
  }

  async function fetchTags(){
      const response = await fetch(TAGS_URL);
      const data = await response.json();
      setTags(data)
  }
   

  return (
    <QuoteContext.Provider value={{tags,quote,fetchQuote,bookmark,addBookmark,removeBookmark}}>
      {children}
    </QuoteContext.Provider>
  )
}