import React from 'react';

import { Grid, Text, Button } from '../elements';

import { useSelector,useDispatch } from 'react-redux';

import { history } from "../redux/configStore";
import { apiKey } from "../shared/firebase";

import { actionCreators as userActions } from '../redux/modeuls/user';


const Header = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector(state=> state.user.is_login);

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key)? true : false;

    if(is_login && is_session){
        return (
            <React.Fragment>
                <Grid is_flex padding="4px 16px" border>
                    <Grid>
                        <Text bold size="32px">로고입니다</Text>
                    </Grid>
                    <Grid width="100%" is_flex>
                        <Button padding="10px 20px">내정보</Button>
                        <Button 
                        padding="10px 20px"
                        _onClick={() => {
                            dispatch(userActions.logoutFB());
                        }}
                        >로그아웃</Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }


    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px" border>
                <Grid>
                    <Text bold size="32px">로고입니다</Text>
                </Grid>
                <Grid is_flex>
                    <Button _onClick={() =>{
                        history.push("/login")
                    }}padding="10px 20px">로그인</Button>
                    <Button _onClick={() => {
                        history.push("/register")
                    }} padding="10px 20px">회원가입</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {};

export default Header;