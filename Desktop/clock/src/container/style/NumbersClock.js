import styled from 'styled-components';


export const NumberClock = styled.span`
    font-size: 600;
    position: absolute;
    color: #fff;
    text-align: center;
    inset: 20px;
    transform: rotate(calc(30deg * ${(props)=>  props.i}));
`

export const BigNumber = styled.b`
    display: inline-block;
    opacity: 0.5;
    font-size: 600;
    transform: rotate(calc(-30deg * ${(props)=> props.i}));
 
`

export const ArrowSec = styled.div`
    position: absolute;
    width: 390px;
    height: 390px;
    border-radius: 50%;
    transform: rotate(calc(${(props)=>props.sec}deg));
    display: flex;
    justify-content: center;
    align-items: flex-start;
        &:before{
            content: '';
            position: absolute;
            border:2px solid red;
            height: 48%;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
        }

`

export const ArrowMin = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    transform: rotate(calc(${(props)=>props.min}deg));
    display: flex;
    justify-content: center;
    align-items: flex-start;
        &:before{
            content: '';
            position: absolute;
            border:3px solid green;
            height: 48%;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
        }
`

export const ArrowHour = styled.div`
 position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    transform: rotate(calc(${(props)=>props.hour}deg));
    display: flex;
    justify-content: center;
    align-items: flex-start;
        &:before{
            content: '';
            position: absolute;
            border:4px solid blue;
            height: 48%;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
        }
`