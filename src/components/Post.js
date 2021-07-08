import React from 'react';

import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modeuls/post';
import Like from './Like';

import { Grid, Text, Image, Button } from '../elements';
import { history } from '../redux/configStore';

const Post = React.memo((props) => {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Grid padding="16px" margin="0 0 20px 0">
                <Grid is_flex>
                    <Grid is_flex width="auto">
                        <Image shape="circle" src={props.user_profile}></Image>
                        <Text size="14px">{props.user_info.user_name}</Text>
                    </Grid>
                    <Grid width="auto" is_flex>
                        <Text size="14px">{props.insert_dt}</Text>
                        {props.is_me && (
                            <React.Fragment>
                                <Button
                                    width="auto"
                                    margin="0 0 0 15px"
                                    padding="4px"
                                    _onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        history.push(`/write/${props.id}`);
                                    }}
                                >
                                    수정
                                </Button>
                                <Button
                                    width="auto"
                                    margin="0 0 0 15px"
                                    padding="4px"
                                    _onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        dispatch(postActions.deletePostFB(props.id));
                                    }}
                                >삭제</Button>
                            </React.Fragment>
                        )}
                    </Grid>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.image_url}></Image>
                </Grid>
                <Grid>
                    <Text size="16px">{props.contents}</Text>
                </Grid>
                <Grid is_flex width="auto">
                    <Grid is_flex width="auto">
                        <Like
                            _onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                dispatch(postActions.toggleLikeFB(props.id));
                            }}
                            is_like={props.is_like}
                        ></Like>
                        <Text size="16px" bold>좋아요 {props.like_cnt}개</Text>
                    </Grid>
                    <Text size="16px" bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
})

Post.defaultProps = {
    id: null,
    user_info: {
        user_id: "",
        user_name: "",
        user_profile: ""
    },
    image_url: "",
    contents: "",
    comment_cnt: 0,
    like_cnt: 0,
    insert_dt: "2021-07-04 10:11:15",
    is_me: false,
    is_like: false,
}

export default Post;