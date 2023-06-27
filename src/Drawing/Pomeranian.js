import { useState } from 'react';
import './pomeranian.css'; 

const Pomeranian =  (()=> {


  return (
    <div className="pomeDrawing">
      
      <div className='pomeBodyWh'/>
      <div className='pomeranian'>
        <div className='pomeBody'>
          <div className='pomeHair1'>
            <div className='pomeEarLeft'>
              <div className='pomeEarIn'>
                <div/>
              </div>
            </div>
            <div/><div/>
            <div className='pomeEarRight'>
              <div className='pomeEarIn'>
                <div/>
              </div>
            </div>
          </div>
          <div className='pomeHair2'>
            <div/><div/>
          </div>
          <div className='pomeHair3'>
            <div/><div/>
          </div>
          <div className='pomeHair4'>
            <div/><div/><div/>
          </div>
        </div>
      
        <div className='pomeFace'>
          <div className='pomeEye'>
            <div className='peye'>
              <div className='ppupil'/>
            </div>
            <div className='peye'>
              <div className='ppupil'/>
            </div>
          </div>
          <div className='pomeFaceBottom'>
            <div className='pcheek'>
              <div className='left'/>
            </div>
            <div className='faceBottomCenter'>
              <div className='nose'/>
              <div className='philtrum'/>
              <div className='lips'/>
              <div className='mouth'/>
            </div>
            <div className='pcheek'>
              <div className='right'/>
            </div>
          </div>
        </div>

        <div className='pomeLegs'>
          <div>
            <div/>
          </div>
          <div>
            <div/>
          </div>
        </div>

        <div className='pomeTail'>
          <div className='pomeTailIn1'/>
          <div className='pomeTailIn2'/>
          <div className='pomeTailIn3'/> 
        </div>

        <div className='pomeTailBorder'>
          <div className='pomeTailIn1'/>
          <div className='pomeTailIn2'/>
          <div className='pomeTailIn3'/>
        </div>
        
      </div>     

    </div>
   );
})

export default Pomeranian;