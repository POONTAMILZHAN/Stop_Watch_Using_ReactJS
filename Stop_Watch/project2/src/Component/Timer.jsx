import React, { useEffect, useState } from 'react'
import './Timer.css'



function Timer() {

    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval;

        if(isRunning){
            interval=setInterval(() =>{
                setTime((prevTime) => prevTime +1)
            },1000)
        }

        return() => clearInterval(interval)

    },[isRunning])

    const startStopHandler =() =>{
        setIsRunning((previsRunning) => !previsRunning)

    }

    const resetHandler =() =>{
        setIsRunning(false)
        setTime(0)

    }
    const formatTime =() =>{
        const hours =Math.floor(time/3600)
        const mintues = Math.floor((time % 3600)/60)
        const seconds = Math.floor(time % 60)

        const formatNumber =(num) => (num<10 ?`0${num}` :num)
        return`${formatNumber(hours)}: ${formatNumber(mintues)}:${formatNumber(seconds)}`
    }






  return (
    <div>
        <div className='stopwatch'>
            <strong>Time: {formatTime()}</strong>
            <br></br>
            <br></br>
        
        <button onClick={startStopHandler}>{isRunning ? 'Stop' :'Start'}</button>
        <button onClick={resetHandler}>Reset</button>
        </div>
    
    </div>
  )
}

export default Timer
