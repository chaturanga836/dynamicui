import React from "react";
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";

const InputFormName = () => {
  const dispatch = useDispatch();
  const formName = useSelector(state => state.formName);
  const onChangeName = event => {
    dispatch({ type: "SET_FORM_NAME", data: event.target.value });
  };

  return (
    <React.Fragment>

        <TextField
          label="Form Name"
          placeholder="ex:- My custom form"
          value={formName}
          onChange={onChangeName}
        />
    </React.Fragment>
  );
};

export default InputFormName;
