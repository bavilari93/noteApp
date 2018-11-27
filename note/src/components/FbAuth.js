import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


class FbAuth extends Component{
	constructor(){
		super();
		this.state={
			fb:'', 
			url:'http://localhost:8080/auth'
		}
	}

 responseFacebook=(response) => {
  console.log(response.name, response.id);

}
	render(){
		return(
			<div>
<FacebookLogin
  appId="576310976103480"
  autoLoad
  callback={this.responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>
			</div>
			)
	}
}
export default FbAuth;