import React from 'react'

// css
import '../Css/notable.css'

export default function notable() {

  const arr_notable = [
    {
      icon: 'fas fa-inbox fs-3',
      text: '사용중인 기업',
      number: '41',
    },
    {
      icon: 'fas fa-comment-dots fs-3',
      text: '완료한 템플릿',
      number: '164',
    },
    {
      icon: 'fas fa-video fs-3',
      text: '체험가능한  템플릿',
      number: '82',
    },
  ]

  return (
    <div className='background-notable' >
      <div className='container d-flex flex-column align-items-center justify-content-evenly h-100'>

        <h3 className='text-light ' >체험 가능한 템플릿</h3>

        <div className='d-flex flex-row justify-content-between mt-4' >
          {arr_notable?.map((item, index) => {
            return(
              <div  key={index} className='px-3'>
                <div className='background-item d-flex flex-column align-items-center justify-content-center' width= '100%' height='100%'>
                  <i class={item.icon}></i>
                  <p className='mt-2'>{item.text}</p>
                  <h1 className='text-item'>{item.number}</h1>
                </div>
              </div>
            )
          })}
        </div>
        
        <p className='text-light fs-6 mt-4' >나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요! </p>
        <button className='btn btn-outline-light px-4 mt-3' >시작하기</button>
      
      </div>
    </div>
  )
}
