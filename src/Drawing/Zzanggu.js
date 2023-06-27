import { useState } from 'react';
import './zzanggu.css';

const Zzanggu =  (()=> {

  const [dress,setDress] = useState(0)

  return (
    
    <div className="zzangguDrawing">
      <div className='dressSelectBar'>
        <span className={dress===0?'dressSelectOn':'dressSelectOff'} onClick={()=>setDress(0)}>
          <div className='dress1Top'></div>
          <div className='dress1Bottom'></div>
        </span>
        <span className={dress===1?'dressSelectOn':'dressSelectOff'} onClick={()=>setDress(1)}>
          <div className='dress2Top'>
            <div></div>
            <div></div> 
          </div>
        </span>
        <span className={dress===2?'dressSelectOn':'dressSelectOff'} onClick={()=>setDress(2)}>
            <div className='dress3Top'>
              <div >
                <div className='dress3Button'></div>
                <div className='dress3Button'></div>
              </div>
              <div  >
                <div className='dress3Button'></div>
                <div className='dress3Button'></div>
              </div>
            </div>
        </span>
        <span className={dress===3?'dressSelectOn':'dressSelectOff'} onClick={()=>setDress(3)}>
          <div className='dress4Top'>
          </div>
          <div className='dress4Bottom'></div>
        </span>
      </div>
      <div className='zzanggu'>
        <div className='face'>
          {/* 머리 */}
          <div className='hair'> 
          </div>
          {/* 이마 */}
          <div className='forehead'>
            <div></div>
            <div></div>
          </div>
          {/* 볼,귀 */}
          <div className='faceBottom'>
            <div className='cheek'>
              <div className='leftCheek'>
                <div className='pinkCheek'></div>
                <div className='pinkCheek'></div>
                <div className='pinkCheek'></div>
                <div className='pinkCheek'></div>
              </div>
              <div className='rightCheek'>
                <div className='pinkCheek'></div>
                <div className='pinkCheek'></div>
                <div className='pinkCheek'></div>
                <div className='pinkCheek'></div>
              </div>
            </div>
            <div className='ear'></div>
          </div>
          {/* 볼,귀 테두리*/}
          <div className='faceBottomBorder'>
            <div className='cheekBorder'></div>
            <div className='earBorder'></div>
          </div>
          <div className='faceDetail'>
            {/* 눈썹 */}
            <div className='eyebrow'>
              <div>
                <span className='eyebrowLeft'></span> 
                <span className='eyebrowRight'></span>
              </div>
              <div>
                <span className='eyebrowLeft'></span> 
                <span className='eyebrowRight'></span>
              </div>
            </div>
            {/* 눈썹 테두리 */}
            <div className='eyebrowBorder'>
              <div>
                <span className='eyebrowLeftBorder'></span> 
                <span className='eyebrowRightBorder'></span>
              </div>
              <div>
                <span className='eyebrowLeftBorder'></span> 
                <span className='eyebrowRightBorder'></span>
              </div>
            </div>
            {/* 눈 */}
            <div className='eye'>
              <div className='eyeIn'>
                <div className='eyelashes'>
                  <div></div>
                </div>
                <div className='eyelashesBottom'></div>  
                <div className='eyePupil pupilLeft'>
                  <div className='eyePupilIn'></div>
                </div>
              </div>
              <div className='eyeIn'>
                <div className='eyelashes'>
                  <div></div>
                </div>
                <div className='eyelashesBottom'></div>  
                <div className='eyePupil'>
                  <div className='eyePupilIn'></div>
                </div>
              </div>
            </div> 
            <div className='mouse'>
              <div className='mouseTop'>
                <div></div>
              </div>
              <div className='mouseBottom'></div>
            </div>
          </div>
        </div>
        {/* 짱구몸 */}
        <div className='body'>
          {dress===0?
          <div className='dress dress1'>
            <div className='tshirt'>
              <div className='tshirtArmLeft tshirtColor'></div>
              <div className='tshirtTorso'>
                <div className='tshirtBorder'></div>
                <div className='tshirtCenter tshirtColor'></div>
                <div className='tshirtBorder'></div>
              </div>
              <div className='tshirtArmRight tshirtColor'></div>
            </div>
            <div className='pants'>
              <div className='pantsLegsLeft pantsColor'></div>
              <div className='pantsLegsCenter pantsColor'></div>
              <div className='pantsLegsRight pantsColor'></div>
            </div>
            <div className='shoes'>
              <div className='shoesNull'></div>
              <div className='shoesLeft'>
                <div></div>
                <div className='shoesColor'></div>
              </div>
              <div className='shoesNull'></div>
              <div className='shoesRight'>
                <div></div>
                <div className='shoesColor'></div>
              </div>
              <div className='shoesNull'></div>
            </div>
          </div>
          :dress===1?
          <div className='dress dress2'>
            <div className='tshirt'>
              <div className='tshirtArmLeft tshirtColor'>
                <div className='tshirtArmCircle'></div>
              </div>
              <div className='tshirtTorso'>
                <div className='tshirtBorder'></div>
                <div className='tshirtCenter tshirtColor'>
                  <div className='tshirtQuadrangle'></div>
                  <div className='tshirtTriangle'>
                    <div></div>
                    <div></div>
                  </div>
                  <div className='tshirtCircle'></div>
                </div>
                <div className='tshirtBorder'></div>
              </div>
              <div className='tshirtArmRight tshirtColor'>
                 <div className='tshirtArmQuadrangle'></div>
              </div>
            </div>
            <div className='pants'>
              <div className='pantsLegsLeft pantsColor'>
                <div className='pantsTriangle'>
                  <div></div>
                  <div></div>
                </div>
                <div className='pantsCircle'></div>
              </div>
              <div className='pantsLegsCenter pantsColor'></div>
              <div className='pantsLegsRight pantsColor'>
                <div className='pantsQuadrangle'></div>
              </div>
            </div>
          </div>
          :
          dress===2?
          <div className='dress dress3'>
            <div className='tshirt'>
              <div className='tshirtArmLeft tshirtColor'></div>
              <div className='tshirtTorso'>
                <div className='tshirtBorder'></div>
                <div className='tshirtCenterColumn tshirtColor'>
                  <div className='tshirtKara'>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className='tshirtButton'>
                    <div></div>
                    <div></div>
                  </div>
                  <div className='tshirtButton'>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className='tshirtBorder'></div>
              </div>
              <div className='tshirtArmRight tshirtColor'></div>
            </div>
            <div className='pants'>
              <div className='pantsLegsLeft pantsColor'></div>
              <div className='pantsLegsCenter pantsColor'></div>
              <div className='pantsLegsRight pantsColor'></div>
            </div>
            <div className='shoes'>
              <div className='shoesNull'></div>
              <div className='shoesLeft'>
                <div></div>
                <div className='shoesColor'></div>
              </div>
              <div className='shoesNull'></div>
              <div className='shoesRight'>
                <div></div>
                <div className='shoesColor'></div>
              </div>
              <div className='shoesNull'></div>
            </div>
          </div>
          :
          <div className='dress dress4'>
            <div className='tshirt'> 
              <div className='tshirtArmLeft tshirtColor'></div>
              <div className='tshirtTorso'>
                <div className='tshirtBorder'></div>
                <div className='tshirtCenterColumn tshirtColor'>
                  <div className='tshirtNeck'></div>
                  <div className='tshirtCrease'> 
                      <div></div>
                      <div></div>
                      <div></div> 
                  </div>
                </div>
                <div className='tshirtBorder'></div>
              </div> 
              <div className='tshirtArmRight tshirtColor'></div>
            </div>
            <div className='pants'>
              <div className='pantsLegsLeft pantsColor'></div>
              <div className='pantsLegsCenter pantsColor'></div>
              <div className='pantsLegsRight pantsColor'></div>
            </div>
            <div className='shoes'>
              <div className='shoesNull'></div>
              <div className='shoesLeft'>
                <div></div>
                <div className='shoesColor'></div>
              </div>
              <div className='shoesNull'></div>
              <div className='shoesRight'>
                <div></div>
                <div className='shoesColor'></div>
              </div>
              <div className='shoesNull'></div>
            </div>
          </div>}

          <div className='nudeBody'>
            {/* 오른팔 */}
            <div className='arm armLeft'>
              <div></div>
              <div className='fingerLeft'></div>
              <div className='fingerLeftBorder'></div>
            </div>
            <div className='bodyCenter'>
              {/* 몸통 */}
              <div className='torso'>
                <div></div>
                <span></span>
                <div></div>
              </div>
              <div className='diaper'></div>
              {/* 다리 */}
              <div className='legs'>
                <div className='legsLeft'>
                  <div></div>
                  <div className='footLeft'></div>
                  <div className='footLeftBorder'></div>
                </div>
                <div className='legsRight'>
                  <div></div>
                  <div className='footRight'></div>
                  <div className='footRightBorder'></div>
                </div>
              </div>
            </div>
            {/* 오른팔 */}
            <div className='arm armRight'>
              <div></div>
              <div className='fingerRight'></div>
              <div className='fingerRightBorder'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
})

export default Zzanggu;