import { useEffect, useState } from 'react';

const useUpdateLocalBookmark = () => {
    const [bookmarks, setBookmarks]=useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
      if(window.localStorage.getItem('bookmarks')){
        setBookmarks(JSON.parse(window.localStorage.getItem('bookmarks')))
      }
      setLoading(false)
    },[])

    const addToBookmark=()=>{
      setBookmarks(pre=>[...pre,1])
    }

    useEffect(()=>{
      loading || window.localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    },[bookmarks,loading])

    return {bookmarks,addToBookmark}
};

export default useUpdateLocalBookmark;