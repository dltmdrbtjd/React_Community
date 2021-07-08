import React from 'react';

import Post from "../components/Post";
import { useSelector,useDispatch } from 'react-redux';
import { Grid } from '../elements';

import { actionCreators as postActions } from '../redux/modeuls/post';
import InfinityScroll from '../shared/InfinityScroll';
import { history } from '../redux/configStore';

const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    const is_loading = useSelector((state) => state.post.is_loading);
    const paging = useSelector((state) => state.post.paging);
    const user_info = useSelector((state) => state.user.user);

    React.useEffect(() => {
        if(post_list.length < 2) {
            dispatch(postActions.getPostFB());
        }
    },[])

    return (
        <React.Fragment>
            <Grid bg="skyblue" padding="16px">
            <InfinityScroll
                callNext={() => {
                    dispatch(postActions.getPostFB(paging.next));
                }}
                is_next={paging.next? true :false}
                loading={is_loading}
            >
                {post_list.map((item,idx) => {
                    if (item.user_info.user_id === user_info?.uid){
                        return (
                            <Grid
                                bg="#ffffff"
                                margin="8px 0px"
                                key={item.id}
                                _onClick={() => {
                                    history.push(`/post/${item.id}`);
                                }}
                            >
                                <Post key={item.id} {...item} is_me/>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid
                                key={item.id}
                                bg="#ffffff"
                                _onClick={() => {
                                    history.push(`/post/${item.id}`);
                                }}
                            >
                                <Post {...item} />
                            </Grid>
                        )
                    }
                })}
            </InfinityScroll>
            </Grid>
        </React.Fragment>
    )
}

export default PostList;