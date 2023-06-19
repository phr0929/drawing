import { useState } from 'react';
import './building.css'; 
import imgBuilding from '../resource/building.jpg'

const Building =  (()=> {


  return (
    <div className="bulidingDrawing"> 
        {/* 부모 지울것임 */}
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
          <div style={{width:10,minHeight:10,backgroundColor:'#70777f',boxShadow:'inset 0px 0px 0px 2px #666',borderRadius:10, zIndex:1300,}}></div>
          <div style={{display:'flex',justifyContent:'center',zIndex:1200,marginTop:24}}>
            <div style={{width:150,marginRight:-7,height:6,transform:'rotate(-24deg)',display:'flex'}}>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
            </div> 
            <div style={{width:150,marginLeft:-7,height:6,transform:'rotate(24deg)',display:'flex'}}>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
              <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
            </div>
          </div>
          
          <div style={{display:'flex', alignItems:'flex-start',justifyContent:'center',zIndex:1000,}}>
            <div style={{width:148,marginRight:-8,height:13,backgroundColor:'#efefef',transform:'rotate(-24deg)'}}></div> 
            <div style={{width:148,marginLeft:-8,height:13,backgroundColor:'#efefef',transform:'rotate(24deg)'}}></div>
          </div>
          <div style={{width:0,height:0,borderBottom:'65px solid #d6d5d4',zIndex:900,
              borderLeft:'135px solid transparent',borderRight:'135px solid transparent',marginTop:-45}}></div>

          <div style={{display:'flex',height:'100%',width:270,marginTop:-4,alignItems:'flex-end',
              zIndex:1100}}>
            <div style={{display:'flex',justifyContent:'flex-start',width:'100%',height:10,}}>
              <div style={{width:32,height:14,backgroundColor:'#efefef',}}></div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',width:'100%',height:10,}}>
              <div style={{width:32,height:14,backgroundColor:'#efefef',}}></div>
            </div>
            
          </div>

          <div style={{width:0,height:0,borderTop:'65px solid #c6c6c6', marginTop:4,zIndex:800, 
              borderLeft:'135px solid transparent',borderRight:'135px solid transparent'}}></div>

          <div style={{width:270,zIndex:950,marginTop:-77,display:'flex',justifyContent:'center',}}>
            <div style={{width:225,height:150,backgroundColor:'#d6d5d4',display:'flex',flexDirection:'column',alignItems:'center'}}>
              
              <div style={{width:1.5,height:22,backgroundColor:'#969696',marginTop:-53}}></div>
              
              <div style={{width:25,height:25,backgroundColor:'#fc8a35',borderRadius:50,marginLeft:-7,marginTop:-2,boxShadow:'4px 2px 4px 0px #aaa'}}>
                <div style={{width:19,height:19,backgroundColor:'#d6d5d4',borderRadius:50,margin:-1}}></div>
              </div>
              

              <div style={{color:'#323232',display:'flex',width:'100%',fontWeight:700,fontSize:12,transform:'scale(0.6)',marginTop:0,textShadow:'0px 0px 2px #5d5d5d',}}>
                <div style={{width:'100%'}}></div>
                <div style={{display:'flex',flexDirection:'column',width:'auto',
                minWidth:'fit-content',textAlign:'right',marginLeft:-6}}>
                  <div>달빛</div>
                  <div style={{fontSize:14,}}>미술관</div>
                </div>
                <div style={{width:'100%',display:'flex',height:'100%',alignItems:'flex-end'}}>
                  <div style={{paddingLeft:20,fontSize:10}}>
                    又田
                  </div>
                  <div>
                    마진식
                  </div>
                </div>
              </div>
              
              <div style={{width:150,height:84,marginTop:-4,backgroundColor:'#5d5d5d',boxSizing:'border-box',border:'6px solid #c5cfd3',
              borderTop:'3px solid #c5cfd3',borderBottom:'3px solid #c5cfd3'}}> 
                <div style={{width:'100%',height:2,backgroundColor:'#00000030',marginTop:15}}></div>
                
                <div style={{display:'flex',width:'100%',alignItems:'flex-end',justifyContent:'center',height:'100%',marginTop:-17}}>
                  <div style={{width:30,height:28,backgroundColor:'#323232',margin:'0px 0px 25px 10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:3,height:3,backgroundColor:'#5d5d5d',borderRadius:50,margin:2,filter:'blur(0.7px)'}}></div>
                    <div style={{width:5,height:5,backgroundColor:'#5d5d5daa',borderRadius:50,marginBottom:3,filter:'blur(0.8px)'}}></div>
                    <div style={{width:3,height:3,backgroundColor:'#5d5d5daa',borderRadius:50,marginTop:7,filter:'blur(0.5px)'}}></div>
                    <div style={{width:4,height:4,backgroundColor:'#5d5d5daa',borderRadius:50,marginBottom:10,filter:'blur(1px)'}}></div>
                    <div style={{width:4,height:4,backgroundColor:'#5d5d5d',borderRadius:50,marginTop:5,filter:'blur(0.7px)'}}></div>
                  </div>
                  <div style={{height:55,width:60,backgroundColor:'#323232',margin:'0px 10px 0px 10px',boxShadow:'inset 6px 6px 0px 6px #00000030', }}></div>
                </div>
              </div>
              
              <div style={{display:'flex',flexDirection:'column',width:150,height:46,}}>
                
                <div style={{display:'flex',width:150,height:'12.5%'}}>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'7%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ccb092',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#a9744d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#c5b19e',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ad7158',boxSizing:'border-box'}}></div>
                </div>
                <div style={{display:'flex',width:150,height:'calc(12.5% - 1px)',marginTop:1}}>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'9%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div> 
                  <div style={{height:'100%',width:'8%',backgroundColor:'#ccb092',boxSizing:'border-box'}}></div>
                </div>
                <div style={{display:'flex',width:150,height:'calc(12.5% - 1px)',marginTop:1}}>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'7%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ccb092',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#a9744d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#c5b19e',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ad7158',boxSizing:'border-box'}}></div>
                </div>
                <div style={{display:'flex',width:150,height:'calc(12.5% - 1px)',marginTop:1}}>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'9%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div> 
                  <div style={{height:'100%',width:'8%',backgroundColor:'#ccb092',boxSizing:'border-box'}}></div>
                </div>
                <div style={{display:'flex',width:150,height:'calc(12.5% - 1px)',marginTop:1}}>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'7%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ccb092',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#a9744d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#c5b19e',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ad7158',boxSizing:'border-box'}}></div>
                </div>
                <div style={{display:'flex',width:150,height:'calc(12.5% - 1px)',marginTop:1}}>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'9%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div> 
                  <div style={{height:'100%',width:'8%',backgroundColor:'#ccb092',boxSizing:'border-box'}}></div>
                </div>
                <div style={{display:'flex',width:150,height:'calc(12.5% - 1px)',marginTop:1}}>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'7%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ccb092',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#a9744d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#c5b19e',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#ad7158',boxSizing:'border-box'}}></div>
                </div>
                <div style={{display:'flex',width:150,height:'calc(12.5% - 1px)',marginTop:1}}>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'12%',backgroundColor:'#cbb69d',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#ad7158',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'11%',backgroundColor:'#795c49',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'8%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'9%',backgroundColor:'#9f7057',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div>
                  <div style={{height:'100%',width:'10%',backgroundColor:'#ba7648',boxSizing:'border-box',borderRight:'1px solid #dcdcdc'}}></div> 
                  <div style={{height:'100%',width:'8%',backgroundColor:'#ccb092',boxSizing:'border-box'}}></div>
                </div>
                
                
                
              </div>

                
            </div>
          </div>

          

          {/* <div style={{width:10,height:10,backgroundColor:'#70777f',boxShadow:'inset 0px 0px 0px 2px #666',borderRadius:10,position:'absolute',zIndex:1300,}}></div>
          <div style={{width:270,height:65,position:'relative',justifyContent:'center',marginTop:35}}>
              <div style={{display:'flex',position:'absolute',alignItems:'flex-start',justifyContent:'center',zIndex:1200,left:-8}}>
                <div style={{width:150,marginRight:-7,height:6,transform:'rotate(-24deg)',display:'flex'}}>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomRightRadius:5,borderTopRightRadius:5}}></div>
                </div> 
                <div style={{width:150,marginLeft:-7,height:6,transform:'rotate(24deg)',display:'flex'}}>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                  <div style={{height:'100%',width:'10%',boxShadow:'inset 1px 1px 0px 1px #666',backgroundColor:'#70777f',borderBottomLeftRadius:5,borderTopLeftRadius:5}}></div>
                </div>
              </div>
              <div style={{display:'flex',position:'absolute',alignItems:'flex-start',justifyContent:'center',zIndex:1000,left:-5}}>
                <div style={{width:148,marginRight:-8,height:13,backgroundColor:'#f9f2ef',transform:'rotate(-24deg)'}}></div> 
                <div style={{width:148,marginLeft:-8,height:13,backgroundColor:'#f9f2ef',transform:'rotate(24deg)'}}></div>
              </div>
           
              <div style={{position:'absolute',width:0,height:0,borderBottom:'65px solid #e5e1df',zIndex:900,left:0,
              borderLeft:'135px solid transparent',borderRight:'135px solid transparent',marginTop:-28}}></div>

              <div style={{display:'flex',height:'100%',width:'100%',marginTop:-25,alignItems:'flex-end',
              zIndex:1100,position:'absolute',}}>
                <div style={{display:'flex',justifyContent:'flex-start',width:'100%',height:10,}}>
                  <div style={{width:32,height:14,backgroundColor:'#f9f2ef',}}></div>
                </div>
                <div style={{display:'flex',justifyContent:'flex-end',width:'100%',height:10,}}>
                  <div style={{width:32,height:14,backgroundColor:'#f9f2ef',}}></div>
                </div>
                
              </div>


              <div style={{width:270,position:'absolute',top:36,zIndex:950,height:50,display:'flex',justifyContent:'center',}}>
                <div style={{width:225,height:140,backgroundColor:'#e5e1df',display:'flex',flexDirection:'column',alignItems:'center'}}>
                  
                  <div style={{width:1.5,height:22,backgroundColor:'#969696',marginTop:-53}}></div>
                  
                  <div style={{width:25,height:25,backgroundColor:'#fc8a35',borderRadius:50,marginLeft:-4,marginTop:-2}}>
                    <div style={{width:19,height:19,backgroundColor:'#e5e1df',borderRadius:50,margin:-1}}></div>
                  </div>
                  

                  <div style={{color:'#5d5d5d',display:'flex',width:'100%',fontWeight:700,fontSize:13,transform:'scale(0.6)',marginTop:-5,}}>
                    <div style={{width:'100%'}}></div>
                    <div style={{display:'flex',flexDirection:'column',width:'auto',
                    minWidth:'fit-content',textAlign:'right',marginLeft:-6}}>
                      <div>달빛</div>
                      <div style={{fontSize:15,}}>미술관</div>
                    </div>
                    <div style={{width:'100%',display:'flex',height:'100%',alignItems:'flex-end'}}>
                      <div style={{paddingLeft:20,fontSize:10}}>
                        又田
                      </div>
                      <div>
                        마진식
                      </div>
                    </div>
                  </div>
 
                   
                </div>
              </div>
             
              <div style={{position:'absolute',width:0,height:0,borderTop:'65px solid #c6c6c6',zIndex:800,left:0,top:44,
                borderLeft:'135px solid transparent',borderRight:'135px solid transparent'}}></div>
          </div>  */}
    
        </div> 
      {/* <img src={imgBuilding} alt='' style={{width:300,height:300,position:'absolute',zIndex:10,marginLeft:600}}/> */}
    </div>
   );
})

export default Building;