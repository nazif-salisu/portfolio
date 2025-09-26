import {useEffect, useState } from "react";


  const TextCycler = () => {
    const texts = [ 'Naza', 'NazCon'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
      }, 2000);
      return()=> clearInterval(intervalId)
    }, [texts.length])

    return (
      <div className="text-container">
        <p style={{display: 'flex', fontSize: '3rem', color: '#00b7ff'}}>{texts[currentIndex]}</p>
      </div>
    )
  }


export default TextCycler;