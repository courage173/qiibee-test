import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const FieldSet = styled.fieldset`
  box-sizing: border-box;
  border-radius: 4px;
  height: 3rem;
  padding: 0 5px;
  width: 22rem;
  @media (max-width: 768px) {
    width: 19rem;
  }
`;
const Legend = styled.legend`
  font-family: "Open Sans, sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;
const Input = styled.input`
  box-shadow: #fff 0px 0px 0px 9999px inset;
  width: 100%;
  height: 2rem;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  margin-top: -3px;
`;
const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
function FormField({ formdata, change, id, altFieldSet }) {
  const showError = () => {
    let errorMessage = null;

    if (formdata.validation && !formdata.valid) {
      errorMessage = <Error>{formdata.validationMessage}</Error>;
    }

    return errorMessage;
  };

  const renderForm = () => {
    let template = null;
    switch (formdata.element) {
      case "fieldset":
        template = (
          <div>
            <FieldSet>
              <Legend>{formdata.config.label}</Legend>
              <Input
                {...formdata.config}
                value={formdata.value}
                onBlur={(event) => change({ event, id, blur: true })}
                onChange={(event) => change({ event, id })}
                id={id}
              />
              {showError()}
            </FieldSet>
          </div>
        );
        break;
      case "input":
        template = (
          <div>
            <Input
              {...formdata.config}
              value={formdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
              id={id}
            />
            {showError()}
          </div>
        );
        break;
      default:
        template = "";
        break;
    }
    return template;
  };

  return <>{renderForm()}</>;
}

FormField.displayName = "FormField";

FormField.propTypes = {
  formdata: PropTypes.shape({
    config: PropTypes.object,
    validation: PropTypes.object,
    valid: PropTypes.bool,
    validationMessage: PropTypes.string,
    element: PropTypes.string,
    value: PropTypes.string,
    showlabel: PropTypes.bool,
  }),
  change: PropTypes.func,
  id: PropTypes.string,
  altStyle: PropTypes.object,
  styles: PropTypes.object,
  inputClass: PropTypes.string,
  altFieldSet: PropTypes.string,
};
export default FormField;
