import { useState } from 'react';
import './pikachu.css'; 

const Pikachu =  (()=> {


  return (
    <div className="pikachuDrawing">
      <div className='monsterBall' style={{display:'flex', alignItems:'flex-end',zIndex:500,height:105}}>
        <div className='monsterBallLayout'>
          <div style={{width:100,height:50,backgroundColor:'#cf0e1b'}}></div>
          <div style={{width:100,height:50,backgroundColor:'#eee'}}></div>

          <div style={{position:'absolute',width:100,height:100,display:'flex',alignItems:'center',
        justifyContent:'center'}}>
            <div style={{width:40,height:10,backgroundColor:'#000'}}></div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:30,height:30,backgroundColor:'#000',borderRadius:50,marginRight:-5,marginLeft:-5}}>
              <div style={{width:15,height:15,backgroundColor:'#eee',borderRadius:50}}></div>
            </div>            
            <div style={{width:40,height:10,backgroundColor:'#000'}}></div>
          </div>
          
        </div>
      </div>
      <div className='pikachu' 
      style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:-73}}>

     

        {/* 귀 */}
        <div style={{display:'flex',alignItems:'flex-end',zIndex:50}}>
          <div className='pikachuLeftEar'>
            <div style={{width:40,height:30,backgroundColor:'#000',transform:'rotate(-20deg)',
            marginLeft:-7}}></div>
          </div> 

          <div className='pikachuRightEar'>
            <div style={{width:40,height:30,backgroundColor:'#000',transform:'rotate(20deg)',
            marginLeft:3}}></div>
          </div>
        </div>

        {/* 이마 */}
        <div style={{width:100,height:0,marginTop:-30,zIndex:60,
        borderRadius:'50% / 50%',borderBottom:'90px solid #ffc936',
        borderLeft:'22px solid transparent',borderRight:'22px solid transparent'}}></div>

        {/* 얼굴 */}
        <div style={{width:140,height:100,backgroundColor:'#ffc936',marginTop:-58,zIndex:70,
        borderRadius:'50% / 50%',display:'flex',flexDirection:'column',
        alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
          {/* 눈 */}
          <div style={{display:'flex',paddingTop:10}}>
            <div style={{width:20,height:20,backgroundColor:'#000',borderRadius:50,display:'flex',
            justifyContent:'flex-end',padding:3,boxSizing:'border-box'}}>
              <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#fff'}}></div>
            </div>

            <div style={{width:20,height:20,backgroundColor:'#000',borderRadius:50,display:'flex',
            padding:3,boxSizing:'border-box',marginLeft:45}}>
              <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#fff'}}></div>
            </div>
          </div>
          {/* 코,입,볼 */}
          <div style={{display:'flex',flex:1,alignItems:'center',width:'100%',marginTop:-30}}>
            <div style={{width:35,minWidth:35,height:35,borderRadius:100,backgroundColor:'#e51f2d',marginLeft:-7}}></div>
            
            <div style={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center', 
          marginTop:-35}}>
              <div style={{width:5,height:5,borderRadius:10,backgroundColor:'#000',zIndex:100}}></div>
             
              <div style={{width:2,height:0,borderTop:'25px solid #000',
              borderLeft:'12px solid transparent',
              borderRight:'12px solid transparent',borderRadius:5}}></div>
              <div style={{width:0,height:0,marginTop:-25,borderTop:'23px solid #e51f2d',
              borderLeft:'10px solid transparent',
              borderRight:'10px solid transparent',borderRadius:5}}></div>
  
              
              <div style={{display:'flex',marginTop:-25}}>
                <div style={{width:12,height:9,borderRadius:10,backgroundColor:'#000',
              }}></div>
                <div style={{width:12,height:9,borderRadius:10,backgroundColor:'#000',marginLeft:-2
              }}></div>
              </div>

              <div style={{display:'flex',marginTop:-11}}>
                <div style={{width:12,height:9,borderRadius:10,backgroundColor:'#ffc936',
              }}></div>
                <div style={{width:12,height:9,borderRadius:10,backgroundColor:'#ffc936',marginLeft:-2
              }}></div>
              </div>
              
              <div style={{width:50,backgroundColor:'#ffc936',height:5,marginTop:-7}}></div>
 

          
            </div>
            <div style={{width:35,minWidth:35,height:35,borderRadius:100,backgroundColor:'#e51f2d',marginRight:-7}}></div>
          </div>

          
        </div>


        
        <div style={{minWidth:12,height:0,marginTop:-20,borderTop:'5px solid #cf9035',zIndex:90,
      borderLeft:'8px solid transparent',borderRight:'8px solid transparent',borderRadius:20}}></div>
        
        <div style={{width:100,height:20,marginTop:-20,zIndex:80,
        borderRadius:'50% / 50%',borderBottom:'90px solid #ffc936',
        borderLeft:'27px solid transparent',borderRight:'27px solid transparent'}}>
          
        </div>
        
        <div style={{width:140,height:130,backgroundColor:'#ffc936',borderRadius:'40% / 70%',marginTop:-80,zIndex:80}}>
          
        </div>

        <div className='pikachuArm'>
          <div className='picachuArmLeft'></div>
          <div className='picachuArmRight'></div>
        </div>
        
        <div style={{display:'flex',marginTop:-5,zIndex:80}}>
          <div style={{width:32,height:15,backgroundColor:'#ffc936',borderTopLeftRadius:50,borderBottomRightRadius:10,borderBottomLeftRadius:10}}></div>
          <div style={{width:32,height:15,backgroundColor:'#ffc936',borderTopRightRadius:50,
          borderBottomRightRadius:10,borderBottomLeftRadius:10,marginLeft:10}}></div>
        </div>

        <div style={{width:'100%', display:'flex',flexDirection:'column',
        marginTop:-210 ,alignItems:'flex-end',height:210,zIndex:10,transform:'rotate(40deg)',marginLeft:20}}>
          
          <div style={{width:20,height:0,transform:'rotate(-20deg)',
            marginRight:2,borderBottom:'70px solid #ffc936',
            borderLeft:'15px solid transparent',borderRight:'15px solid transparent'}}></div>
          <div style={{width:35,height:60,transform:'rotate(60deg)',marginTop:-38,
            marginRight:8,backgroundColor:'#ffc936'}}></div>
          <div style={{width:25,height:30,transform:'rotate(-30deg)',marginTop:-10,
            marginRight:13,backgroundColor:'#ffc936'}}></div>
            <div style={{width:20,height:60,transform:'rotate(60deg)',marginTop:-27,
            marginRight:36,backgroundColor:'#ffc936',display:'flex',alignItems:'flex-end',paddingBottom:30,boxSizing:'border-box'}}>
              <div style={{width:2,height:0,borderBottom:'15px solid #92461e',borderLeft:'3px solid transparent',
              borderRight:'3px solid transparent'}}></div>
              <div style={{width:2,height:0,borderBottom:'15px solid #92461e',borderLeft:'3px solid transparent',
              borderRight:'3px solid transparent'}}></div>
              <div style={{width:2,height:0,borderBottom:'15px solid #92461e',borderLeft:'3px solid transparent',
              borderRight:'3px solid transparent'}}></div>
            </div>
          
        </div>
 
        
      </div>
      
    </div>
   );
})

export default Pikachu;