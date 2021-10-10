import React, {Component} from 'react'
import Slider from "react-slick";

import '../Css/slider.css';

// image
import item1 from '../Image/item1.png';
import item2 from '../Image/item2.png';
import item3 from '../Image/item3.png';
import item4 from '../Image/item4.png';
import item5 from '../Image/item5.png';
import item6 from '../Image/item6.png';

export default function slider() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]};

  const arr_img_item = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6
  ]

  return (
    <div className='mt-5 pb'>
      <div className='d-flex justify-content-between pt-3 container'>
        <div>
          <p className='text-black text-sider'>기업들의 템플릿 제작</p>
        </div>
        <div>
          <p className='text'>MORE<i class="fas fa-chevron-right mx-1"></i></p>
        </div>
      </div>
      <div className='slider container' >
        <Slider {...settings}>
          {arr_img_item?.map((item, index) => {
            return(
              <div key={index} className='img px-3'>
                <img src = {item} alt="" width= '100%' height='100%' className='rounded'/>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
