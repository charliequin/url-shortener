import React from 'react';
import { 
  Container, 
  Header,
  Segment
 } from 'semantic-ui-react';
import URLInput from './URLInput';
import BitlyPNG from '../../images/bitly.png';
import ReactSVG from  '../../images/icons8-react.svg';
import SemanticPNG from '../../images/semantic-ui-react.png';

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
        width: '30px'
      }} height='0px' src={ReactSVG}/>
    );
  }

  BitlyPNG() {
    return (
      <img style={{
        width: '45px',
        display: 'inline-block'
      }} src={BitlyPNG}/>
    );
  }

  SemanticPNG() {
    return (
      <img style={{
        width: '25px',
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
        <Segment stacked size='massive' padded='true' compact style={{
          position: 'absolute', 
          top: '40%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center',
          padding: '40px'
        }}>
          <Header style={{margin: '5px'}} as='h1'>URL Shortener</Header>
          <Header style={{margin: '5px 0 20px'}} as='h3'>Made with love using {this.ReactSVG()} + {this.BitlyPNG()} + {this.SemanticPNG()}</Header>
          <URLInput/>
        </Segment>
      </Container>
    );
  }
}