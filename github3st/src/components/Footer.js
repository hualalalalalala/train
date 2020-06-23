import React from 'react';

class Footer extends React.Component {
  render() {
    return (<div style={{ textAlign: 'center', backgroundColor: '#ccc' }}>{this.props.children}</div>);
  }
}
export default Footer;
