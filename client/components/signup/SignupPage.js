import React from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux'
import { userSignupRequest } from '../../actions/signupActions';
class SignupPage extends React.Component {
  render() {
      // watch this 
      const {userSignupRequest} =this.props;
    return (
      <div className ="row">
      <div className ="col-md-4 col-md-offset-4">
      <SignupForm userSignupRequest ={userSignupRequest}/>
      </div>
     
     </div>
    );
  }
}//it take  from redux this is thunk function provided by connect function
// 
SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
  
}
// this is magic happening connect is calling this signup page
// connect function takes two params  map state to props
// here we dont need map stateto props but need dispatch to props
// action creater wrped in dispatch  so we pass action name 
// watch out this is action dispatcher that meens it dispatches action 
// which redux does behind the scenes asynchronously
export default connect((state)=>{return {}},{userSignupRequest})(SignupPage)