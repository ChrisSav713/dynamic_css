import React from 'react'

const SmallText = ({ label, text }) => {
  return (
    <div>
      <input
        className='smallTextInput'
        type='text'
        id={'text ' + { label }}
        value={text}
      />
    </div>
  )
}

export default SmallText

// pointer-events-none
// absolute
// left-3
// top-0
// mb-0
// max-w-[90%]
// origin-[0_0]
// truncate
// pt-[0.37rem]
// ext-xs
// leading-[1.5]
// text-neutral-500
// transition-all
// duration-200
// ease-out
// peer-focus:-translate-y-[0.75rem]
// peer-focus:scale-[0.8]
// peer-focus:text-primary
// peer-data-[te-input-state-active]:-translate-y-[0.75rem]
// peer-data-[te-input-state-active]:scale-[0.8]
// motion-reduce:transition-none
//dark:text-neutral-200
//dark:peer-focus:text-primary'
