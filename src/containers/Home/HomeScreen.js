import React, { Component } from 'react';
import './HomeScreen.scss';
import { connect } from "react-redux";
import {simpleAction} from '../../actions/simpleAction';

class HomeScreen extends Component {
    data=null;
    render() {
      return (
        <div className="container">
            <h1>Home</h1>
            <button onClick={this.simpleAction}>Test redux action</button><br></br>
            <button onClick={ this.routerTest }>Test Router</button>
            <p>{this.props.simpleReducer.result}</p>
        </div>
      );
    }

    simpleAction = (event) => {
        this.props.simpleAction();
    }

    routerTest = () =>{
        this.props.history.push('/about');
    }
    
  }

  const mapStateToProps = state => ({
    ...state
   })

   const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
   })

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);