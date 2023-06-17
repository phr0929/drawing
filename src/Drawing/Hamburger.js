import './hamburger.css';

const Hamburger =  (()=> {
  return (
    <div className="hamburgerDrawing">
      <div className='hamburger'>
        {/* 빵 */}
        <div style={{width:127,height:63,backgroundColor:'#eaa553',
          borderBottomRightRadius:100,borderBottomLeftRadius:100,borderTopRightRadius:1000,borderTopLeftRadius:1000,
          marginTop:-5,border:'3px solid #323232',boxSizing:'border-box',zIndex:1300,display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:8,transform:'rotate(60deg)'}}></div>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:8}}></div>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:8,transform:'rotate(-60deg)'}}></div>
            </div>

            <div style={{display:'flex',justifyContent:'center'}}>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:7,transform:'rotate(60deg)'}}></div>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:7,transform:'rotate(40deg)'}}></div>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:7}}></div>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:7,transform:'rotate(-40deg)'}}></div>
              <div style={{width:1,height:3,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:7,transform:'rotate(-60deg)'}}></div>
            </div>
        </div>
        {/* 빵 */}

        {/* 상추 */}
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:-10}}>
          <div style={{width:119,height:14,backgroundColor:'#11b743',borderTopRightRadius:10,borderTopLeftRadius:10,zIndex:1250}}></div> 
          <div style={{width:125,height:17,backgroundColor:'#323232',borderTopRightRadius:10,borderTopLeftRadius:10,zIndex:1230,marginTop:-18}}></div> 
          <div style={{display:'flex',marginTop:-13,zIndex:1200,alignItems:'flex-end'}}>
            <div style={{width:20,height:14,backgroundColor:'#11b743',border:'3px solid #323232',borderBottomRightRadius:50,borderBottomLeftRadius:50,boxSizing:'border-box'}}></div>
            <div style={{width:20,height:23,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}></div>
            <div style={{width:20,height:23,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}></div>
            <div style={{width:23,height:23,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}></div>
            <div style={{width:20,height:23,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}></div>
            <div style={{width:20,height:23,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}></div>
            <div style={{width:20,height:14,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderBottomRightRadius:50,borderBottomLeftRadius:50,boxSizing:'border-box'}}></div></div>
        </div>
        {/* 상추 */}

        
        {/* 토마토 */}
        <div style={{display:'flex',marginTop:-13}}>
          <div style={{width:61,height:21,marginRight:-2,backgroundColor:'#d92620',borderBottomLeftRadius:6,zIndex:1000,border:'3px solid #323232',boxSizing:'border-box'}}></div>
          <div style={{width:61,height:21,marginLeft:-2,backgroundColor:'#d92620',borderBottomRightRadius:6,zIndex:1000,border:'3px solid #323232',boxSizing:'border-box'}}></div>
        </div>
        {/* 토마토 */}


        {/* 치즈 */}
        <div style={{width:117,height:7,backgroundColor:'#ffe67d',borderRadius:15,zIndex:900,}}></div>
        <div style={{width:123,height:13,marginTop:-10,backgroundColor:'#323232',borderRadius:15,zIndex:800,}}></div>
        <div style={{display:'flex',alignItems:'flex-end',marginTop:-30,zIndex:800}}>
          <div style={{width:35,height:35,backgroundColor:'#ffe67d',borderRadius:10,transform:'rotate(60deg)',border:'3px solid #323232',boxSizing:'border-box'}}></div>
          <div style={{width:35,height:35,backgroundColor:'#ffe67d',borderRadius:10,transform:'rotate(45deg)',border:'3px solid #323232',boxSizing:'border-box'}}></div>
          <div style={{width:35,height:35,backgroundColor:'#ffe67d',borderRadius:10,transform:'rotate(-60deg)',border:'3px solid #323232',boxSizing:'border-box'}}></div>
        </div> 
        {/* 치즈 */}

        {/* 고기 */}
        <div style={{display:'flex',alignItems:'center',width:123,height:25,backgroundColor:'#7c5631',borderRadius:12,marginTop:-15,border:'3px solid #323232',boxSizing:'border-box',zIndex:700}}></div>
        {/* 고기 */}

        {/* 양파 */}
        <div style={{display:'flex',marginTop:-5}}>
          <div style={{width:43,height:18,backgroundColor:'#f4f4e6',borderTopRightRadius:8,borderTopLeftRadius:8,zIndex:500,border:'3px solid #323232',boxSizing:'border-box'}}></div>
          <div style={{width:43,height:18,marginLeft:-4,backgroundColor:'#f4f4e6',zIndex:520,border:'3px solid #323232',boxSizing:'border-box'}}></div>
          <div style={{width:43,height:18,marginLeft:-4,backgroundColor:'#f4f4e6',borderTopRightRadius:8,borderTopLeftRadius:8,zIndex:500,border:'3px solid #323232',boxSizing:'border-box'}}></div>
        </div>
        {/* 양파 */}

        {/* 빵 */}
        <div style={{width:127,height:25,backgroundColor:'#eaa553',borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomLeftRadius:15,borderBottomRightRadius:15,marginTop:-5,border:'3px solid #323232',boxSizing:'border-box',zIndex:600}}></div>
        {/* 빵 */}
      </div>

      <div className='cola' style={{position:'relative',display:'flex',alignItems:'center',
      boxSizing:'border-box',width:110,height:190}}>



          <div style={{position:'absolute',width:'100%',height:'100%',display:'flex',flexDirection:'column',
          zIndex:1300,left:0,bottom:20,justifyContent:'flex-end',alignItems:'center'}}>
            {/* <div style={{display:'flex'}}>
              <div style={{width:5,height:8,backgroundColor:'#fff',margin:10}}></div>

              <div style={{width:5,height:8,backgroundColor:'#fff',margin:10}}></div>

              <div style={{width:5,height:8,backgroundColor:'#fff',margin:10}}></div>
            </div> */}

            <div style={{display:'flex'}}>
              <div className='bubble1' style={{width:4,height:4,margin:8}}></div>

              <div className='bubble2' style={{width:3,height:3,margin:16}}></div>

              <div className='bubble3'style={{width:4,height:4,margin:7}}></div>
            </div>

            <div style={{display:'flex'}}>
              <div className='bubble4' style={{width:3,height:3,margin:7}}></div>

              <div className='bubble5' style={{width:5,height:5,margin:12}}></div>

              <div className='bubble6' style={{width:4,height:4,margin:8}}></div>
            </div>

            <div style={{display:'flex'}}>
              <div className='bubble7' style={{width:4,height:4,margin:5}}></div>

              <div className='bubble8' style={{width:3,height:3,margin:12}}></div>

              <div className='bubble9' style={{width:4,height:4,margin:5}}></div>
            </div>
          </div>

          {/* <div style={{width:8,height:40,backgroundColor:'#d92620',transform:'rotate(-95deg)',
          borderRadius:2,
          position:'absolute',zIndex:1300,right:5,top:-24,}}> 
            <div style={{width:8,height:8,backgroundColor:'#d92620'}}></div>
            <div style={{width:8,height:8,backgroundColor:'#f3f3f3'}}></div>
            <div style={{width:8,height:8,backgroundColor:'#d92620'}}></div>
            <div style={{width:8,height:8,backgroundColor:'#f3f3f3'}}></div>
          </div>

          <div style={{width:14,height:46,backgroundColor:'#323232',transform:'rotate(-95deg)',
            borderRadius:2,
            position:'absolute',zIndex:1200,right:2,top:-27,}}>
          </div> */}
          
          <div style={{width:7,height:180,backgroundColor:'#d92620',transform:'rotate(6deg)',
          borderRadius:2, 
          position:'absolute',zIndex:1100,right:31,bottom:14,border:'3px solid #000'}}></div>

          {/* <div style={{width:13,height:186,backgroundColor:'#323232',transform:'rotate(6deg)',
          borderRadius:2, 
          position:'absolute',zIndex:1000,right:28,bottom:11,}}></div> */}

          
          <div style={{width:110,height:150,position:'absolute',bottom:0,left:0,
          zIndex:1200,display:'flex',alignItems:'flex-end',
          justifyContent:'center',marginBottom:5}}>
            <div style={{width:60,height:0, borderRadius:5,
            borderTop:'120px solid #3f101a90',
            borderLeft:'16px solid #00000000',
            borderRight:'16px solid #00000000'}}></div>
          
          </div>
          <div style={{width:110,height:150,position:'absolute',bottom:0,left:0,
          zIndex:900,display:'flex',alignItems:'flex-end',
          justifyContent:'center',marginBottom:5}}>
            <div style={{width:60,height:0, borderRadius:5,
            borderTop:'120px solid #3f101a',
            borderLeft:'16px solid #00000000',
            borderRight:'16px solid #00000000'}}></div>
          
          </div>
        
          <div style={{width:64,height:0,position:'absolute',right:3,bottom:3,zIndex:800,borderRadius:7,
          borderTop:'144px solid #fff',borderLeft:'20px solid #00000000',borderRight:'20px solid #00000000'}}></div>
          <div style={{width:70,height:0,position:'absolute',right:0,bottom:0,zIndex:700,borderRadius:10,
          borderTop:'150px solid #323232',borderLeft:'20px solid #00000000',borderRight:'20px solid #00000000'}}></div>
      </div>
       
    </div>
   );
})

export default Hamburger;