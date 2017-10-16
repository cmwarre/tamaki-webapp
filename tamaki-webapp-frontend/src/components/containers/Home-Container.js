/**
 * Created by cwarren on 10/16/17.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as testApi from '../../api/testApi';
import Home from '../pages/Home';

class HomeContainer extends Component {

    componentDidMount() {
        testApi.getTest();
    }

    render() {
        return (
            <Home message={this.props.message}/>
        );
    }
}

const mapStateToProps = function(store) {
  return {
    message: store.testState.message
  };
};

export default connect(mapStateToProps)(HomeContainer);

