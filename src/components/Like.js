import React from 'react';
import styled from 'styled-components';

import pinklike from '../heart_pink.png';
import graylike from '../heart_gray.png';


const Like = (props) => {

    const icon_url = props.is_like? pinklike : graylike;

    return (
        <React.Fragment>
            <LikeBtn onClick={props._onClick} icon_url={icon_url} />
        </React.Fragment>
    )
}

const LikeBtn = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    background: url(${(props) => props.icon_url});
    background-size: cover;
    cursor: pointer;
`;

export default Like;