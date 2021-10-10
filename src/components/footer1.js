import React from 'react'

//css 
import '../Css/footer1.css'

export default function footer1() {

  const arr_icon = [
    {icon: 'fab fa-twitter fs-4 text-light'},
    {icon: 'fab fa-instagram fs-4 text-light '},
    {icon: 'fab fa-facebook-f fs-4 px-1 text-light '},
    {icon: 'fab fa-youtube fs-5 text-light '},
  ];

  return (
    <div className='background-footer1' >
      <div className='container d-flex justify-content-between h-100 ' >

        <div>

          <div className='d-flex flex-row justify-content-between'>                  
            <p className='fw-bold text-btn' >이용약관</p>
            <p className = ' fw-bold text-btn' >개인정보처리방침</p>
            <p className='fw-bold text-btn' >고객센터</p>
          </div>

          <p className='text-footer1 text-btn text-footer-' >비디온리 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : <a href="#" className='text-decoration-none text-footer1 text-btn text-footer-'>356-00-00000</a></p>
          <p className='text-footer1 text-btn text-footer-' >이메일 : <a href="#" className='text-decoration-none text-footer1 text-btn text-footer-'>test0101@vidionly.co.kr</a>｜ FAX : <a href="#" className='text-decoration-none text-footer1 text-btn text-footer-'>070-0000-0000</a></p>
          <p className='text-footer1 text-btn text-footer-' >서울특별시 강남구 도산대로 8길 17 3층 </p>
          <p className='text-footer1 mt-4 text-btn text-footer-' >Copyright© VIDIONLY All rights reserved.</p>

        </div>

        <div className='d-flex justify-content-between'>

          {arr_icon?.map((item,index) => {
            return(
              <div key={index} className=' px-1'>
                <div className=' icon-footer1' >
                  <i class={item.icon}></i>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}


