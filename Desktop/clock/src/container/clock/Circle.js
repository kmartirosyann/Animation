import React, { useEffect, useRef, useState } from 'react'
import {BigNumber, NumberClock,ArrowSec, ArrowMin, ArrowHour} from '../style/NumbersClock'


export const Circle = () => {
    const [newDey,setNewDey] = useState(new Date())
    const number = useRef([1,2,3,4,5,6,7,8,9,10,11,12])
    useEffect(()=>{
        setInterval(()=>setNewDey(new Date()),1000)
    },[])
  return (
    <div className='container'>
        <div className='clock'>
            <ArrowHour hour ={newDey.getHours() * 30}></ArrowHour>
            <ArrowMin min ={newDey.getMinutes()*6}></ArrowMin>
            <ArrowSec sec ={newDey.getSeconds()*6}></ArrowSec>
           {number.current.map((num,index)=>(
               <NumberClock key={index} i = {num}>
                   <BigNumber i = {num}>{num}</BigNumber>
                </NumberClock>
           ))}
        </div>
        <div className='time'>
            <div className='hour'>{newDey.getHours() < 10 ? '0' +  newDey.getHours():  newDey.getHours()}</div>
            <div className='minutes'>{newDey.getMinutes() < 10 ? '0' + newDey.getMinutes(): newDey.getMinutes() }</div>
            <div>{newDey.getSeconds() < 10 ? '0' + newDey.getSeconds(): newDey.getSeconds() }</div>
        </div>
    </div>
  )
}
