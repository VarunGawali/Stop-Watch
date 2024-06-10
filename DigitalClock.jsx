import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, settime] = useState(new Date())

    useEffect(()=>{
        const intervalid = setInterval(()=>{
            settime(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalid)
        }
    },[])

    function formattime(){
        let hours = time.getHours()
        const min = time.getMinutes()
        const sec = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours%12 || 12

        return `${padzero(hours)}:${padzero(min)}:${padzero(sec)} ${meridiem}`
    }

    function padzero(number){
        return (number<10 ? "0": "") + number
    }

    return(
    <div className="clock-container">
        <div className="clock">
            <span>{formattime()}</span>
        </div>
    </div>)
}

export default DigitalClock