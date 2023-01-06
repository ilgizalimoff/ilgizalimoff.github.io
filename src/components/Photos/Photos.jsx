import React, { useState } from 'react'
import PhotoItem from './PhotoItem/PhotoItem'
import './Photos.css'

export default function Photos() {
  const [photos, setPhotos] = useState([
    { id: 1, body: 'Подпись к фото', href: 'https://phonoteka.org/uploads/posts/2021-05/1621530594_6-phonoteka_org-p-lizhnii-fon-7.jpg' },
    { id: 2, body: 'Подпись к фото', href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Quebec_Sprint_Cross-country_Skiing_World_Cup_2012_%284%29_V2.jpg/1200px-Quebec_Sprint_Cross-country_Skiing_World_Cup_2012_%284%29_V2.jpg' },
    { id: 3, body: 'Подпись к фото', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfTAudirS4xQ4x8icgeNg2aOnBIVr46r4kw&usqp=CAU' },
    { id: 4, body: 'Подпись к фото', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoftN-83N_NyQ_O2w8Y7GD--H65ctIVgmt1w&usqp=CAU' },
    { id: 5, body: 'Подпись к фото', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PHFuihqsMcYze485kWO6RFFyPBs_fSyJHA&usqp=CAU' },
    { id: 6, body: 'Подпись к фото', href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKi6yq8W22rF0wA37lhoWRvDt6iPhrgVuvA&usqp=CAU' },
  ])
  return (
    <div className='Photos'>
      {
        photos.map(photo =>
          <PhotoItem photo={photo} />
        )
      }

    </div>
  )
}
