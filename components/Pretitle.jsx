import React from 'react'

const Pretitle = ({text,center}) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center && 'justify-center'}`}>
        <div className='w-2 h-2 bg-yellow-300'></div>
      <p className='font-[500] tracking-[3.2px] text-xl uppercase'>{text}</p>
              <div className='w-2 h-2 bg-yellow-300'></div>
    </div>
  )
}

export default Pretitle
