import React from 'react';
import { Link } from 'react-app';
import Button from 'react-mdl/lib/Button';
import Icon from 'react-mdl/lib/Icon';

class Player extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <div className="mdl-mini-footer mdl-color--grey-900" ref="root">
        <Button id="PlayButton">
          <Icon name="play_arrow" id="playIcon" className="md-light" />
        </Button>Está sonando: 
        <span id="radioTitle">titulo</span>
        <audio id="player" ref="audio_tag" src="/stream"/>
      </div>
    );
  }

}

export default Player;
