import React from 'react'
import { baseURLImages, fileSizeImages } from '../../../api/api'

export default function Card(prop) {
    const {item} = prop
  return (
    <>
        <img src={baseURLImages + fileSizeImages + item.poster_path} alt={item.original_title}/>
        <div> {item.original_title}</div>
    </>
  )
}
