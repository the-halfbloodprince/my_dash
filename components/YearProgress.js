import React from 'react'
import moment from 'moment'

const YearProgress = () => {
  return (
      <div className='w-[80vw] h-[15px] bg-[#333] rounded-full overflow-hidden'>
        {/* year progress bar */}
        <div 
            className={`relative h-[15px] bg-green-500`} 
            style={{
                width: `${Math.floor(moment().dayOfYear() / 365 * 100)}%`
            }}
            >
        </div>
    </div>
  )
}

export default YearProgress