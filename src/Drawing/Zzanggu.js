import { useState } from 'react';
import './zzanggu.css';

const Zzanggu =  (()=> {

  const [dress,setDress] = useState(0)

  return (
    <div className="zzangguDrawing">
      <div style={{display:'flex',marginBottom:40}}>

        <div onClick={()=>setDress(0)} style={{width:35,height:35,display:'flex',flexDirection:'column',border:dress===0?'3px solid #000':'3px solid #ccc',borderRadius:5,alignItems:'center',justifyContent:'center',margin:5}}>
          <div style={{display:'flex',flex:2,width:'100%',backgroundColor:'#c91f2b'}}>
          </div>
          <div style={{display:'flex',flex:1,width:'100%',backgroundColor:'#f7f06d',borderTop:'2px solid #000'}}></div>
        </div>

        <div onClick={()=>setDress(1)} style={{fontSize:10,width:35,height:35,display:'flex',flexDirection:'column',border:dress===1?'3px solid #000':'3px solid #ccc',borderRadius:5,alignItems:'center',justifyContent:'center',margin:5}}>
          <div style={{display:'flex',flex:1,width:'100%',backgroundColor:'#cbe2df',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:10,height:10,backgroundColor:'#f9df1e',margin:2,border:'2px solid #000'}}></div>
            <div style={{width:10,height:10,borderRadius:10,backgroundColor:'#3a9b38',margin:2,border:'2px solid #000'}}></div> 
          </div>
        </div>

        <div onClick={()=>setDress(2)} style={{width:35,height:35,display:'flex',flexDirection:'column',border:dress===2?'3px solid #000':'3px solid #ccc',borderRadius:5,alignItems:'center',justifyContent:'center',margin:5}}>
            <div style={{display:'flex',flexDirection:'column',flex:1,width:'100%',backgroundColor:'#1a3a82',justifyContent:'center'}}>
              <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
                <div style={{width:5,height:5,borderRadius:10,backgroundColor:'#f7f06d',border:'2px solid #000',margin:2}}></div>
                <div style={{width:5,height:5,borderRadius:10,backgroundColor:'#f7f06d',border:'2px solid #000',margin:2}}></div>
              </div>
              <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
                <div style={{width:5,height:5,borderRadius:10,backgroundColor:'#f7f06d',border:'2px solid #000',margin:2}}></div>
                <div style={{width:5,height:5,borderRadius:10,backgroundColor:'#f7f06d',border:'2px solid #000',margin:2}}></div>
              </div>
            </div>
        </div>

        <div onClick={()=>setDress(3)} style={{width:35,height:35,display:'flex',flexDirection:'column',border:dress===3?'3px solid #000':'3px solid #ccc',borderRadius:5,alignItems:'center',justifyContent:'center',margin:5}}>
          <div style={{display:'flex',flex:2,width:'100%',backgroundColor:'#9ac1d1'}}>
          </div>
          <div style={{display:'flex',flex:1,width:'100%',backgroundColor:'#1a3a82',borderTop:'2px solid #000'}}></div>
        </div>
      </div>

      <div className='zzanggu'>
        <div className='zzangguFace'>
          {/* 머리 */}
          <div className='zzangguHair'> 
          </div>
          
          {/* 이마 */}
          <div className='zzangguForehead'>
            <div></div>
            <div></div>
          </div>
          
          {/* 볼,귀 */}
          <div className='zzangguFaceBottom'>
            <div className='zzangguCheek'>
              <div className='zzangguLeftCheek'>
                <div className='zzangguPinkCheek'></div>
                <div className='zzangguPinkCheek'></div>
                <div className='zzangguPinkCheek'></div>
                <div className='zzangguPinkCheek'></div>
              </div>
              
              <div className='zzangguRightCheek'>
                <div className='zzangguPinkCheek'></div>
                <div className='zzangguPinkCheek'></div>
                <div className='zzangguPinkCheek'></div>
                <div className='zzangguPinkCheek'></div>
              </div>
            </div>
            <div className='zzangguEar'></div>
          </div>

          {/* 볼,귀 테두리*/}
          <div className='zzangguFaceBottomBorder'>
            <div className='zzangguCheekBorder'></div>
            <div className='zzangguEarBorder'></div>
          </div>

          <div className='zzangguFaceDetail'>
          
            {/* 눈썹 */}
            <div className='zzangguEyebrow'>
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
            <div className='zzangguEyebrowBorder'>
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
            <div className='zzangguEye'>
              <div className='zzangguEyeLeft'>
                <div className='zzangguEyelashes'>
                  <div></div>
                </div>
                <div className='zzangguEyelashesBottom'></div>  
                <div className='zzangguEyePupil pupilLeft'>
                  <div className='zzangguEyePupilIn'></div>
                </div>
              </div>

              <div className='zzangguEyeLeft'>
                <div className='zzangguEyelashes'>
                  <div></div>
                </div>
                <div className='zzangguEyelashesBottom'></div>  
                <div className='zzangguEyePupil'>
                  <div className='zzangguEyePupilIn'></div>
                </div>
              </div>

            </div> 

            <div className='zzangguMouse'>
              <div className='zzangguMouseTop'>
                <div></div>
              </div>
              <div className='zzangguMouseBottom'></div>
            </div>
          </div>

        </div>

 

        {/* 짱구몸 */}
        <div className='zzangguBody'> 

          {dress===0?
          <div className='zzangguDress zzangguDress1'>
            <div className='zzangguTshirt'>
              <div></div>
              <div>
                <div className='zzangguTshirtBorder'></div>
                <div className='zzangguTshirtCenter'></div>
                <div className='zzangguTshirtBorder'></div>
              </div>
              <div></div>
            </div>
 
            <div className='zzangguPants'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            
            <div className='zzangguShoes'>
              <span>
                <div className='zzangguSocksLeft'></div>
                <div className='zzangguShoesLeft'>
                </div>
              </span>
              <span>
                <div className='zzangguSocksRight'></div>
                <div className='zzangguShoesRight'>
                </div>
              </span>
            </div>
          
          </div>
          :dress===1?
          <div className='zzangguDress zzangguDress2'>
            <div className='zzangguTshirt'>
              <div>
                <div></div>
              </div>
              <div>
                <div className='zzangguTshirtBorder'></div>
                <div className='zzangguTshirtCenter'>
                  <div className='zzangguTshirtQuadrangle'></div>
               
                  <div className='zzangguTshirtTriangle'>
                    <div></div>
                    <div></div>
                  </div>
                  <div className='zzangguTshirtCircle'></div>
                </div>
                <div className='zzangguTshirtBorder'></div>
              </div>
              <div>
                 <div></div>
              </div>
            </div>

            <div className='zzangguPants'>
              <div>
                <div className='zzangguPantsTriangle'>
                  <div></div>
                  <div></div>
                </div>
                <div className='zzangguPantsCircle'></div>
            
              </div>
              <div></div>
              <div>
                <div className='zzangguPantsQuadrangle'></div>
              </div>
            </div>
          </div>
          :
          dress===2?
          <div className='zzangguDress zzangguDress3'>
            <div className='zzangguTshirt3' style={{display:'flex',zIndex:600,marginTop:-11}}>
              <div style={{zIndex:650,width:25,height:70,marginTop:10,backgroundColor:"#1a3a82",border:'3px solid #000',transform:'rotate(15deg)',marginRight:-20,overflow:'hidden',borderTopLeftRadius:25}}></div>
              <div style={{zIndex:700,width:125,height:100,backgroundColor:'#1a3a82',display:'flex',marginTop:10,
                 borderTopRightRadius:50,borderTopLeftRadius:50,alignItems:'flex-end'}}>
                <div style={{height:70,width:3,backgroundColor:'#000'}}></div>
                <div style={{display:'flex',flexDirection:'column',flex:1,justifyContent:'flex-start',alignItems:'center',height:'100%',borderBottom:'3px solid #000',}}>
                  <div style={{display:'flex',}}>
                    <div style={{width:30,height:30,borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#fff',border:'3px solid #000',marginRight:-28,zIndex:650}}></div>
                    <div style={{width:45,height:40,borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#fff',border:'3px solid #000',zIndex:600}}></div>
                    <div style={{width:30,height:30,borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#fff',border:'3px solid #000',marginLeft:-28,zIndex:650}}></div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#f7f06d',border:'3px solid #000',margin:'4px 10px 4px 10px'}}></div>
                    <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#f7f06d',border:'3px solid #000',margin:'4px 10px 4px 10px'}}></div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#f7f06d',border:'3px solid #000',margin:'4px 10px 4px 10px'}}></div>
                    <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#f7f06d',border:'3px solid #000',margin:'4px 10px 4px 10px'}}></div>
                  </div>
                  
                </div>
                <div style={{height:70,width:3,backgroundColor:'#000'}}></div>
              </div>
              <div style={{zIndex:650,width:25,height:70,marginTop:10,backgroundColor:"#1a3a82",border:'3px solid #000',transform:'rotate(-10deg)',marginLeft:-20,overflow:'hidden',
              borderTopRightRadius:25}}></div>
            </div>

            <div className='zzangguPants3' style={{display:'flex',marginTop:-5,zIndex:500,justifyContent:'center'}}>
              <div style={{borderBottomLeftRadius:5,borderBottomRightRadius:5,width:55,height:30,backgroundColor:'#1a3a82',transform:'rotate(5deg)',border:'3px solid #000',zIndex:500}}></div>
              <div style={{width:10,height:20,backgroundColor:'#1a3a82',zIndex:550,borderBottom:'3px solid #000',borderRadius:3,margin:'0px -5px 0px -5px'}}></div>
              <div style={{borderBottomLeftRadius:5,borderBottomRightRadius:5,width:55,height:30,backgroundColor:'#1a3a82',transform:'rotate(-5deg)',border:'3px solid #000',zIndex:500}}></div>
            </div>
            
            <div className='zzangguShoes'>
              <span>
                <div className='zzangguSocksLeft'></div>
                <div className='zzangguShoesLeft'>
                </div>
              </span>
              <span>
                <div className='zzangguSocksRight'></div>
                <div className='zzangguShoesRight'>
                </div>
              </span>
            </div>
          
          </div>
          :
          <div className='zzangguDress zzangguDress4'>
            <div className='zzangguTshirt1' style={{display:'flex',zIndex:600,marginTop:-11}}>
              <div style={{zIndex:650,width:25,height:70,marginTop:10,backgroundColor:"#9ac1d1",border:'3px solid #000',transform:'rotate(15deg)',marginRight:-20,overflow:'hidden',borderTopLeftRadius:25}}></div>
              <div style={{zIndex:700,width:125,height:100,backgroundColor:'#9ac1d1',display:'flex',marginTop:10,
            borderTopRightRadius:50,borderTopLeftRadius:50,alignItems:'flex-end'}}>
                <div style={{height:70,width:3,backgroundColor:'#000'}}></div>
                <div style={{display:'flex',flexDirection:'column',flex:1,justifyContent:'flex-start',alignItems:'center',height:'100%',borderBottom:'3px solid #000',}}>
                  <div style={{width:30,height:20,borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#f5d5c2',border:'3px solid #000'}}></div>
                  <div style={{display:'flex'}}>
                    <div style={{width:3,height:10,backgroundColor:'#000',margin:3,borderRadius:10,transform:'rotate(20deg)'}}></div>
                    <div style={{width:3,height:10,backgroundColor:'#000',margin:5,borderRadius:10}}></div>
                    <div style={{width:3,height:10,backgroundColor:'#000',margin:3,borderRadius:10,transform:'rotate(-20deg)'}}></div>
                  </div>
                </div>
                <div style={{height:70,width:3,backgroundColor:'#000'}}></div>
              </div>
              <div style={{zIndex:650,width:25,height:70,marginTop:10,backgroundColor:"#9ac1d1",border:'3px solid #000',transform:'rotate(-10deg)',marginLeft:-20,overflow:'hidden',
              borderTopRightRadius:25}}></div>
            </div>

            <div className='zzangguPants4' style={{display:'flex',marginTop:-5,zIndex:500,justifyContent:'center'}}>
              <div style={{borderBottomLeftRadius:5,borderBottomRightRadius:5,width:55,height:30,backgroundColor:'#1a3a82',transform:'rotate(5deg)',border:'3px solid #000',zIndex:500}}></div>
              <div style={{width:10,height:20,backgroundColor:'#1a3a82',zIndex:550,borderBottom:'3px solid #000',borderRadius:3,margin:'0px -5px 0px -5px'}}></div>
              <div style={{borderBottomLeftRadius:5,borderBottomRightRadius:5,width:55,height:30,backgroundColor:'#1a3a82',transform:'rotate(-5deg)',border:'3px solid #000',zIndex:500}}></div>
            </div>
            
            <div className='zzangguShoes'>
              <span>
                <div className='zzangguSocksLeft'></div>
                <div className='zzangguShoesLeft'>
                </div>
              </span>
              <span>
                <div className='zzangguSocksRight'></div>
                <div className='zzangguShoesRight'>
                </div>
              </span>
            </div>
          
          </div>}



          <div className='zzangguNudeBody'>
            {/* 왼팔 */}
            <div className='zzangguArm zzangguArmLeft'>
              <div></div>
              <div className='zzangguFingerLeft'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            {/* 왼팔 테두리 */}
            <div className='zzangguArmBorder zzangguArmLeftBorder'>
              <div></div> 
              <div className='zzangguFingerLeftBorder'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className='zzangguBodyCenter'>
              <div className='zzangguTorso'>
                <div></div>
                <span></span>
                <div></div>
              </div>
              <div className='zzangguDiaper'></div>
              {/* 다리 */}
              <div className='zzangguLegs'>
                <div className='zzangguLegsLeft'>
                  <div></div>
                  <div className='zzangguFootLeft'></div>
                </div>
                <div className='zzangguLegsRight'>
                  <div></div>
                  <div className='zzangguFootRight'></div>
                </div>
              </div>
              {/* 다리 테두리 */}
              <div className='zzangguLegsBorder'>
                <div className='zzangguLegsLeftBorder'>
                  <div></div>
                  <div className='zzangguFootLeftBorder'></div>
                </div>


                <div className='zzangguLegsRightBorder'>
                  <div></div>
                  <div className='zzangguFootRightBorder'></div>
                </div>


              </div>
            </div>

            {/* 오른팔 */}
            <div className='zzangguArm zzangguArmRight'>
              <div></div>
              <div className='zzangguFingerRight'> 
              </div>
            </div>
            
            {/* 오른팔 테두리 */}
            <div className='zzangguArmBorder zzangguArmRightBorder'>
              <div></div>
              <div className='zzangguFingerRightBorder'>
                <span></span>
              </div>
            </div>

          </div>

        </div>
      </div> 

    </div>
   );
})

export default Zzanggu;