import React from 'react'
import map from 'lodash/map'
import timezones from '../../data/timezones';
import axios from'axios'
class SignupForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        timezone:''
    }
    this.onChange =this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    
  }
  onChange(e) {
      this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e) {
      e.preventDefault()
     // axios.post('/api/users',{user:this.state})
     // now this function is passed by redux as props 
     this.props.userSignupRequest(this.state)
  }
    render() {
        const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
        return (
          
     <form onSubmit ={this.onSubmit}> 
     <h1> Join our community </h1> 

     <div className ="form-group">
     <label className ="control-label">UserName </label>

     <input 
     type ="text"
     name ="username"
     className ="form-control"
     value = {this.state.username}
     onChange ={this.onChange}
     />
     </div>
     <div className ="form-group">
     <label className ="control-label">email </label>

     <input 
     type ="text"
     name ="email"
     className ="form-control"
     value = {this.state.email}
     onChange ={this.onChange}
     />
     </div>
     <div className ="form-group">
     <label className ="control-label">password </label>

     <input 
     type ="password"
     name ="password"
     className ="form-control"
     value = {this.state.password}
     onChange ={this.onChange}
     />
     </div>
     <div className ="form-group">
     <label className ="control-label">passwordConfirmation </label>

     <input 
     type ="password"
     name ="passwordConfirmation"
     className ="form-control"
     value = {this.state.passwordConfirmation}
     onChange ={this.onChange}
     />
     </div>
     <div className ="form-group">
     <label className ="control-label">Timezone</label>
     <select 
     className ="form-control"
     name="timezone"
     onChange={this.onChange}
      value={this.state.timezone}
     >
     <option value="" disabled>choose your time zone</option>
     {options}
     </select>
     </div>
     
     
     <div className ="form-group">
     <button className = "btn btn-prmary btn-lg">
     Sign up 
     </button>
     </div>

     
     
     
     
     </form>




        )
    }
}
SignupForm.propTypes = {
    
    userSignupRequest: React.PropTypes.func.isRequired
}
export default SignupForm