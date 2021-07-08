import React from 'react';

import { Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modeuls/user';

import Header from '../components/Header';
import Post from '../pages/PostList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Permit from './Permit';
import { apiKey } from './firebase';

import { Button } from '../elements';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(() => {
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
        <Header></Header>
        <ConnectedRouter history={history}>
            <Route path="/" exact component={Post} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/write" exact component={PostWrite} />
            <Route path="/write/:id" exact component={PostWrite} />
            <Route path="/post/:id" exact component={PostDetail} />
        </ConnectedRouter>
        <Permit>
          <Button 
          is_fixed
          _onClick = {() => {
            history.push("/write");
          }}
          ></Button>
        </Permit>
    </React.Fragment>
  );
}

export default App;
