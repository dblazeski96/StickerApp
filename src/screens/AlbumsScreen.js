import React from 'react'
import Slider from 'react-slick'

import { Navbar } from '../components/Navbar'
import { Album } from '../components/Album'

const slickSetting = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500
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
