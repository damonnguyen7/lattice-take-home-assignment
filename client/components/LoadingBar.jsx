import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import BarLoader from 'react-spinners/BarLoader';

const override = css`
    display: block;
    margin: 0 auto;
    --box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;

/**
 * @constructs LoadingBar
 * @props isLoading {Boolean}
 */

class LoadingBar extends Component {
  render() {
    return (
      <BarLoader
        css={override}
        width={'100%'}
        color={'#95afc0'}
        loading={this.props.isLoading}
      />
    );
  }
};

export default LoadingBar;