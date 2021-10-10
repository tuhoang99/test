import React from 'react'

//css
import '../Css/videomake.css'

//images
import VM1 from '../Image/imgComp.png';

export default function videomake() {
  return (
    <div className='background-videomake' >
      <div className='container' >
        <div className=' row align-items-center justify-content-evenly h-100 center'>
          <div className='text-end col mb-5 text-make-start' >

            <p className='text-videomake fw-bold '>How do I make a video</p>
            <h2 className='fs-3 text-dark fw-bold' >영상제작은 어떻게하나요?</h2>
            <p className='mt-4 fs-6 text-dark text-btn' >오직 단 하나의 영상 템플릿을 만들기 때문에 절차가</p>
            <p className='fs-6 text-dark text-btn'>어려울 것이라고 생각합니다. 하지만 우리는 특정</p>
            <p className='fs-6 text-dark text-btn'>회사에서 원하는 템플릿을 만들고, 해당 템플릿을</p>
            <p className='fs-6 text-dark text-btn'>사용해서 직접 더 나은 비디오를 만들 수 있도록</p>
            <p className='fs-6 text-dark text-btn'>컨설팅을 합니다. 세계에서 단 하나뿐인 템플릿, 어렵게</p>
            <p className='fs-6 text-dark text-btn'>생각하지 마세요. 비디 온리와 함께라면</p>
            <p className='fs-6 text-dark text-btn'>쉽고 간편하게 만들 수 있습니다.</p>

            <button className='btn btn-outline-danger px-4 mt-5 text-btn'>시작하기</button>

          </div>

          <div  className='col'>
            <img src= {VM1} alt="" className='img-videomake'/>
          </div>
        </div>
      </div>
    </div>
  )
}
      
