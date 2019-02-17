import React, { Component } from 'react';
import { connect } from 'react-redux';


const key = 'gDBAPC9UAv'
const secret = 'wftBRVlEDE'

class Wykop extends Component {
    render() {
        console.warn("RENDER")
        return (
            <div>
                WYKOP MAIN PART
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