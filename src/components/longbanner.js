import React from 'react'

//css
import '../Css/longbanner.css';

export default function longbanner() {
  return (
    <div className='long-banner' >

      <div className='d-flex flex-column align-items-center justify-content-center h-100'>
        <h2 className='text-light fw-bold text-banner'>퀄리티있는 브랜딩, 비디온리 하세요</h2>
        <h3 className='text-light fs-6 text-btn1' >나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요!</h3>
        <button className='btn btn-outline-light mt-3 btn-banner' >시작하기</button>
      </div>
      
    </div>
  )
}
