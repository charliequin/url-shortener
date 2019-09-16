import React from 'react';
import { 
  Container, 
  Header,
  Segment,
  Label,
  Icon
 } from 'semantic-ui-react';
import URLInput from './URLInput';
import BitlyPNG from '../../images/bitly.png';
import ReactSVG from  '../../images/icons8-react.svg';
import SemanticPNG from '../../images/semantic-ui-react.png';

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      lightMode: true
    }
  }

  componentDidMount() {
    let backgroundImage = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
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

  lightModeOn() {
    let backgroundImage = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
    document.body.style.backgroundImage = backgroundImage
    this.setState({lightMode: true})
  }

  lightModeOff() {
    let backgroundImage = 'linear-gradient(120deg, #242424 0%, #003350 100%)';
    document.body.style.backgroundImage = backgroundImage
    this.setState({lightMode: false})
  }

  render() {
    return (
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Segment inverted={!this.state.lightMode} stacked size='massive' padded='true' compact style={{
          position: 'absolute', 
          top: '40%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'center',
          padding: '40px'
        }}>
          <Label attached='top left' onClick={() => (this.setState({lightMode: true}), this.lightModeOn())} as='a'>
            Light On
          </Label>
          <Label attached='top right' onClick={() => (this.setState({lightMode: false}), this.lightModeOff())} as='a' color='black'>
            Light Off
          </Label>
          <Header style={{margin: '5px'}} as='h1'>URL Shortener</Header>
          <Header style={{margin: '5px 0 20px'}} as='h3'>Made with love using {this.ReactSVG()} + {this.BitlyPNG()} + {this.SemanticPNG()}</Header>
          <URLInput/>
        </Segment>
      </Container>
    );
  }
}