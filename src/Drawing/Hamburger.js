import './hamburger.css';

const Pomeranian =  (()=> {
  return (
    <div className="hamburgerDrawing">
 
      <div style={{width:190,height:90,backgroundColor:'#eaa553',
        borderBottomRightRadius:100,borderBottomLeftRadius:100,borderTopRightRadius:1000,borderTopLeftRadius:1000,
        marginTop:-5,border:'3px solid #323232',boxSizing:'border-box',zIndex:1300,display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:2,height:5,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10,transform:'rotate(60deg)'}}/>
            <div style={{width:3,height:6,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10}}/>
            <div style={{width:2,height:5,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10,transform:'rotate(-60deg)'}}/>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:1.5,height:4.5,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10,transform:'rotate(60deg)'}}/>
            <div style={{width:3,height:6,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10,transform:'rotate(40deg)'}}/>
            
            <div style={{width:3,height:6,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10}}/>
            <div style={{width:3,height:6,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10,transform:'rotate(-40deg)'}}/>
            
            <div style={{width:1.5,height:4.5,backgroundColor:'#f3e7ce',borderRadius:50,border:'3px solid #323232',margin:10,transform:'rotate(-60deg)'}}/>
          </div>
      </div>
   
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:-10}}>
        <div style={{width:177,height:20,backgroundColor:'#11b743',borderTopRightRadius:10,borderTopLeftRadius:10,zIndex:1250}}/> 
        <div style={{width:183,height:23,backgroundColor:'#323232',borderTopRightRadius:10,borderTopLeftRadius:10,zIndex:1230,marginTop:-23}}/> 
        <div style={{display:'flex',marginTop:-20,zIndex:1200,alignItems:'flex-end'}}>
          <div style={{width:28,height:20,backgroundColor:'#11b743',border:'3px solid #323232',borderBottomRightRadius:50,borderBottomLeftRadius:50,boxSizing:'border-box'}}/>
          <div style={{width:28,height:33,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}/>
          <div style={{width:28,height:33,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}/>
          <div style={{width:33,height:33,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}/>
          <div style={{width:28,height:33,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}/>
          <div style={{width:28,height:33,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderRadius:50,boxSizing:'border-box'}}/>
          <div style={{width:28,height:20,marginLeft:-3,backgroundColor:'#11b743',border:'3px solid #323232',borderBottomRightRadius:50,borderBottomLeftRadius:50,boxSizing:'border-box'}}/></div>
      </div>
      
      {/* <div style={{display:'flex',flexDirection:'column',zIndex:1150,alignItems:'center',marginTop:-38}}>
        <div style={{width:190,height:20,backgroundColor:'#323232',border:'3px solid #323232',borderRadius:50}}/>
        <div style={{display:'flex',marginTop:-20}}>
          <div style={{width:29,height:33,backgroundColor:'#11b743',borderRadius:50,border:'3px solid #323232',boxSizing:'border-box'}}/>
          <div style={{width:26,height:36,backgroundColor:'#11b743',borderRadius:50,border:'3px solid #323232',boxSizing:'border-box'}}/>
          <div style={{width:27,height:36,backgroundColor:'#11b743',borderRadius:50,border:'3px solid #323232',boxSizing:'border-box'}}/>
          <div style={{width:32,height:38,backgroundColor:'#11b743',borderRadius:50,border:'3px solid #323232',boxSizing:'border-box'}}/>
          <div style={{width:27,height:36,backgroundColor:'#11b743',borderRadius:50,border:'3px solid #323232',boxSizing:'border-box'}}/>
          <div style={{width:26,height:36,backgroundColor:'#11b743',borderRadius:50,border:'3px solid #323232',boxSizing:'border-box'}}/>
          <div style={{width:29,height:33,backgroundColor:'#11b743',borderRadius:50,border:'3px solid #323232',boxSizing:'border-box'}}/>
        </div>
      </div> */}

      
     {/* 토마토 */}
      <div style={{display:'flex',marginTop:-13}}>
        <div style={{width:88,height:30,marginRight:-2,backgroundColor:'#d92620',borderBottomLeftRadius:10,zIndex:1000,border:'3px solid #323232',boxSizing:'border-box'}}/>
        <div style={{width:88,height:30,marginLeft:-2,backgroundColor:'#d92620',borderBottomRightRadius:10,zIndex:1000,border:'3px solid #323232',boxSizing:'border-box'}}/>
      </div>
      {/* 토마토 */}


      {/* 치즈 */}
      <div style={{width:174,height:10,backgroundColor:'#ffe67d',borderRadius:15,zIndex:900,}}/>
      <div style={{width:180,height:16,marginTop:-13,backgroundColor:'#323232',borderRadius:15,zIndex:800,}}/>
      <div style={{display:'flex',alignItems:'flex-end',marginTop:-40,zIndex:800}}>
        <div style={{width:50,height:50,backgroundColor:'#ffe67d',borderRadius:10,transform:'rotate(60deg)',border:'3px solid #323232',boxSizing:'border-box'}}/>
        <div style={{width:50,height:50,backgroundColor:'#ffe67d',borderRadius:10,transform:'rotate(45deg)',border:'3px solid #323232',boxSizing:'border-box'}}/>
        <div style={{width:50,height:50,backgroundColor:'#ffe67d',borderRadius:10,transform:'rotate(-60deg)',border:'3px solid #323232',boxSizing:'border-box'}}/>
      </div> 
      {/* 치즈 */}

      {/* 고기 */}
      <div style={{display:'flex',alignItems:'center',width:180,height:35,backgroundColor:'#7c5631',borderRadius:15,marginTop:-15,border:'3px solid #323232',boxSizing:'border-box',zIndex:700}}/>
      {/* 고기 */}


      <div style={{display:'flex',marginTop:-5}}>
        <div style={{width:62,height:25,backgroundColor:'#f4f4e6',borderTopRightRadius:8,borderTopLeftRadius:8,zIndex:500,border:'3px solid #323232',boxSizing:'border-box'}}/>
        <div style={{width:62,height:25,marginLeft:-4,backgroundColor:'#f4f4e6',zIndex:520,border:'3px solid #323232',boxSizing:'border-box'}}/>
        <div style={{width:62,height:25,marginLeft:-4,backgroundColor:'#f4f4e6',borderTopRightRadius:8,borderTopLeftRadius:8,zIndex:500,border:'3px solid #323232',boxSizing:'border-box'}}/>
      </div>
      <div style={{width:190,height:40,backgroundColor:'#eaa553',borderRadius:15,marginTop:-5,border:'3px solid #323232',boxSizing:'border-box',zIndex:600}}/>
    </div>
   );
})

export default Pomeranian;