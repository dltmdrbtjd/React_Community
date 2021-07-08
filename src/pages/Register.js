import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { actionCreators as createActions } from '../redux/modeuls/user';

import { Text, Input, Button, Grid } from '../elements';

import {emailCheck} from "../shared/common";

const Register = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd_check, setPwdCheck] = useState("");
    const [user_name, setUserName] = useState("");

    const signUp = () => {
        if (id === "" || pwd === "" || user_name === ""){
            window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!")
            return;
        }
        
        if(!emailCheck(id)){
            window.alert("이메일 형식을 다시 확인해주세요!")
            return;
        }

        if(pwd !== pwd_check){
            window.alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다. ")
            return;
        }

        dispatch(createActions.registerFB(id,pwd,user_name));
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Grid center>
                    <Text size="36px" bold>회원가입</Text>
                </Grid>
                <Grid margin="0 auto" width="50vw" padding="16px 0px">
                    <Input 
                        label="아이디" 
                        placeholder="아이디를 작성해주세요"
                        _onChange={(e) => {
                            setId(e.target.value);
                        }} 
                    />
                </Grid>
                <Grid margin="0 auto" width="50vw" padding="16px 0px">
                    <Input 
                        label="닉네임" 
                        placeholder="닉네임을 작성해주세요" 
                        _onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </Grid>
                <Grid margin="0 auto" width="50vw" padding="16px 0px">
                    <Input
                        type="password"
                        label="비밀번호" 
                        placeholder="비밀번호를 작성해주세요"
                        _onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                    />
                </Grid>
                <Grid margin="0 auto" width="50vw" padding="16px 0px">
                    <Input
                        type="password"
                        label="비밀번호 재확인" 
                        placeholder="비밀번호를 한 번더 입력해주세요"
                        _onChange={(e) => {
                            setPwdCheck(e.target.value);
                        }}
                    />
                </Grid>
                <Grid center margin="20px 0 0 0">
                    <Button _onClick={signUp} padding="10px 30px">회원가입</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Register;