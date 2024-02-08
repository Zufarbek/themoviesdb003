import React, { useEffect, useState } from 'react'
import { api, baseURLImages, fileSizeImages } from '../../api/api'
import SidebarSection from '../../sections/movie/sidebar/sidebar.section.jsx'
import Main from '../../sections/movie/main/main.section.jsx'

export default function MoviePage() {
    const [movies, setMovies] = useState([])

    function getMovies() {
        const endPoint = 'movie/popular'
        api.get(endPoint)
        .then(response => {
            console.log("response => ", response);
            setMovies(response.data.results)
        })
        .catch(error => {
            console.log("error => ", error);
        })
    }

    useEffect(() => {
        getMovies()
    },[])
    
  return (
    <div>
        <SidebarSection/>
        <Main movies={movies}/>
    </div>
  )
}
