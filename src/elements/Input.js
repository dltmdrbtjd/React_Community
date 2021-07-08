import React from 'react';
import styled from 'styled-components';

import { Text,Grid } from '.';

const Input = (props) => {
    const {type ,label ,_onChange ,value ,placeholder, onSubmit, is_submit, multiLine} = props
    
    if(multiLine) {
        return(
            <Grid>
                {label && <Text margin="5px" bold>{label}</Text>}
                <TextArea
                    rows={10}
                    value={value}
                    placeholder={placeholder}
                    onChange={_onChange}
                ></TextArea>
            </Grid>
        )
    }

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin="5px" bold>{label}</Text>}
                {is_submit ? (
                <ElInput 
                    type={type}
                    placeholder={placeholder}
                    onChange={_onChange}
                    value={value}
                    onKeyPress={(e) => {
                        if(e.key === "Enter"){
                            onSubmit(e)
                        }
                    }}
                />
                ) : (
                <ElInput type={type} placeholder={placeholder} onChange={_onChange}/>
                )}
            </Grid>
        </React.Fragment>
    )
}

Input.defaultProps = {
    label: false,
    type: "text",
    value: "",
    placeholder: "텍스트를 입력해주세요!",
    onSubmit: () => {},
    _onChange: () => {},
    is_submit: false,
    multiLine: false,
}

const ElInput = styled.input`
    border: 1px solid #c4c4c4;
    width: 100%;
    padding: 10px 8px;
    box-sizing: border-box;
    display:block;
`;

const TextArea = styled.textarea`
    border: 1px solid #c4c4c4;
    width: 100%;
    padding: 12px 6px;
    box-sizing: border-box;
`;

export default Input;