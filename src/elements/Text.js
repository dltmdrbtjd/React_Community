import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
    const {children,size,bold,color,margin} = props

    const styles = {
        size: size,
        color: color,
        bold: bold,
        margin: margin,
    }

    return (
        <React.Fragment>
            <Font {...styles}>{children}</Font>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children: null,
    size: "24px",
    bold: false,
    color: "#000",
    margin: false,
}

const Font = styled.p`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
`;

export default Text;