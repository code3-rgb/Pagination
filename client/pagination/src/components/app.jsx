import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from './Card'
import Pagin from './Pagin'
import './app.css'


function Pagination() {

  let { pageNumber } = parseInt(useParams())
  pageNumber = pageNumber || 1

  // console.log(pageNumber)

  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(pageNumber)
  const [pages, setPages] = useState(1)



  useEffect(()=>{
    const fetchPosts = async ()=>{

      try {
        const res = (await axios(`http://localhost:5000/api/v1/posts?page=${page}`)).data
        const {data,pages: totalPages} = res
        console.log(data)
        setPages(totalPages)
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(`An error occured!`)
      }

    }
    fetchPosts()
  },[page])



  return (

    <div className='apps'>


    <Pagin page={page} pages={pages} changePage={setPage} />
    <div className='app_posts'>
      {
        posts.map(post=>(
          <Card key={post._id} post={post} />
        ))
      }
    </div>
    <Pagin page={page} pages={pages} changePage={setPage} />


    </div>

  )


}

export default Pagination