import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <header className="mdl-layout__header mdl-color--grey-900" ref="root">
        <div className="mdl-layout__header-row portfolio-logo-row">
            <span className="mdl-layout__title">
                <div className="portfolio-logo"></div>
                <span className="mdl-layout__title">Buho Radio</span>
            </span>
            <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
