import { useState } from 'react';
import './cupcake.css';

const Building =  (()=> {


  return (
    <div className="cupcakeDrawing"> 

      <div style={{display:'flex',}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',position:'relative',padding:7,}}>
            
         
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:35,height:30,backgroundColor:'#fafafa',zIndex:1500,borderRadius:'150px 50px 150px 150px',transform:'rotate(-10deg)',boxShadow:'inset -5px -7px 1px 5px #f2e6da',border:'3px solid #42332a'}}>
            <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(60deg)',margin:'2px 0px 0px 3px'}}></div>  
            <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#c12534',border:'2px solid #323232',margin:'-5px 0px 0px 5px'}}>
              <div style={{width:2,height:2,backgroundColor:'#fff',borderRadius:10,margin:1}}></div>  
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:65,height:30,backgroundColor:'#fafafa',zIndex:1400,borderRadius:'150px 50px 150px 50px',transform:'rotate(-10deg)',marginTop:-17,boxShadow:'inset -5px -7px 1px 5px #f2e6da',border:'3px solid #42332a'}}>
            <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#c12534',border:'2px solid #323232',margin:'5px 7px 0px 0px'}}>
              <div style={{width:2,height:2,backgroundColor:'#fff',borderRadius:10,margin:1}}></div>  
            </div>
            <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(-30deg)',margin:'6px 10px 0px 5px'}}></div> 
            <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(30deg)',margin:'0px 0px 0px 0px'}}></div> 
          </div>
          
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:85,height:40,backgroundColor:'#fafafa',zIndex:1300,borderRadius:'150px 50px 150px 50px',transform:'rotate(-5deg)',marginTop:-20,boxShadow:'inset -3px -5px 1px 5px #f2e6da',border:'3px solid #42332a'}}>
              <div style={{width:3,height:3,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',margin:'10px 5px 0px 10px'}}></div>
              <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'18px 0px 0px 5px'}}></div>              
              <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#c12534',border:'2px solid #323232',margin:'15px 12px 0px 10px'}}>
                <div style={{width:2,height:2,backgroundColor:'#fff',borderRadius:10,margin:1}}></div>  
              </div>  
              <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(60deg)',margin:'0px 5px 0px 0px'}}></div>
          </div>
          
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:100,height:50,backgroundColor:'#fafafa',zIndex:1200,borderRadius:'150px 80px 150px 80px',marginTop:-35,boxShadow:'inset -2px -3px 1px 3px #f2e6da',border:'3px solid #42332a'}}>
            <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'28px 0px 0px 0px'}}></div>         
            <div style={{width:7,height:7,borderRadius:10,backgroundColor:'#c12534',border:'2px solid #323232',margin:'30px 12px 0px 15px'}}>
              <div style={{width:2,height:2,backgroundColor:'#fff',borderRadius:10,margin:1}}></div>  
            </div>         
            <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'20px 12px 0px 0px'}}></div> 
            <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(-60deg)',margin:'10px 0px 0px 0px'}}></div>
          </div>

          <div style={{display:'flex',zIndex:1100,marginTop:-20}}>
            <div style={{width:34,height:32,backgroundColor:'#995936',borderRadius:50,transform:'rotate(60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#fff',borderRadius:50,margin:12,}}></div>  
            </div>          
            <div style={{width:35,height:40,backgroundColor:'#995936',borderRadius:50,margin:'3px 0px 0px -3px',transform:'rotate(60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#fff',borderRadius:50,margin:17,}}></div>
            </div>   
            <div style={{width:30,height:40,backgroundColor:'#995936',borderRadius:50,margin:'5px -5px 0px -6px',transform:'rotate(-60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#fff',borderRadius:50,margin:20,}}></div>
            </div>        
            <div style={{width:34,height:32,backgroundColor:'#995936',borderRadius:50,transform:'rotate(-60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#fff',borderRadius:50,margin:15,}}></div>  
            </div>
          </div>
  
          <div style={{display:'flex',zIndex:1050,marginTop:-45}}>
            <div style={{width:37,height:35,backgroundColor:'#42332a',borderRadius:50,transform:'rotate(60deg)'}}> 
            </div>          
            <div style={{width:35,height:43,backgroundColor:'#42332a',borderRadius:50,margin:'3px 0px 0px -3px',transform:'rotate(60deg)'}}> 
            </div>   
            <div style={{width:30,height:43,backgroundColor:'#42332a',borderRadius:50,margin:'5px -5px 0px -6px',transform:'rotate(-60deg)'}}> 
            </div>        
            <div style={{width:37,height:35,backgroundColor:'#42332a',borderRadius:50,transform:'rotate(-60deg)'}}> 
            </div>
          </div>
  
          <div style={{position:'relative',width:96,height:70,display:'flex',alignItems:'center',justifyContent:'center',marginTop:-25}}>
            
            <div style={{display:'flex',position:'absolute',width:96,height:70,backgroundColor:'#efa233',zIndex:1000,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',}}>
              <div style={{display:'flex',flex:1,justifyContent:'center'}}> 
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(-5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1.5,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>  
              </div> 
            </div> 
  
            <div style={{display:'flex',position:'absolute',width:102,height:76,backgroundColor:'#323232',zIndex:900,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',borderRadius:0,}}></div>
          </div>
  
          
          
        </div>    
          
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',position:'relative',padding:7,}}>
              
          <div style={{width:2,height:15,backgroundColor:'#42332a',zIndex:1600,transform:'rotate(10deg)',marginLeft:10}}></div>
          <div style={{width:28,height:28,backgroundColor:'#c12534',borderRadius:50,zIndex:1500,marginTop:-6,border:'3px solid #42332a'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-end',padding:5,transform:'rotate(25deg)'}}>
              
              <div style={{width:4,height:8,backgroundColor:'#fff',borderRadius:50}}></div>
              
              <div style={{width:4,height:4,marginTop:3,backgroundColor:'#fff',borderRadius:50}}></div>
            </div>
          </div>
      
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:65,height:30,backgroundColor:'#f781a3',zIndex:1400,borderRadius:'150px 50px 150px 50px',transform:'rotate(-10deg)',marginTop:-17,boxShadow:'inset -5px -7px 1px 5px #e55a81',border:'3px solid #42332a'}}>
              <div style={{width:3,height:3,borderRadius:2,backgroundColor:'#f4a6b4',border:'2px solid #440d12',margin:'0px 3px 3px 0px'}}></div>
              <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#931c28',border:'2px solid #440d12',transform:'rotate(60deg)',margin:'10px 5px 0px 2px'}}></div>              
              <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#f4a6b4',border:'2px solid #440d12',transform:'rotate(-30deg)',margin:'6px 10px 0px 5px'}}></div> 
              <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#f4a6b4',border:'2px solid #440d12',transform:'rotate(30deg)',margin:'0px 0px 0px 0px'}}></div> 
          </div>
          
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:85,height:40,backgroundColor:'#f781a3',zIndex:1300,borderRadius:'150px 50px 150px 50px',transform:'rotate(-5deg)',marginTop:-20,boxShadow:'inset -3px -5px 1px 5px #e55a81',border:'3px solid #42332a'}}>
              <div style={{width:3,height:3,borderRadius:2,backgroundColor:'#931c28',border:'2px solid #440d12',margin:'10px 5px 0px 10px'}}></div>
              <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#f4a6b4',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'18px 0px 0px 5px'}}></div>              
              <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#931c28',border:'2px solid #440d12',transform:'rotate(-30deg)',margin:'5px 0px 0px 8px'}}></div>           
              <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#931c28',border:'2px solid #440d12',transform:'rotate(-30deg)',margin:'15px 10px 0px 7px'}}></div> 
              <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#f4a6b4',border:'2px solid #440d12',transform:'rotate(60deg)',margin:'0px 5px 0px 0px'}}></div>
          </div>
          
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:100,height:50,backgroundColor:'#f781a3',zIndex:1200,borderRadius:'150px 80px 150px 80px',marginTop:-35,boxShadow:'inset -2px -3px 1px 3px #e55a81',border:'3px solid #42332a'}}>
            <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#931c28',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'25px 0px 0px 0px'}}></div>              
            <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#f4a6b4',border:'2px solid #440d12',transform:'rotate(20deg)',margin:'32px 0px 0px 10px'}}></div>           
            <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#931c28',border:'2px solid #440d12',transform:'rotate(-30deg)',margin:'20px 12px 0px 10px'}}></div>         
            <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#f4a6b4',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'20px 12px 0px 0px'}}></div> 
            <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#931c28',border:'2px solid #440d12',transform:'rotate(-60deg)',margin:'10px 0px 0px 0px'}}></div>
          </div>
  
          <div style={{display:'flex',zIndex:1100,marginTop:-20}}>
            <div style={{width:34,height:32,backgroundColor:'#543422',borderRadius:50,transform:'rotate(60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#e5304f',borderRadius:50,margin:12,}}></div>
            </div>          
            <div style={{width:35,height:40,backgroundColor:'#543422',borderRadius:50,margin:'3px 0px 0px -3px',transform:'rotate(60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#f7d02f',borderRadius:50,margin:17,}}></div>
            </div>   
            <div style={{width:30,height:40,backgroundColor:'#543422',borderRadius:50,margin:'5px -5px 0px -6px',transform:'rotate(-60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#e5304f',borderRadius:50,margin:20,}}></div>
            </div>        
            <div style={{width:34,height:32,backgroundColor:'#543422',borderRadius:50,transform:'rotate(-60deg)'}}>
              <div style={{width:7,height:7,backgroundColor:'#e5cf30',borderRadius:50,margin:15,}}></div>  
            </div>
          </div>
  
          <div style={{display:'flex',zIndex:1050,marginTop:-45}}>
            <div style={{width:37,height:35,backgroundColor:'#42332a',borderRadius:50,transform:'rotate(60deg)'}}> 
            </div>          
            <div style={{width:35,height:43,backgroundColor:'#42332a',borderRadius:50,margin:'3px 0px 0px -3px',transform:'rotate(60deg)'}}> 
            </div>   
            <div style={{width:30,height:43,backgroundColor:'#42332a',borderRadius:50,margin:'5px -5px 0px -6px',transform:'rotate(-60deg)'}}> 
            </div>        
            <div style={{width:37,height:35,backgroundColor:'#42332a',borderRadius:50,transform:'rotate(-60deg)'}}> 
            </div>
          </div>
  
          <div style={{position:'relative',width:96,height:70,display:'flex',alignItems:'center',justifyContent:'center',marginTop:-25}}>
            
            <div style={{display:'flex',position:'absolute',width:96,height:70,backgroundColor:'#fcf2d2',zIndex:1000,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',}}>
              <div style={{display:'flex',flex:1,justifyContent:'center'}}> 
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(-5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1.5,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>  
              </div> 
            </div> 
  
            <div style={{display:'flex',position:'absolute',width:102,height:76,backgroundColor:'#323232',zIndex:900,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',borderRadius:0,}}></div>
          </div>
  
          
          
        </div>    
      </div>
   
      <div style={{display:'flex',}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',position:'relative',padding:7,}}>
             
          <div style={{width:20,height:23,backgroundColor:'#4c2714',borderRadius:7,zIndex:1500,marginTop:-6,border:'3px solid #231007',transform:'rotate(45deg)'}}>
            <div style={{margin:1,width:18,height:21,border:'2px solid #231007',boxSizing:'border-box',borderRadius:5,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:9,height:12,backgroundColor:'#231007',borderRadius:3}}></div>

            </div>
          </div>
      
          <div style={{width:65,height:30,backgroundColor:'#995936',zIndex:1400,borderRadius:'150px 50px 150px 50px',transform:'rotate(-10deg)',marginTop:-17,boxShadow:'inset -5px -7px 1px 5px #7c442e',border:'3px solid #231007'}}></div>
          
          <div style={{width:85,height:40,backgroundColor:'#995936',zIndex:1300,borderRadius:'150px 50px 150px 50px',transform:'rotate(-5deg)',marginTop:-20,boxShadow:'inset -3px -5px 1px 5px #7c442e',border:'3px solid #231007'}}></div>
          
          <div style={{width:100,height:50,backgroundColor:'#995936',zIndex:1200,borderRadius:'150px 80px 150px 80px',marginTop:-35,boxShadow:'inset -2px -3px 1px 3px #7c442e',border:'3px solid #231007'}}></div>
  






          <div style={{display:'flex',alignItems:'center',height:50,width:110,borderRadius:'50% / 70%',zIndex:1100,marginTop:-35,backgroundColor:'#1e1007',border:'3px solid #111111'}}>
            <div style={{width:3,height:6,backgroundColor:'#ffb600',transform:'rotate(20deg)',margin:5}}></div>
            <div style={{width:2,height:3,backgroundColor:'#ffb600',transform:'rotate(20deg)',margin:'18px 2px 0px 2px'}}></div>
            
            <div style={{width:2,height:2,backgroundColor:'#ffb600',transform:'rotate(20deg)',margin:'30px 2px 0px 2px'}}></div>

            <div style={{width:3,height:3,backgroundColor:'#ffb600',transform:'rotate(-20deg)',margin:'20px 5px 0px 5px'}}></div>

            
            <div style={{width:2,height:2,backgroundColor:'#ffb600',transform:'rotate(20deg)',margin:'30px 2px 0px 2px'}}></div>
            <div style={{width:2,height:2,backgroundColor:'#ffb600',transform:'rotate(20deg)',margin:'25px 7px 0px 8px'}}></div>

            <div style={{width:2,height:3,backgroundColor:'#ffb600',transform:'rotate(60deg)',margin:'32px 2px 0px 2px'}}></div>

            
            <div style={{width:2,height:3,backgroundColor:'#ffb600',transform:'rotate(20deg)',margin:'20px 7px 0px 8px'}}></div>
            <div style={{width:3,height:2,backgroundColor:'#ffb600',transform:'rotate(-20deg)',margin:'20px 5px 0px 0px'}}></div>
            <div style={{width:2,height:3,backgroundColor:'#ffb600',transform:'rotate(60deg)',margin:'10px 2px 0px 5px'}}></div>
            <div style={{width:2,height:1,backgroundColor:'#ffb600',margin:'0px 0px 0px 2px'}}></div>
          </div>
   
  
          <div style={{position:'relative',width:96,height:70,display:'flex',alignItems:'center',justifyContent:'center',marginTop:-20}}>
            
            <div style={{display:'flex',flexDirection:'column',position:'absolute',width:96,height:70,zIndex:1000,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',overflow:'hidden',backgroundColor:'#564133'}}>
              <div style={{height:30,width:96,backgroundColor:'#c4ad97',borderRadius:'50% / 20%'}}></div>
              <div style={{height:40,width:96,backgroundColor:'#564133'}}></div>
            </div> 
      
            <div style={{display:'flex',position:'absolute',width:96,height:70 ,zIndex:1050,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',}}>
              <div style={{display:'flex',flex:1,justifyContent:'center'}}> 
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(-5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1.5,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>  
              </div> 
            </div> 
            
  
            <div style={{display:'flex',position:'absolute',width:102,height:76,backgroundColor:'#323232',zIndex:900,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',borderRadius:0,}}></div>
          </div>
  
          
          
        </div>    

        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',position:'relative',padding:7,}}>
             
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:35,height:30,backgroundColor:'#a4d8ca',zIndex:1500,borderRadius:'150px 50px 150px 150px',transform:'rotate(-10deg)',boxShadow:'inset -5px -7px 1px 5px #6daf9e',border:'3px solid #42332a'}}>
            <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(60deg)',margin:'2px 0px 0px 3px'}}></div>  
            <div style={{fontSize:13 ,color:'#ffdb43',textShadow:'-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',transform:'rotate(60deg)',margin:'-5px 0px 0px 5px'}}>
              ★
            </div> 
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:65,height:30,backgroundColor:'#a4d8ca',zIndex:1400,borderRadius:'150px 50px 150px 50px',transform:'rotate(-10deg)',marginTop:-17,boxShadow:'inset -5px -7px 1px 5px #6daf9e',border:'3px solid #42332a'}}>
           
            <div style={{fontSize:13 ,color:'#ffdb43',textShadow:'-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',transform:'rotate(60deg)',margin:'5px 5px 0px 5px'}}>
              ★
            </div> 
            <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(-30deg)',margin:'6px 10px 0px 5px'}}></div> 
            <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(30deg)',margin:'0px 0px 0px 0px'}}></div> 
          </div>
          
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:85,height:40,backgroundColor:'#a4d8ca',zIndex:1300,borderRadius:'150px 50px 150px 50px',transform:'rotate(-5deg)',marginTop:-20,boxShadow:'inset -3px -5px 1px 5px #6daf9e',border:'3px solid #42332a'}}>
              <div style={{width:3,height:3,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',margin:'10px 5px 0px 10px'}}></div>
              <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'18px 0px 0px 5px'}}></div>
              <div style={{fontSize:13 ,color:'#ffdb43',textShadow:'-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',transform:'rotate(60deg)',margin:'15px 12px 0px 10px'}}>
                ★
              </div>  
              <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(60deg)',margin:'0px 5px 0px 0px'}}></div>
          </div>
          
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:100,height:50,backgroundColor:'#a4d8ca',zIndex:1200,borderRadius:'150px 80px 150px 80px',marginTop:-35,boxShadow:'inset -2px -3px 1px 3px #6daf9e',border:'3px solid #42332a'}}>
            <div style={{width:3,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'28px 0px 0px 0px'}}></div>         
                 
            <div style={{fontSize:13 ,color:'#ffdb43',textShadow:'-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',transform:'rotate(60deg)',margin:'30px 12px 0px 15px'}}>
              ★
            </div> 
            <div style={{width:3,height:2,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(90deg)',margin:'20px 12px 0px 0px'}}></div> 
            <div style={{width:2,height:4,borderRadius:2,backgroundColor:'#543422',border:'2px solid #440d12',transform:'rotate(-60deg)',margin:'10px 0px 0px 0px'}}></div>
          </div>

 
                     
          <div style={{display:'flex',flexDirection:'column',zIndex:1150,width:10,height:80,borderRadius:2,border:'3px solid #323232', 
          marginLeft:90,transform:'rotate(10deg)',marginTop:-110,overflow:'hidden',backgroundColor:'#6d4c44'}}>
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#6d4c44'}}></div>
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#f9daac'}}></div> 
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#6d4c44'}}></div>
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#f9daac'}}></div>
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#6d4c44'}}></div>
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#f9daac'}}></div>
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#6d4c44'}}></div>
              <div style={{width:20,height:9,marginLeft:-5,backgroundColor:'#f9daac'}}></div>

          </div>




          <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:50,width:110,borderRadius:'50% / 70%',zIndex:1100,marginTop:-5,backgroundColor:'#4c2714',border:'3px solid #323232'}}>
            <div style={{width:4,height:6,backgroundColor:'#f9e8cd',transform:'rotate(-60deg)',margin:'8px 5px 0px 0px'}}></div>
            <div style={{width:4,height:6,backgroundColor:'#f9e8cd',transform:'rotate(20deg)',margin:'25px 2px 0px 5px'}}></div> 

            <div style={{width:4,height:5,backgroundColor:'#f9e8cd',transform:'rotate(-20deg)',margin:'22px 10px 0px 8px'}}></div>

            
            <div style={{width:3,height:6,backgroundColor:'#f9e8cd',transform:'rotate(20deg)',margin:'25px 5px 0px 2px'}}></div> 

            <div style={{width:4,height:4,backgroundColor:'#f9e8cd',transform:'rotate(60deg)',margin:'30px 5px 0px 8px'}}></div>

             
            <div style={{width:3,height:5,backgroundColor:'#f9e8cd',transform:'rotate(-20deg)',margin:'15px 12px 0px 3px'}}></div> 
            <div style={{width:4,height:6,backgroundColor:'#f9e8cd',transform:'rotate(70deg)',margin:'7px 0px 0px 0px'}}></div>
          </div>
   
  
          <div style={{position:'relative',width:96,height:70,display:'flex',alignItems:'center',justifyContent:'center',marginTop:-20}}>
            
            <div style={{display:'flex',flexDirection:'column',position:'absolute',width:96,height:70,zIndex:1000,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',overflow:'hidden',backgroundColor:'#b7805a'}}>
              <div style={{height:30,width:96,backgroundColor:'#f4d5c1',borderRadius:'50% / 20%'}}></div>
              <div style={{height:40,width:96,backgroundColor:'#b7805a'}}></div>
            </div> 
      
            <div style={{display:'flex',position:'absolute',width:96,height:70 ,zIndex:1050,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',}}>
              <div style={{display:'flex',flex:1,justifyContent:'center'}}> 
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(-5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1.5,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>
                <div style={{height:'100%',width:3,backgroundColor:'#323232',transform:'rotate(5deg)'}}></div>  
              </div> 
              <div style={{display:'flex',flex:1,justifyContent:'center'}}>  
              </div> 
            </div> 
            
  
            <div style={{display:'flex',position:'absolute',width:102,height:76,backgroundColor:'#323232',zIndex:900,
            clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',borderRadius:0,}}></div>
          </div>
  
          
          
        </div>     
       
      </div>
   
      
    </div>
   );
})

export default Building;