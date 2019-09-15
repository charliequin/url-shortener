import React from 'react';
import { 
  Container, 
  Header,
  Segment
 } from 'semantic-ui-react';
import URLInput from './URLInput';
import BitlyPNG from '../../images/bitly.png';
import ReactSVG from  '../../images/icons8-react.svg';
import SemanticPNG from '../../images/semantic-ui-react.png'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    let backgroundImage = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)'
    document.body.style.backgroundImage = backgroundImage
  }

  ReactSVG() {
    return (
      <img style={{
        display: 'inline-block',
        width: '25px'
      }} height='0px' src={ReactSVG}/>
    );
  }

  BitlyPNG() {
    return (
      <img style={{
        width: '40px',
        display: 'inline-block'
      }} src={BitlyPNG}/>
    );
  }

  SemanticPNG() {
    return (
      <img style={{
        width: '20px',
        display: 'inline-block'
      }} src={SemanticPNG}/>
    );
  }

  render() {
    return (
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Segment compact style={{
          position: 'absolute', 
          top: '40%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center', 
          maxWidth: '500px',
          minWidth: '400px'
        }}>
          <Header style={{margin: '5px'}} as='h1'>URL Shortener</Header>
          <Header style={{margin: '5px 0 20px'}} as='h5'>Made with love using {this.ReactSVG()} + {this.BitlyPNG()} + {this.SemanticPNG()}</Header>
          <URLInput/>
        </Segment>
      </Container>
    );
  }
}