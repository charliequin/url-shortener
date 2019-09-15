import React from 'react';
import { Message, Header, Input } from 'semantic-ui-react';

export default class URLResult extends React.Component {
  render() {
    if (this.props.result) {
      return (
        <Message>
          <Header as='h4'>
           {this.props.urlRsult}
          </Header>
        </Message>
      );
    } else {
      return (
        <>
        </>
      );
    }
  }
}