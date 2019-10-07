import React from "react";
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";

const FormTitle = () => {
  const dispatch = useDispatch();
  const formTitle = useSelector(state => state.formTitle);
  const onChangeTitle = event => {
    dispatch({ type: "SET_FORM_TITLE", data: event.target.value });
  };

  return (
    <React.Fragment>

        <TextField
          label="Title"
          placeholder="ex:- Registration"
          value={formTitle}
          onChange={onChangeTitle}
        />
    </React.Fragment>
  );
};

export default FormTitle;