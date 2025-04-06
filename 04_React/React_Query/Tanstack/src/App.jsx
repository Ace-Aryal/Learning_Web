import { useEffect, useState } from 'react'
import {useQuery } from "@tanstack/react-query"
import getUserData from "./Hooks/getUserData"
import {useInView} from "react-intersection-observer"
import { useInfiniteQuery } from '@tanstack/react-query'
import './App.css'




function App() {
 const {inView , ref} = useInView({
  threshold: 1,
  rootMargin : "100px"
 })

 const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  error
} = useInfiniteQuery({
  queryKey: ['infiniteData'],
  queryFn: getUserData, // after getting data getNextPageParam is called 
  getNextPageParam: (lastPage) =>{
   
    
    return lastPage.length > 0 ? lastPage[lastPage.length - 1].id : undefined
    // this returns page params which determine hasNextpage and pageParams : we will need to change / modify
    // page params according to API structure how it handles pagination
    // pagination is even more simple you just hit the request to API using the pageParams acc to page number
  }
});

useEffect(()=>{
  console.log(inView , hasNextPage);
  
  if( inView && hasNextPage) {
    console.log("for next page");    
    fetchNextPage()
  }
  
  


},[inView, hasNextPage , fetchNextPage])


if (isLoading) {
  return <p>Loading.....</p>
}

if (isError) {
  return <p>Error : {error}</p>
}

  return (
    <div>
    { 
    data && data.pages.map(page=> page.map(user => {
      return(
        <div key={user.id} className='flex flex-col '>
          <img src={user.avatar_url} alt="" />
          <h2>{user.login}</h2>
        </div>
      )
    }
    ))
    
   }
   {isFetchingNextPage && <p>Fetching Next page</p>}

      <div ref={ref}></div>
    </div>
  )
  
}

export default App
