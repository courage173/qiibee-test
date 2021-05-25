import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../HOC/AuthLayout";
import FormField from "../utils/form/Form";
import { update } from "../utils/form/formAction";
import styled from "@emotion/styled";
import MyButton from "../utils/Button";

const Container = styled.div`
  padding: 30px;
  box-shadow: 0 16px 24px rgb(8 35 48 / 8%), 0 6px 12px rgb(8 35 48 / 14%);
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25rem;
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
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
`;
const Register = () => {
  const [form, setForm] = useState("brand");
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
      name: {
        element: "fieldset",
        value: "",
        config: {
          name: "name",
          type: "text",
          label: "Name",
          placeholder: "Enter your name",
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
      symbol: {
        element: "fieldset",
        value: "",
        config: {
          name: "symbol",
          type: "text",
          label: "Brand Symbol",
          placeholder: "Enter brand symbol name",
        },
        validation: {
          required: false,
          email: false,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showlabel: true,
      },
      loyalty: {
        element: "fieldset",
        value: "",
        config: {
          name: "loyalty",
          type: "number",
          label: "Loyalty point",
          placeholder: 0,
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

  const updateForm = (element) => {
    const formdata = form === "user" ? userForm.formdata : brand.formdata;
    const newFormdata = update(element, formdata, "register");
    form === "user"
      ? setUserForm({
          formError: false,
          formdata: newFormdata,
        })
      : setBrandForm({
          formError: false,
          formdata: newFormdata,
        });
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
            id={"symbol"}
            formdata={brand.formdata.symbol}
            change={(element) => updateForm(element)}
          />
        </FormContainer>
        <FormContainer>
          <FormField
            id={"loyalty"}
            formdata={brand.formdata.loyalty}
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
          id={"name"}
          formdata={userForm.formdata.name}
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
    <AuthLayout>
      <Container>
        <TopSection>
          <HeadText>
            Create a {form === "user" ? "user" : "brand"} account
          </HeadText>
        </TopSection>
        {form === "user" ? renderUserForm() : renderBrandForm()}
        <AccountWrap>
          <Span>Already have an account?</Span>
          <Span>
            <Link
              style={{
                textDecoration: "none",
                color: "#3a8dff",
              }}
              to="/login"
            >
              Sign in
            </Link>
          </Span>
        </AccountWrap>
        <ButtonContainer>
          <MyButton title="Sign up" bgColor={"#3a8dff"} color="#fff" />
        </ButtonContainer>
      </Container>
    </AuthLayout>
  );
};

export default Register;
