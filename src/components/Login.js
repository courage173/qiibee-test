import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthLayout from "../HOC/AuthLayout";
import { Link } from "react-router-dom";
import FormField from "../utils/form/Form";
import { update, generateData, isFormValid } from "../utils/form/formAction";
import styled from "@emotion/styled";
import MyButton from "../utils/Button";
import { loginUser } from "../redux/actions/user";

const Container = styled.div`
  padding: 30px;
  box-shadow: 0 16px 24px rgb(8 35 48 / 8%), 0 6px 12px rgb(8 35 48 / 14%);
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    box-shadow: none;
    padding: 0;
  }
`;
const HeadText = styled.h4`
  font-size: 35px;
  font-weight: 600;
  /* color: #b0b0b0; */
  margin-bottom: 0;
  margin-top: 10px;
`;
const Span = styled.span`
  font-weight: 400;
  padding-right: 20px;
  color: #b0b0b0;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FormContainer = styled.div`
  margin: 15px 0px;
`;

const AccountWrap = styled.div`
  width: 22rem;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const Login = (props) => {
  const [userForm, setUserForm] = useState({
    formdata: {
      email: {
        element: "fieldset",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          label: "Email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      password: {
        element: "fieldset",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
          label: "Password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
    },
  });

  const [brand, setBrandForm] = useState({
    formdata: {
      name: {
        element: "fieldset",
        value: "",
        config: {
          name: "name",
          type: "text",
          label: "Name",
          placeholder: "Enter brand name",
        },
        validation: {
          required: true,
          email: false,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      password: {
        element: "fieldset",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
          label: "Password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
    },
  });
  const switchForm = props.switchForm === "brand";

  const updateForm = (element) => {
    const formdata = switchForm ? brand.formdata : userForm.formdata;
    const newFormdata = update(element, formdata, "register");
    switchForm
      ? setBrandForm({
          formError: false,
          formdata: newFormdata,
        })
      : setUserForm({
          formError: false,
          formdata: newFormdata,
        });
  };

  const handleSubmit = async () => {
    const form = switchForm ? brand.formdata : userForm.formdata;
    const isValid = isFormValid(form);
    if (isValid) {
      const data = generateData(form);
      await props.loginUser(data);
    }
  };
  const renderBrandForm = () => {
    return (
      <>
        <FormContainer>
          <FormField
            id={"name"}
            formdata={brand.formdata.name}
            change={(element) => updateForm(element)}
          />
        </FormContainer>
        <FormContainer>
          <FormField
            id={"password"}
            formdata={brand.formdata.password}
            change={(element) => updateForm(element)}
          />
        </FormContainer>
      </>
    );
  };

  const renderUserForm = () => (
    <>
      <FormContainer>
        <FormField
          id={"email"}
          formdata={userForm.formdata.email}
          change={(element) => updateForm(element)}
          styles={{
            marginTop: "0 20px",
          }}
        />
      </FormContainer>
      <FormContainer>
        <FormField
          id={"password"}
          formdata={userForm.formdata.password}
          change={(element) => updateForm(element)}
          styles={{
            marginTop: "0 20px",
          }}
        />
      </FormContainer>
    </>
  );
  return (
    <AuthLayout login={true}>
      <Container>
        <TopSection>
          <HeadText>Welcome back</HeadText>
        </TopSection>
        {switchForm ? renderBrandForm() : renderUserForm()}

        <ButtonContainer>
          <MyButton
            title="Sign in"
            bgColor={"#3a8dff"}
            color="#fff"
            secBg
            runAction={handleSubmit}
            mobileWidth={"19rem"}
            font={"17px"}
          />
        </ButtonContainer>
        <AccountWrap>
          <Span>Don't have an account?</Span>
          <Span>
            <Link
              style={{
                textDecoration: "none",
                color: "#3a8dff",
              }}
              to="/"
            >
              Sign up
            </Link>
          </Span>
        </AccountWrap>
      </Container>
    </AuthLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    switchForm: state.ui.toggleForm,
    login: state.user.login,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loginUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
