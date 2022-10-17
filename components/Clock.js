import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Clock = ({ mode }) => {
  
    const [date, setDate] = useState(moment())

    const refreshClock = () => setDate(moment())

    useEffect(() => {
      
        const timerId = setInterval(refreshClock, 1000)
        return () => clearInterval(timerId)

    }, [])
    
    
    return (
        <span suppressHydrationWarning >
            { mode == 'date' ? date.format('Do MMMM, YYYY') : date.format('HH:mm') }
        </span>
  )
}

export default Clock