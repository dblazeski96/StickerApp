import React from 'react'
import Slider from 'react-slick'

import { Album } from '../components/Album'

const slickSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const MySliderComponent = ({ albums }) => (
  <div>
    <Slider {...slickSetting}>
      {albums.map(album => (
        <Album key={album.id} album={album.name} />
      ))}
    </Slider>
  </div>
)
