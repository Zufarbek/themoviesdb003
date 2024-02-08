import React from 'react'
import { baseURLImages, fileSizeImages } from '../../../api/api'
import Card from '../../../components/commons/card/card'

export default function MainSection(props) {
    const {movies} = props
  return (
    <div>
        {
            (movies && movies.length > 0) && (
                movies.map((movie, index) => {
                    return (
                        <Card key={index} item={movie}/>
                    )
                })
            )
        }
    </div>
  )
}
