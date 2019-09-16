import React from 'react';
import { Input, Message } from 'semantic-ui-react';
import Copy from 'copy-to-clipboard';
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
    this.setState({isLoading: true,
      hasError: false
    })
    e.preventDefault();
    this.urlForm.reset();
    Bitly
    .shorten(this.state.URL)
    .then((result) => {
      console.log(result.url);
      this.setState({convertedURL: result.url, 
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

  handleCopy = (e) => {
    Copy(this.state.convertedURL)
    this.setState({copied: true})
  }

  copiedMessage() {
    if (this.state.copied) {
      return (
        <Message positive style={{fontWeight: '600', width: '100%', margin: '5px 0'}}>
          Link copied to clipboard.
        </Message>
      );
    } else {
      return (
        <>
        </>
      )
    }
  }

  formResponse() {
    if (this.state.hasError) {
      return (
        <Message style={{margin: '5px 0', width: '100%'}} negative>
          Sorry, there was a problem with your request.
        </Message>
      );
    }
    if (this.state.convertedURL) {
      return (
        <Input
        style={{width: '100%'}}
        action={{
          color: 'teal',
          labelPosition: 'right',
          icon: 'copy',
          content: 'Copy',
          onClick: this.handleCopy
        }}
        value={this.state.convertedURL}
        />
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
      {this.copiedMessage()}
      </>
    );
  }
}