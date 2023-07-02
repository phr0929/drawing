import './pikachu.css'; 

const Pikachu =  (()=> {
  return (
    <div className="pikachuDrawing">
      {/* 몬스터볼 */}
      <div className='monsterBall'>
        <div className='monsterBallLayout'>
          <div className='ballTop'></div>
          <div className='ballBottom'></div>
          <div className='ballCenter'>
            <div className='ballCenterLine'></div>
            <div className='ballCenterCircle'>
              <div></div>
            </div>            
            <div className='ballCenterLine'></div>
          </div>
        </div>
      </div>
      {/* 피카츄 */}
      <div className='pikachu'>
        {/* 귀 */}
        <div className='pikachuEar'>
          <div className='pikachuEarLeft'>
            <div></div>
          </div> 
          <div className='pikachuEarRight'>
            <div></div>
          </div>
        </div>
        {/* 이마 */}
        <div className='pikachuForehead'></div>
        {/* 얼굴 */}
        <div className='pikachuFace'>
          {/* 눈 */}
          <div className='pikachuEye'>
            <div className='pikachuEyeLeft'>
              <div className='pikachuPupil'></div>
            </div>
            <div className='pikachuEyeRight'>
              <div className='pikachuPupil'></div>
            </div>
          </div>
          {/* 코,입,볼 */}
          <div className='pikachuFaceBottom'>
            <div className='pikachuCheek'></div>
            <div className='pikachuNoseMouth'>
              <div className='pikachuNose'></div>
              <div className='pikachuMouthBorder'></div>
              <div className='pikachuMouth'></div>
              <div className='pikachuMouthLine'>
                <div></div>
                <div></div>
              </div>
              <div className='pikachuMouthLine2' >
                <div></div>
                <div></div>
              </div>
              <div className='pikachuMouthLine3'></div>
            </div>
            <div className='pikachuCheek'></div>
          </div>
        </div>
        {/* 얼굴그림자 */}
        <div className='pikachuShadow'></div>
        {/* 목 */}
        <div className='pikachuNeck'></div>
        {/* 몸통 */}
        <div className='pikachuBody'></div>
        {/* 팔 */}
        <div className='pikachuArm'>
          <div className='pikachuArmLeft'></div>
          <div className='pikachuArmRight'></div>
        </div>
        {/* 발 */}
        <div className='pikachuFoot'>
          <div className='pikachuFootLeft'></div>
          <div className='pikachuFootRight'></div>
        </div>
        {/* 꼬리 */}
        <div className='pikachuTail'>
          <div className='pikachuTail1'></div>
          <div className='pikachuTail2'></div>
          <div className='pikachuTail3'></div>
          <div className='pikachuTail4'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
   );
})

export default Pikachu;