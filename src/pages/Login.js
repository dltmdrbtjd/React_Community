import React, {useState} from 'react';

import { useDispatch } from 'react-redux';

import { Input, Grid, Button, Text } from '../elements';
import { actionCreators as loginActions } from '../redux/modeuls/user';

const Login = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const login = () => {
        dispatch(loginActions.loginFB(id,pwd))
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Grid center>
                    <Text size="36px" bold >LOGIN</Text>
                </Grid>
                <Grid margin="0 auto" width="50vw" padding="16px 0px">
                    <Input 
                        label="아이디" 
                        placeholder="아이디를 입력해주세요!"
                        _onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                </Grid>
                <Grid margin="0 auto" width="50vw" padding="16px 0px">
                    <Input
                        type="password"
                        label="비밀번호" 
                        placeholder="비밀번호를 입력해주세요!"
                        _onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                    />
                </Grid>
                <Grid width="30vw" center margin="20px auto">
                    <Button _onClick={login} padding="10px 30px">로그인하기</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Login;