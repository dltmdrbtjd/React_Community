import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { auth } from "../../shared/firebase";
import firebase from "firebase/app";

import { setCookie , deleteCookie } from "../../shared/cookie";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";


// action creators
const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

// initialState
const initialState = {
    user: null,
    is_login: false,
}

// middleware
// 회원가입
const registerFB = (id,pwd,user_name) => {
    return function(dispatch, getState, {history}){
        auth
            .createUserWithEmailAndPassword(id, pwd)
            .then((user) => {
                auth.currentUser.updateProfile({
                    displayName: user_name,
                }).then(() => {
                    dispatch(setUser({
                        user_name: user_name,
                        id: id,
                        user_profile: "",
                        uid: user.user.uid,
                    }))
                    history.push("/");
                }).catch((error) => {
                    console.log(error);
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);
            });
    }
}

// 로그인
const loginFB = (id,pwd) => {
    return function (dispatch, getState, {history}){
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
            auth
            .signInWithEmailAndPassword(id, pwd)
            .then((user) => {
                dispatch(setUser({
                    user_name: user.user.displayName,
                    id: id,
                    user_profile: "",
                    uid: user.user.uid,
                }))
                history.push("/");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
        });
    };
};

// 로그인 상태확인
const loginCheckFB = () => {
    return function (dispatch, getState, {history}) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUser({
                    user_name: user.displayName,
                    user_profile: "",
                    id: user.email,
                    uid: user.uid,
                }))
            } else {
                dispatch(logOut());
            }
          });
    }
}

// 로그아웃
const logoutFB = () => {
    return function (dispatch, getState, {history}) {
        auth.signOut().then(() => {
            dispatch(logOut());
            history.replace('/');
        })
    }
}


// reducer
export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        setCookie("is_login","success");
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
}, initialState);

const actionCreators = {
    registerFB,
    loginFB,
    loginCheckFB,
    logoutFB,
}

export { actionCreators }