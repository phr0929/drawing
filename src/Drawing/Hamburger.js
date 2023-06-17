import './hamburger.css';

const Hamburger =  (()=> {
  return (
    <div className="hamburgerDrawing">
      <div className='hamburger'>
        {/* 빵 */}
        <div className='bunTop'>
            <div>
              <span className='sesame rotate60'></span>
              <span className='sesame'></span>
              <span className='sesame rotateMinus60'></span>
            </div>
            <div>
              <span className='sesame rotate60'></span>
              <span className='sesame rotate40'></span>
              <span className='sesame'></span>
              <span className='sesame rotateMinus40'></span>
              <span className='sesame rotateMinus60'></span>
            </div>
        </div>
        {/* 빵 */}

        {/* 상추 */}
        <div className='lettuce'>
          <div className='lettuceLine'></div>
          <div  className='lettuceLeaf'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* 상추 */}

        
        {/* 토마토 */}
        <div className='tomato'>
          <div></div>
          <div></div>
        </div>
        {/* 토마토 */}


        {/* 치즈 */}
        <div className='cheezeLine'></div>
        <div className='cheezeLineBorder'></div>
        <div className='cheeze'>
          <div className='rotate60'></div>
          <div className='rotate45'></div>
          <div className='rotateMinus40'></div>
        </div> 
        {/* 치즈 */}

        {/* 고기 */}
        <div className='patty'></div>
        {/* 고기 */}

        {/* 양파 */}
        <div className='onion'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* 양파 */}

        {/* 빵 */}
        <div className='bunBottom'></div>
        {/* 빵 */}
      </div>

      <div className='cola' style={{position:'relative',display:'flex',alignItems:'center',
      boxSizing:'border-box',width:110,maxWidth:110,minWidth:110,height:190}}>
          <div className='bubble' style={{position:'absolute',width:'100%',height:'100%',display:'flex',flexDirection:'column',
          zIndex:1300,left:0,bottom:20,justifyContent:'flex-end',alignItems:'center'}}>
            <div style={{display:'flex'}}>
              <span className='bubble1' style={{width:4,height:4,margin:8}}></span>
              <span className='bubble2' style={{width:3,height:3,margin:16}}></span>
              <span className='bubble3'style={{width:4,height:4,margin:7}}></span>
            </div>
            <div style={{display:'flex'}}>
              <span className='bubble4' style={{width:3,height:3,margin:7}}></span>
              <span className='bubble5' style={{width:5,height:5,margin:12}}></span>
              <span className='bubble6' style={{width:4,height:4,margin:8}}></span>
            </div>
            <div style={{display:'flex'}}>
              <span className='bubble7' style={{width:4,height:4,margin:5}}></span>
              <span className='bubble8' style={{width:3,height:3,margin:12}}></span>
              <span className='bubble9' style={{width:4,height:4,margin:5}}></span>
            </div>
          </div>

         
          
          <div className='straw' style={{width:7,height:180,backgroundColor:'#d92620',transform:'rotate(6deg)',
          borderRadius:2, 
          position:'absolute',zIndex:1100,right:31,bottom:14,border:'3px solid #000'}}></div>

         

          
          <div className='colaOutside' style={{width:110,height:150,position:'absolute',bottom:0,left:0,
          zIndex:1200,display:'flex',alignItems:'flex-end',
          justifyContent:'center',marginBottom:5}}>
            <div style={{width:60,height:0, borderRadius:5,
            borderTop:'120px solid #3f101aaa',
            borderLeft:'16px solid #00000000',
            borderRight:'16px solid #00000000'}}></div>
          </div>

          
          <div className='colaInside' style={{width:110,height:150,position:'absolute',bottom:0,left:0,
          zIndex:900,display:'flex',alignItems:'flex-end',
          justifyContent:'center',marginBottom:5}}>
            <div style={{width:60,height:0, borderRadius:5,
            borderTop:'120px solid #3f101a',
            borderLeft:'16px solid #00000000',
            borderRight:'16px solid #00000000'}}></div>
          
          </div>
        
          <div className='colaCup' style={{width:64,height:0,position:'absolute',right:3,bottom:3,zIndex:800,borderRadius:7,
          borderTop:'144px solid #fff',borderLeft:'20px solid #00000000',borderRight:'20px solid #00000000'}}></div>
          <div className='colaCupBorder' style={{width:70,height:0,position:'absolute',right:0,bottom:0,zIndex:700,borderRadius:10,
          borderTop:'150px solid #323232',borderLeft:'20px solid #00000000',borderRight:'20px solid #00000000'}}></div>
      </div>
       
    </div>
   );
})

export default Hamburger;