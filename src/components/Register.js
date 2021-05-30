import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AuthLayout from "../HOC/AuthLayout";
import FormField from "../utils/form/Form";
import { update, generateData, isFormValid } from "../utils/form/formAction";
import styled from "@emotion/styled";
import MyButton from "../utils/Button";
import { registerUser } from "../redux/actions/user";
import { toast } from "react-toastify";

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
  @media (max-width: 768px) {
    font-size: 30px;
  }
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LogoSection = styled.div`
  width: 22rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;
const LogoImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;
const Register = (props) => {
  const [preview, setPreview] = useState(null);

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
      firstName: {
        element: "fieldset",
        value: "",
        config: {
          name: "firstName",
          type: "text",
          label: "First Name",
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
      lastName: {
        element: "fieldset",
        value: "",
        config: {
          name: "lastName",
          type: "text",
          label: "Last Name",
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
  const handleSubmit = () => {
    const form = switchForm ? brand.formdata : userForm.formdata;
    form.image = preview || "";
    if (!preview) {
      return toast.error("please upload a logo");
    }
    const isValid = isFormValid(form);

    if (isValid) {
      const data = generateData(form);
      data.image = preview;
      if (switchForm) {
        data.role = "brand";
      } else {
        data.role = "user";
      }
      props.registerUser(data);
    } else {
      toast.error("form is not valid");
    }
  };
  //
  const handleImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setPreview(null);
      return;
    }
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
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
        <LogoSection>Upload Logo</LogoSection>
        <LogoSection>
          <input type="file" name="logo" onChange={handleImage} />
          {preview ? <LogoImage src={preview} alt="logo" /> : null}
        </LogoSection>
      </>
    );
  };
  const renderUserForm = () => (
    <>
      <FormContainer>
        <FormField
          id={"firstName"}
          formdata={userForm.formdata.firstName}
          change={(element) => updateForm(element)}
          styles={{
            marginTop: "0 20px",
          }}
        />
      </FormContainer>

      <FormContainer>
        <FormField
          id={"lastName"}
          formdata={userForm.formdata.lastName}
          change={(element) => updateForm(element)}
          styles={{
            marginTop: "0 20px",
          }}
        />
      </FormContainer>
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
      <LogoSection>Upload Profile Pic</LogoSection>
      <LogoSection>
        <input type="file" name="logo" onChange={handleImage} />
        {preview ? <LogoImage src={preview} alt="logo" /> : null}
      </LogoSection>
    </>
  );
  return (
    <AuthLayout>
      <Container>
        <TopSection>
          <HeadText>Create a {switchForm ? "brand" : "user"} account</HeadText>
        </TopSection>
        {switchForm ? renderBrandForm() : renderUserForm()}
        <ButtonContainer>
          <MyButton
            title="Sign up"
            bgColor={"#3a8dff"}
            color="#fff"
            secBg
            runAction={handleSubmit}
            mobileWidth={"19rem"}
            font={"17px"}
          />
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
        </ButtonContainer>
      </Container>
    </AuthLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    switchForm: state.ui.toggleForm,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ registerUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
