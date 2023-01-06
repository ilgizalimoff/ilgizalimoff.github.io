import React from 'react'
import './PhotoItem.css'

export default function PhotoItem({photo}) {
    return (
        <div className="PhotoItem">
            <img key={photo.id} src={photo.href}
                alt="Тут должно быть фото" />
            <p >{photo.body}</p>
        </div>
    )
}
