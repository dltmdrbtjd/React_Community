import React from 'react';
import { Grid } from '../elements';

import { useDispatch } from 'react-redux';
import { actionCreators as imageActions } from '../redux/modeuls/image';

const Upload = (props) => {
    const dispatch = useDispatch();
    const fileInput = React.useRef();

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);
        
        reader.onloadend = () => {
            dispatch(imageActions.setPreview(reader.result));
        }
    }

    return (
        <React.Fragment>
            <Grid center>
                <input 
                type="file"
                onChange={selectFile}
                ref={fileInput}
                />
            </Grid>
        </React.Fragment>
    )
}

export default Upload;