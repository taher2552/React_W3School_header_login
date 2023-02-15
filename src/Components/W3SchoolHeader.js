import React from 'react';
import LoginPage from './LoginPage.js';

class W3SchoolHeader extends React.Component {

  constructor(props){
    super(props);
    this.state={
      login:true,
      logout:false
    }
  }




render(){
 const header={
    backgroundColor:'white', 
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between'
}

const btn={
  border: 'none',
  padding: '20px 10px 20px 10px',
  cursor: 'pointer',
  backgroundColor:'white',
  fontSize:'17px',
  fontWeight: "bolder"
}

const right_navbar={
  display: 'flex',
  justifyContent: 'space-evenly',
  marginRight: '5px',
  width: '60%',
  alignItems: 'center'
}

const pro={
  color: 'white',
  backgroundColor: 'black',
  border: 'none',
  padding: '10px',
  borderRadius: '25px',
  cursor: 'pointer'
}

const certified= {
  backgroundColor: 'pink',
  border: 'none',
  padding: '10px',
  borderRadius: '25px',
  cursor: 'pointer'
}
const free= {
  backgroundColor: 'yellow',
  border: 'none',
  padding: '10px',
  borderRadius: '25px',
  cursor: 'pointer'
}
const login= {
  color: 'white',
  backgroundColor: '#05aa6d',
  border: 'none',
  padding: '10px',
  borderRadius: '25px',
  cursor: 'pointer'
}

const loginClick=()=>{
  this.setState({
    login:false
  })
}
const logOutClick=()=>{
  this.setState({
    logout:true
  })

  document.querySelector('.logout').style.display="none";
}


  return (
   
        <>
         { this.state.login ?
        <div style={header}>
        <div style={{display:"flex"}}>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png" style={{height:'55px', margin:'12px'}} alt=""/></div>
            <button className="btn" style={btn}>Tutorials<i className="fa fa-caret-down" aria-hidden="true"></i></button>
            <button className="btn" style={btn}>References<i className="fa fa-caret-down" aria-hidden="true"></i></button>
            <button className="btn" style={btn}>Exercises<i className="fa fa-caret-down" aria-hidden="true"></i></button>
            <button className="btn" style={btn}>Sign up</button>
        </div>
        <div style={right_navbar}>
            <i className="fa fa-adjust" aria-hidden="true"></i>
            <i className="fa fa-globe" aria-hidden="true"></i>
            <i className="fa fa-search" aria-hidden="true"></i>
            <p style={pro}>Pro</p>
            <p style={certified}>Get Certified</p>
            <p style={free}>Free Website</p>
            {
              !this.props.username ?
            <p style={login} onClick={loginClick}>Log in</p> : <p style={login} className="logout" onClick={logOutClick}>Log Out</p>

            }
            {
              !this.state.logout ?
            <p>{this.props.username ? `Hello ${this.props.username}`: ""}</p>: <p style={login} onClick={loginClick}>Log in</p>
}
        </div>
    </div> : ( <LoginPage></LoginPage> )}
</> 
    
  );
}
}

export default W3SchoolHeader;
