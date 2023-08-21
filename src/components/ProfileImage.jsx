function ProfileImage(props){
    console.log(props);
    return (
    <img
        src={props.userObject.image}
        className="profile"
        alt="profile"
      />
      )
}
export default ProfileImage;