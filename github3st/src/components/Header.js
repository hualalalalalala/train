import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkdata: [
        { name: 'All' },
        { name: 'javaScript' },
        { name: 'ruby' },
        { name: 'java' },
        { name: 'css' },
        { name: 'python' },
      ],
    };
  }

  render() {
    let lang = window.location.href.split('=')[1];
    console.log('header', lang);
    if (lang === undefined || lang === '') {
      lang = 'All';
    }
    const list = this.state.linkdata.map((e, key) => (
      <li key={key} style={{ borderRadius: '15px', margin: '0 15px' }}>
        <NavLink
          style={{ textDecoration: 'none', borderRadius: '10px', backgroundColor: lang === e.name ? 'pink' : 'white' }}
          to={{
            pathname: '/popular',
            search: `?lang=${e.name}`,
          }}
        >{e.name}
        </NavLink>
      </li>
    ));
    return (
      <ul style={{
        listStyle: 'none', fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '30px',
      }}
      >{list}
      </ul>
    );
  }
}
export default Header;
