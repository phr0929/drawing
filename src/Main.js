import React, { useEffect, useState } from 'react';
import { HashRouter, Routes ,Route, Router,BrowserRouter} from 'react-router-dom'
import './App.css';
import Pomeranian from './Drawing/Pomeranian'
import Hamburger from './Drawing/Hamburger' 
import Cupcake from './Drawing/Cupcake';
const Main = (() => {
  
  const ddList = [
    {name:'포메라니안',dd:<Pomeranian/>,codeLink:'https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult'},
    {name:'햄버거',dd:<Hamburger/>,codeLink:'https://codepen.io/njurvxuu-the-reactor/pen/wvQGPEv'}, 
    {name:'컵케이크',dd:<Cupcake/>,codeLink:'https://codepen.io/njurvxuu-the-reactor/pen/mdQEjyp'}
  ]

  const [codeLink,setCodeLink] = useState('https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult')
  const [dd,setDd] = useState(<Pomeranian/>)
  const [ddIdx,setDdIdx] = useState(0)

  const handleDd = (dd,link,idx) => {
    setDd(dd)
    setDdIdx(idx)
    setCodeLink(link)
  }

   const handleCode = (link) => {
      window.open(codeLink)
   }


  return (
    <div className="App">

 
 
        <div className='drawingList'>
            {ddList.map((val,idx)=>
                <div key={idx} className={ddIdx===idx?'dd ddCkOn':'dd ddCkOff'} onClick={()=>handleDd(val.dd,val.codeLink,idx)}>
                <div>{val.name}</div>
                </div>
            )}
            </div>
            <div className='imgBox'> 
            <div className='codeBtn' onClick={()=>handleCode(codeLink)}>
                CSS / HTML 코드
            </div>

            {dd}
        </div> 


    </div>
  );
})

export default Main;
