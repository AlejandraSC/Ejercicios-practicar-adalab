import '../stylesheets/App.css';
import React from 'react';
import HeaderForm from './HeaderForm';

class Header extends React.Component {
  render() {
    return (
      <div className="tweet">
        <header className="col2 mb-1">
          <div>
            <h1 className="title">
              <span className="fas fa-envelope-open-text"></span>
              Gmail
            </h1>
          </div>
        </header>
        <HeaderForm />
      </div>
    );
  }
}

export default Header;
