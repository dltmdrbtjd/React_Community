import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const { width, bg, children, is_flex, padding, margin, center, _onClick, border, cursor, position } = props

    const styles = {
        width: width,
        bg: bg,
        is_flex:is_flex,
        padding:padding,
        margin:margin,
        center:center,
        border:border,
        cursor: cursor,
        position: position,
    }

    return (
        <React.Fragment>
            <Gridbox {...styles} onClick={_onClick}>{children}</Gridbox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    children: null,
    width: "100%",
    bg: false,
    is_flex: false,
    padding: false,
    margin: false,
    center: false,
    _onClick: () => {},
    border: false,
    cursor: false,
    position: false,
}

const Gridbox = styled.div`
    z-index: 1;
    width: ${(props) => props.width};
    height: 100%;
    box-sizing: border-box;
    ${(props) => (props.bg ? `background-color: ${props.bg}`: "")};
    ${(props) => (props.padding ? `padding:${props.padding}`: "")};
    ${(props) => (props.margin ? `margin:${props.margin}`: "")};
    ${(props) => (props.center ? `text-align:center`:"")};
    ${(props) => props.is_flex? `display:flex; align-items: center; justify-content:space-between;`:""};
    ${(props) => props.border? `box-shadow: 1px 1px 10px rgba(0,0,0,0.25);` : ""};
    ${(props) => props.cursor? `cursor:pointer;` : ""};
    ${(props) => props.position? `position:absolute; left:16px; bottom:16px;`:""};
`;

export default Grid;