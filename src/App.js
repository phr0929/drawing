import { useEffect, useState } from 'react';
import './App.css';
import Pomeranian from './Drawing/Pomeranian'
import Hamburger from './Drawing/Hamburger'

const App = (() => {
  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  useEffect(()=>{
    setOneVh();

    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])

  const ddList = [
    {name:'포메라니안',dd:<Pomeranian/>,codeLink:'https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult'},
    {name:'햄버거',dd:<Hamburger/>,codeLink:'https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult'},
  ]

  const [codeLink,setCodeLink] = useState('https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult')
  const [dd,setDd] = useState(<Pomeranian/>)
  const [ddIdx,setDdIdx] = useState(0)
  const handleDd = (dd,link,idx) => {
    setDd(dd)
    setDdIdx(idx)
    setCodeLink(link)
  }
  
  const [dialog,setDialog] = useState(false)

   const handleCode = (link) => {
      // window.open('https://link.coupang.com/a/YgGg1')
      setDialog(true)
      // window.open(link)
   }


  return (
    <div className="App">

      {/* 테스트중 */}
      {/* <div>
        <Hamburger/>        
      </div> */}

      
      <div className='drawingList'>
        {ddList.map((val,idx)=>
          <div key={idx} className={ddIdx===idx?'dd ddCkOn':'dd ddCkOff'} onClick={()=>handleDd(val.dd,val.codeLink,idx)}>
            <div>{val.name}</div>
          </div>
        )}
      </div>
      <div className='imgBox'>
        <div style={{bottom:0,padding:20,left:0,textAlign:'center',width:'100%',position:'absolute',zIndex:2000,
        maxWidth:'100%',boxSizing:'border-box'}}>
          <div onClick={()=>handleCode(codeLink)}
          style={{padding:15,border:'1px solid #dcdcdc',backgroundColor:'#fff'}}>CSS / HTML 코드</div>
          {/* <div style={{fontSize:12,color:'#969696',marginTop:10,boxSizing:'border-box'}}>
            * 쿠팡 파트너스 활동의 일환으로 이에 따른 일정액의 수수료를 제공받습니다.</div> */}
        </div> 
      
        {dd}
      </div>



       {dialog?
        <div className='dialogLayout'>
          <div style={{padding:15,fontWeight:700,color:'#fff',zIndex:9999,marginBottom:10}} onClick={()=>setDialog(false)}>
            X 닫기
          </div>
          <iframe style={{width:'80%',height:'calc(80% - 50px)',maxHeight:700,border:0}} src={codeLink}>
          
          </iframe>
        </div>:<></>
      }



    </div>
  );
})

export default App;
