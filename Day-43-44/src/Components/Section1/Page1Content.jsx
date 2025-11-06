import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-8 h-[90vh] px-18 flex gap-10 items-center'>
      <LeftContent />
      <RightContent card={props.card} />
    </div>
  )
}

export default Page1Content