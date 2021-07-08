import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const PREVIEW = "PREVIEW";

const setPreview = createAction(PREVIEW, (preview) => ({preview}));

const initialState = {
    preview: null,
};

export default handleActions({
    [PREVIEW] : (state, action) => produce(state, (draft) => {
        draft.preview = action.payload.preview;
    }),
}, initialState);

const actionCreators = {
    setPreview,
}

export { actionCreators }