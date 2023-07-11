import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {  signup } from "../../service/auth";

import { Box, Button, Dialog, TextField, Typography,styled } from "@mui/material";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";


const Component = styled(Box)`
    height: 90vh;
    width: 80vh; 
`;


const Wrapper = styled(Box)`
    display: flex;
    height: 80%;
    flex-direction: column;
    padding: 25px 150px;
    flex: 1;
    & > div,& > button,& > Error {
        margin-top: 20px
    }
`;

const Error = styled(Typography)`
    font-size: 14px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600
`;
const LoginButton =styled(Button)`
    text-transform: none;
    background: #007c89;
    color: #ffffff;
    height: 48px;
    border-radius: 2px;
`;




const SignUpDialog = ({open,setOpenSignUp}) => {

const navigate = useNavigate();

  const initialValues = { 
    name: '',
    email: '',
    password: '',
    role: "",
    mobile: ""
};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


    const handleClose = () => {
        setOpenSignUp(false)
        navigate("/");
    }

    const handleChange = ({target:{name,value}}) => {
        setFormValues({...formValues,[name]: value})
        console.log(formValues)
    }
  

    const signUpUser = async ()  => {
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if(isSubmit){
            let response =  await signup(formValues);
            if (response?.statusCode === 200) {
                handleClose(); 
                setFormValues("");           
                navigate("/");
            } else {
                toast("something is missing")
            }
        }
        
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);


      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } 
        else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } 
        else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } 
        else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.role) {
            errors.role = "Role is required!";
        }
        if (!values.mobile) {
            errors.mobile = "Phone number is required!";
        }
        return errors;
      };

   

    return(

        <Dialog open={open} onClose={handleClose} >
            <Component>
                <Wrapper>
                    <Typography variant="h4" style={{fontWeight:"bold"}} >SignUp</Typography>
                    <TextField 
                        variant="outlined" 
                        label="First Name" 
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}  
                    />
                    <Error>{formErrors.name}</Error>
                    <TextField 
                        variant="outlined"  
                        label="Email" 
                        name="email" 
                        value={formValues.email}
                        onChange={handleChange} 
                    />
                     <Error>{formErrors.email}</Error>
                    <TextField 
                        variant="outlined" 
                        label="password" 
                        name="password" 
                        value={formValues.password}
                        onChange={handleChange} 
                    />
                     <Error>{formErrors.password}</Error>
                    <TextField 
                        variant="outlined" 
                        label="Role" name="role" 
                        value={formValues.role} 
                        onChange={handleChange} 
                    />
                    <Error>{formErrors.role}</Error>
                    <TextField 
                        variant="outlined" 
                        label="Phone number" name="mobile" 
                        value={formValues.mobile} 
                        onChange={ handleChange} 
                    />
                    <Error>{formErrors.mobile}</Error>
                    
                    <LoginButton onClick={signUpUser} variant="contained" style={{marginTop: "20px"}}>
                        Signup
                    </LoginButton>
                    
                    <LoginSocialGoogle
                        client_id={"492285431100-gcgl80jf5ota62cfp6i40508tme11502.apps.googleusercontent.com"}
                        scope="openid profile email"
                        discoveryDocs="claims_supported"
                        access_type="offline"
                        onResolve={({ provider, data }) => {
                            console.log(provider, data);
                        }}
                        onReject={(err) => {
                            console.log(err);
                        }}
                    >
                        <GoogleLoginButton/>
                    </LoginSocialGoogle>               
                </Wrapper>
            </Component>
            
        </Dialog>
    )
}

export default SignUpDialog