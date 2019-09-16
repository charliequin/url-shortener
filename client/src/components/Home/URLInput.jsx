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
      hasError: false,
      URL: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : (e.target.value.startsWith('http') ? e.target.value : 'http://' + e.target.value)})
  }

  handleSubmit = (e) => {
    this.setState({isLoading: true})
    this.urlForm.reset();
    e.preventDefault();
    Bitly
    .shorten(this.state.URL)
    .then((result) => {
      this.setState({URL: false,
        hasError: false,
        isLoading: false,
        convertedURL: result.url
      })
    })
    .catch((err) => {
      console.log(err);
      this.setState({hasError: true, 
        convertedURL: false,
        isLoading: false,
        copied: false,
        URL: null
      })
    })
  }

  handleCopy = (e) => {
    Copy(this.state.convertedURL)
    this.setState({copied: true})
  }

  copiedMessage = () => {
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

  formResponse = () => {
    if (this.state.hasError) {
      return (
        <Message style={{margin: '5px 0', width: '100%'}} negative>
          Sorry, please try again.
        </Message>
      );
    }
    if (this.state.convertedURL) {
      return (
        <Input
        style={{width: '100%', height: '50px'}}
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
        disabled={this.state.isLoading}
        loading={this.state.isLoading}
        name='URL' 
        onChange={this.handleChange} 
        style={{width: '100%', margin: '5px 0'}} 
        loading={this.state.isLoading}
        placeholder='example.com'
        label={{
          color: 'teal',
          content: 'http://'
        }}
        action={{ 
          icon: 'cut', 
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