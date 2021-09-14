import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
      return <div className="section about"> 
        <div className="box">
          <div className="box_title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="box_content">
            <h4>{this.props.text}</h4>
          </div>
        </div>
      </div>;
    }
  }

  export default Header;