import './App.css'

function App() {
  return (<div style={{ justifyItems: 'center', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', backgroundColor: 'lightyellow' }} >
    <ProfileCard
      profilePhotoUrl={"https://media.licdn.com/dms/image/v2/D4D03AQFPRTa62lvPVw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730780289099?e=2147483647&v=beta&t=bhj8xdUKlDmjwRmnjQl_srgUp0G5QNlHY9FVlv-HJfQ"}
      usersName={"Kunal Doliya"}
      subTitle={"SDE @Microsoft | about kunal doliya's profile"}
      time={"18m"}
      postContent={"Stellar Achievements: Grabbed a super dream offer..."}
      postImageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s'}
    />
    <ProfileCard
      profilePhotoUrl={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
      usersName={"LinkedIn"}
      subTitle={"Promoted"}
      // time={"18m"}
      postContent={"Stellar Achievements: Grabbed a super dream offer..."}
      postImageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s'}
    />
  </div>)
}

const ProfileCardStyle = { height: 30, width: 30, borderRadius: 20 }
const imageStyle = { height: '65%', width: '100%' }
function ProfileCard({ profilePhotoUrl, usersName, subTitle, time, postContent, postImageUrl }) {
  return (
    <div style={{ backgroundColor: 'lightblue', width: '250px', height: '200px', borderRadius: 10 }}>
      <div style={{ display: 'flex', padding: 8 }} >
        <img
          src={profilePhotoUrl}
          alt="HTML5"
          style={ProfileCardStyle} />
        <div style={{ fontSize: 8, textAlign: 'left', paddingLeft: '10px' }} >
          <div>{usersName}</div>
          <div>{subTitle}</div>
          {time && <div>{time}</div>}
        </div>
      </div>
      <div style={{ fontSize: 10, textAlign: 'left' }} >
        {postContent}
      </div>
      <img src={postImageUrl} style={imageStyle} />
    </div>)
}

export default App
