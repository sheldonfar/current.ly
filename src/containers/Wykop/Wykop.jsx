/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wykop extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
        <div>
               {'WYKOP MAIN PART'}
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
)(Wykop);
