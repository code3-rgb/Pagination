import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [post, setPost] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)



  useEffect(()=>{
    const fetchPosts = async ()=>{

      try {
        const res = (await axios(`http://localhost:5000/api/v1/posts?page=${page}`)).data
        const {data,pages: totalPages} = res
  
        setPages(totalPages)
        setPost(data)
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
    <div className="App">
      
    </div>
  )
}

export default App
