import React from 'react';
import { Input } from 'semantic-ui-react';

export default class URLInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      hasError: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.URL) {
      this.setState({hasError: true})
      console.log('Error')
    } else {
      console.log(this.state.URL)
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
        name='URL' 
        onChange={this.handleChange} 
        style={{width: '100%'}} 
        loading={this.state.isLoading} 
        error={this.state.hasError} 
        placeholder='Enter URL...'
        action={{ icon: 'caret right' }}
        />
      </form>
    );
  }
}