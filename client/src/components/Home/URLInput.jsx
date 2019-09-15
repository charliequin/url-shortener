import React from 'react';
import { Input, Message } from 'semantic-ui-react';
import { BitlyClient } from 'bitly';
import { TOKEN } from '../../config.js';

const Bitly = new BitlyClient(TOKEN);

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
    this.setState({isLoading: true})
    e.preventDefault();
    this.urlForm.reset();
    Bitly
    .shorten(this.state.URL)
    .then((result) => {
      console.log(result.url);
      this.setState({convertedURL: result.url, 
        hasError: false, 
        URL: null,
        isLoading: false
      })
    })
    .catch((err) => {
      console.log(err);
      this.setState({hasError: true, 
        convertedURL: false,
        isLoading: false,
        copied: false
      })
    })
  }

  // copySubmit = (e) => {
  //   e.preventDefault();
  //   document.execCommand('copy');
  //   e.target.focus();
  //   this.setState({copied: true});
  //   return (
  //     <Message positive>
  //       Link copied to clipboard :)
  //     </Message>
  //   )
  // }

  formResponse() {
    if (this.state.hasError) {
      return (
        <Message style={{margin: '5px'}} negative>
          Sorry, there was a problem with your request.
        </Message>
      );
    }
    if (this.state.convertedURL) {
      return (
        <>
        <form onSubmit={this.copySubmit}>
        <Input
        style={{width: '100%'}}
        action={{
          color: 'teal',
          labelPosition: 'right',
          icon: 'copy',
          content: 'Copy',
        }}
        defaultValue={this.state.convertedURL}
        />
        </form>
        </>
      );
    }
  }
  
  render() {
    return (
      <>
      <form ref={(urlForm) => this.urlForm = urlForm} onSubmit={this.handleSubmit}>
        <Input
        loading={this.state.isLoading}
        name='URL' 
        onChange={this.handleChange} 
        style={{width: '100%', margin: '5px 0'}} 
        loading={this.state.isLoading}
        error={this.state.hasError}
        placeholder='Enter URL...'
        action={{ 
          icon: 'caret right', 
          color: 'teal' 
        }}
        />
      </form>
      {this.formResponse()}
      </>
    );
  }
}