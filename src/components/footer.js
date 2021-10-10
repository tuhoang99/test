import React from 'react'

//css
import '../Css/footer.css'

//img
import big1 from '../Image/bigIcon1.png';
import big2 from '../Image/bigIcon2.png';
import big3 from '../Image/bigIcon3.png';
import big4 from '../Image/bigIcon4.png';

export default function footer() {

  const arr_footer = [
    {
      img: big1,
      title: '이미지 찾기',
      sub1: '내 회사에 맞는 이미지를',
      sub2: '찾아 정합니다.',
    },
    {
      img: big2,
      title: '만들기',
      sub1: '정해둔 이미지에 맞춰',
      sub2: '템플릿을 만듭니다',
    },
    {
      img: big3,
      title: '정리하기',
      sub1: '회사와 비디온리가 소통을',
      sub2: '통해 퀄리티를 높입니다.',
    },
    {     
      img: big4,
      title: '제작 완료',
      sub1: '세상에 단 하나 뿐인',
      sub2: '영상 제작 완료!',
    },
  ]

  return (
    <div className='container background-footer' >

      <div className='d-flex flex-column align-items-center justify-conten-center h-100' >

        <h2 className='fw-bold fs-2'>한 눈에 보는 템플릿 절차</h2>
        <p className='mt-4 fs-6 text-btn' >비디온리가 아직 고민되시나요?</p>
        <p className='fs-6 text-btn text-footer-' >비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.</p>


        <div className='row justify-content-between mt-3' >

          {arr_footer?.map((item, index) => {
            return(
              <div key={index} className='px-3 col mb-2' >

                <div className='d-flex flex-column align-items-center justify-conten-center background-img' >
                  <img src= {item.img} alt="" className='img-footer'/>
                  <p className='fs-4 text-footer mt-3' > {item.title} </p>
                  <p className='text-sub' >{item.sub1}</p>
                  <p className='text-sub' >{item.sub2}</p>
                </div>

              </div>
            )
          })}

        </div>

      </div>
      
    </div>
  )
}
 