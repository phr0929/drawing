import './hamburger.css';

const Hamburger =  (()=> {
  return (
    <div className="hamburgerDrawing">
      <div className='hamburger'>
        
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
        
        <div className='tomato'>
          <div></div>
          <div></div>
        </div>
        
        <div className='cheezeLine'></div>
        <div className='cheezeLineBorder'></div>
        <div className='cheeze'>
          <div className='rotate60'></div>
          <div className='rotate45'></div>
          <div className='rotateMinus40'></div>
        </div>
        
        <div className='patty'></div>
      
        <div className='onion'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <div className='bunBottom'></div>
   
      </div>

      <div className='cola'>
          <div className='bubble'>
            <div>
              <span className='bubble1'></span>
              <span className='bubble2'></span>
              <span className='bubble3'></span>
            </div>
            <div>
              <span className='bubble4'></span>
              <span className='bubble5'></span>
              <span className='bubble6'></span>
            </div>
            <div>
              <span className='bubble7'></span>
              <span className='bubble8'></span>
              <span className='bubble9'></span>
            </div>
          </div>
          
          <div className='straw'></div>
          
          <div className='colaContents colaOutside'>
            <div></div>
          </div>
          
          <div className='colaContents colaInside'>
            <div></div>
          </div>
        
          <div className='colaCup'></div>
          <div className='colaCupBorder'></div>
      </div>
       
    </div>
   );
})

export default Hamburger;