/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Telegram extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
        <div>
               {'Telegram MAIN PART1234'}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
)(Telegram);
