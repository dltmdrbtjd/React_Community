import React from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as writeActions } from '../redux/modeuls/post';
import { actionCreators as imageActions } from '../redux/modeuls/image';

import { Grid, Input, Button, Image, Text } from '../elements';

import { history } from '../redux/configStore';
import Upload from '../shared/upload';

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector(state=>state.user.is_login);
    const preview = useSelector(state => state.image.preview);
    const post_list = useSelector(state => state.post.list);

    const post_id = props.match.params.id;
    const is_edit = post_id ? true : false;

    let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

    const [contents, setContents] = React.useState("");

    React.useEffect(() => {
        if(is_edit && !_post){
            window.alert("포스트 정보가 없습니다.");
            history.goBack();

            return;
        }
        if(is_edit) {
            dispatch(imageActions.setPreview(_post.image_url));
        }
    }, []);


    const changeContents = (e) => {
        setContents(e.target.value);
    }

    const addPost = () => {
        dispatch(writeActions.addPostFB(contents))
    }

    const editPost = () => {
        dispatch(writeActions.editPostFB(post_id, {contents: contents}));
    };


    if(!is_login){
        return (
            <React.Fragment>
                <Grid center>
                    <Text bold>로그인 후에만 작성할 수 있습니다.</Text>
                    <Button 
                    width="30vw" 
                    text="로그인 하러가기"
                    _onClick={()=>{
                        history.push('/login');
                    }}
                    ></Button>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Grid center padding="16px">
                <Text size="36px" bold>
                    {is_edit ? "게시글 수정" : "게시글 작성"}
                </Text>
            </Grid>
            <Grid center padding="16px"> 
                <Upload />
            </Grid>
            <Grid center padding="16px">
                <Text size="32px" bold>미리보기</Text>
                <Image shape="rectangle" src={preview? preview: "http://via.placeholder.com/400x300"} />
            </Grid>
            <Grid padding="16px">
                <Input
                value={contents}
                _onChange={changeContents}
                multiLine 
                label="게시글 내용"
                placeholder="게시글 작성"
                />
            </Grid>
            <Grid width="30vw" margin="30px auto">
                {is_edit ? (
                    <Button _onClick={editPost}>게시글 수정</Button>
                ): (
                <Button text="작성완료" _onClick={addPost}></Button>
                )}
            </Grid>
        </React.Fragment>
    )
}

export default PostWrite;