import React from 'react';

import './App.css';
import PersistentDrawerLeft from './componant/drawer';
import SignIn from './SignIn';
import { connect } from 'react-redux';

function App(props) {
    return (
        <React.Fragment>
            
            <PersistentDrawerLeft />
            </React.Fragment>
  );
}
const mapStateToProps = (state, ownProps) => {
    const { userValidated } = state.userReducer;
    return { userValidated: userValidated }
};
export default connect(
    mapStateToProps,
)(App)



//{!props.userValidated && <SignIn />}
//{ props.userValidated && <PersistentDrawerLeft /> } 