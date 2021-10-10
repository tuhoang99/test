import React from 'react';

// css
import '../Css/banner.css';

export default function banner() {
  return (
    <div className = "banner" >
      
      <div className = 'container h-100'>
        <div className='row justify-content-between pt-3'>

          <div className='col-6' >

            <h4 className='fw-bold text-light text-btn'>videonly</h4>

          </div>

          <div className='col-6 text-end' >

            <button className='btn btn-outline-light mx-2 btn-banner'>LOGIN</button>
            <button className='btn btn-danger mx-2 btn-banner'>JOIN</button>

          </div>

        </div>

        <div className='d-flex align-items-center justify-content-center h-100'>

          <div className='text-center text-light'>

              <h1 className='display-4 fw-bold text-banner'>비디온리는</h1>
              <h1 className='display-4 fw-bold text-banner'>오직 당신의 브랜드만를 위해 </h1>
              <h1 className='display-4 fw-bold text-banner'>템플릿을 만듭니다</h1>
              <p className='mt-3 text-btn1'>나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.</p>
              <button className='btn btn-danger mx-2 px-5 mt-3 btn-banner1'>시작하기</button>

          </div>

        </div>

      </div>
      
    </div>
  )
}