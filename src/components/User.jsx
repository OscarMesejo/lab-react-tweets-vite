function User(props){
    return(
        <span className="user">
            <span className="name">{props.userObject.name}</span>
            <span className="handle">{props.userObject.handle}</span>
          </span>
    )
}
export default User;