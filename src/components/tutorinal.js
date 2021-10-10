import React from 'react'

// css
import '../Css/tutorinal.css'

//image

import A1 from '../Image/1.png'
import A2 from '../Image/2.png'
import A3 from '../Image/3.png'

export default function tutorinal() {

  const arr_item_tutorial = [
    {
      img: A1,
      img_text: '첫번째', 
      title: '내 브랜드에 맞는',
      title_sub: '영상 만들기'
    },
    {
      img: A2,
      img_text: '두번째', 
      title: '작업자들이 소통하며',
      title_sub: '템플릿 영상 작업'
    },
    {
      img: A3,
      img_text: '세번째', 
      title: '단 하나 뿐인',
      title_sub: '내 브랜드 영상 제작 완료'
    },

  ];


  return (
    <div className='background'>
      <div className='container'>
        <div>
          <p className='text-tutorial fw-bold' >TUTORIAL GUIDE</p>
          <h2 className='fw-bold fs-4' >영상 만들기, 어렵지 않아요</h2>
        </div>
        <div className='mt-4'>
          <p className='fs-6 text-btn'>나에게 맞는 템플릿,</p>
          <p className='fs-6 text-btn'>망설이지 말고 지금 직접 체험해보세요!</p>
        </div>
        <div className='row justify-content-between mt-5' >
          {arr_item_tutorial?.map((item, index) =>{
            return(
              <div key={index} className='img-tutorial col-md-6 mb-2' style = {{backgroundImage: `url(${item.img})` }}>

                <div className='row justify-content-between ' >
                  <p className='img-text col' >{item.img_text}</p>
                  <i class="fas fa-long-arrow-alt-right col text-end"></i>
                </div>

                <div className='' >
                  <p className='fw-bold fs-4'> {item.title} </p>
                  <p className='fw-bold fs-4 text-btn'> {item.title_sub} </p>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
