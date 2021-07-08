import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { children, width, _onClick, text, padding, is_fixed, margin } = props

    const styles = {
        width: width,
        padding: padding,
        is_fixed: is_fixed,
        margin: margin,
    }

    if(is_fixed){
        return (
            <React.Fragment>
                <FixedBtn {...styles} onClick={_onClick}>+</FixedBtn>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Btn {...styles} onClick={_onClick}>{text? text: children}</Btn>
        </React.Fragment>
    )
}

Button.defaultProps = {
    children: null,
    text: false,
    _onClick: () => {},
    width: "100%",
    padding: "12px 0px",
    is_fixed: false,
    margin: false,
}

const Btn = styled.button`
    width: ${(props) => props.width};
    background-color: #464545;
    color: #fff;
    border: none;
    border-radius: 10px;
    ${(props) => (props.padding? `padding:${(props.padding)}`:"")};
    cursor: pointer;
    ${(props) => (props.margin? `margin:${(props.margin)}`:"")};
`;

const FixedBtn = styled.button`
    width: 60px;
    height: 60px;
    background-color: #464545;
    color: #ffffff;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    border: none;
    border-radius: 60px;
    cursor: pointer;
`;

export default Button;