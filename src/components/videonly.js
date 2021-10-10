import React from 'react'

//css
import '../Css/videonly.css'

//images
import V1 from '../Image/imgGirl.png';

export default function videonly() {
  return (
    <div className='background-video' >
      <div className='container' >
        <div className='row align-items-center justify-content-evenly h-100 center' >
          <div className='col mb-5' >
            <img src= {V1} alt="" className='img-video'/>
          </div>
          <div  className='col'>
            <p className='text-video fw-bold '>WHAT IS THE VIDEONLY</p>
            <h2 className='fs-3 text-light fw-bold' >비디온리는 무엇인가요?</h2>
            <p className='mt-4 fs-6 text-light text-btn' >세상에는 수많은 회사들이 존재합니다. 비디온리에서는</p>
            <p className='fs-6 text-light text-btn'>그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다.</p>
            <p className='fs-6 text-light text-btn'>우리는 특정 회사에서 원하는 템플릿을 만들고, 해당</p>
            <p className='fs-6 text-light text-btn'>템플릿을 사용해서 직접 더 나은 비디오를 만들 수</p>
            <p className='fs-6 text-light text-btn'>있도록 컨설팅을 해줄 수 있습니다. 세계에서 하나 뿐인</p>
            <p className='fs-6 text-light text-btn'>템플릿, 직접 경험해보세요.</p>

            <button className='btn btn-outline-dark px-4 mt-5 text-btn'>시작하기</button>

          </div>
        </div>
      </div>
    </div>
  )
}
   