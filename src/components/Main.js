require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
import imageDatas from '../imageDatas';

let newImageInfo = imageDatas.map(function (value, i) {
  value.imageUrl = require('../../images/' + value.fileName);
  return value;
});

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="nav-controller"></nav>
      </section>

    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
