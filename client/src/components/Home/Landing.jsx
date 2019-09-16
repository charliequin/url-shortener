import React from 'react';
import { 
  Container, 
  Header,
  Segment,
  Checkbox,
  Icon,
  Label
 } from 'semantic-ui-react';
import URLInput from './URLInput';
import BitlyPNG from '../../images/bitly.png';
import ReactSVG from  '../../images/icons8-react.svg';
import SemanticPNG from '../../images/semantic-ui-react.png';

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      lightMode: true,
      width: window.innerWidth
    }
    this.windowResize();
  }

  componentDidMount() {
    let backgroundImage = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
    document.body.style.backgroundImage = backgroundImage
  }

  windowResize = () => {
    window.addEventListener('resize', () => this.setState({width: window.innerWidth}))
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
    if (this.state.lightMode) {
      let backgroundImage = 'linear-gradient(120deg, #242424 0%, #003350 100%)';
      document.body.style.backgroundImage = backgroundImage
      this.setState({lightMode: false})
    } else {
      let backgroundImage = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
      document.body.style.backgroundImage = backgroundImage
      this.setState({lightMode: true})
    }
  }

  render() {
    return (
      <Container>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '20% 0'
        }}>
          <Segment inverted={!this.state.lightMode} size={this.state.width < 750 ? 'small' : 'massive'} stacked style={{
            padding: '50px 40px'
          }}>
            <Label attached='top'>
              <Checkbox label={this.state.lightMode ? `Light's Off` : `Light's On`} toggle onClick={() => (this.setState({lightMode: false}), this.lightModeOn())}/>
            </Label>
            <Header style={{margin: '5px'}} as='h1'>URL Shortener</Header>
            <Header style={{margin: '5px 0 20px'}} as='h3'>Made with love using {this.ReactSVG()} + {this.BitlyPNG()} + {this.SemanticPNG()}</Header>
            <URLInput />
          </Segment>
        </div>
      </Container>
    );
  }
}