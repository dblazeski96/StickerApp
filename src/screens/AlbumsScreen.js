import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Navbar } from '../components/Navbar'
import { Album } from '../components/Album'

const slickSetting = {
  className: 'center',
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}

export const AlbumsScreen = ({ albums }) => (
  <div>
    <Navbar headline="Albums" />
    <Slider {...slickSetting}>
      {albums.map(album => (
        <Album key={album.id} album={album} />
      ))}
    </Slider>
  </div>
)
