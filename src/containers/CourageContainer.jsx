import React, {useState, useEffect} from 'react';


function CourageContainer(){
    const [courage, setCourage] = useState('')
    useEffect(()=>{
        getCourage()
    },[]);

    const getCourage=()=>{
        fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
        .then(res => res.json())
        .then(data=> {
        //console.log(data.quotes)
        let dataCourage = data.quotes;
        let randomNum = Math.floor(Math.random()*dataCourage.length);
        //console.log(randomNum)
        let randomCourage=dataCourage[randomNum];
        //console.log(randomAdvice)
        setCourage(randomCourage.quote)
        })
    }

    const handleClick=()=>{
        getCourage();
    }

    return(
            
        <div id="courage-box">
            <div>
            <h1 id='courage-text'>{courage}</h1>
             
             <button className="courage-btn"
              onClick={handleClick}>Give me Courage!</button>
            </div>
            
          </div>
    
          
            

    )



}


export default CourageContainer 