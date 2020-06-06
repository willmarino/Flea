import React from 'react';
import { withRouter } from 'react-router-dom';
import SessionFormBody from '../../../../forms/standard_form/standard_form_body';
import SessionFormHeader from '../../../../forms/standard_form/standard_form_header';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  handleSubmit(e){
    let { loginUser } = this.props;
    let { credentials } = this.state;
    loginUser(credentials);
  }
  update(field){
    return (e) => {
      debugger;
      let credentials = this.state.credentials;
      credentials[field] = e.currentTarget.value;
      this.setState({ credentials });
    }
  }
  render(){
    let { history, errors } = this.props;
    debugger;
    return(
      <div id='login-form' className='standard-form-container'>
        <SessionFormHeader
          navButton={true}
          navFunction={() => history.push('/anon/register')}
          headerMessage='Sign In'/>
        <SessionFormBody
          inputs={['username', 'password']}
          values={this.state.credentials['username'], this.state.credentials['password']}
          submitMessage={'Sign In'}
          submitFunc={this.handleSubmit}
          updateFunc={this.update}
          errors={errors}
          extra='login'/>
      </div>
    )
  }
}

export default withRouter(LoginForm);