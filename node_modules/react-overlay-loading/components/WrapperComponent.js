import React from 'react';
import ReactDom from 'react-dom';
import Halogen from 'halogen';

export default class WrapperComponent extends React.Component {
  render() {
    return (
      <div>
        <Halogen.PulseLoader color={red} />
      </div>
    );
  }
}
