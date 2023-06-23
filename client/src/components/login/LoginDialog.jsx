import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { useState, useContext } from 'react'
import { authenticateSignup, authenticateLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvider'
const Component = styled(Box)`
height:70vh;
width:90vh;`
const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:83%;
width:28%;
padding:45px 35px;
&>p,&>h5{
    color:#red;
    font-weight:600;}`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    &>div, &>button, &>p{
        margin-top:20px;}`
const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
height:48px;
border-radius:2px;`
const RequestOTP = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%)`
const Text = styled(Typography)`
font-size:12px;
color:#878787;`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;`
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
font-weight:600;`
const accountInitialValues = {
    login: { view: 'login', heading: 'Login here', subHeading: 'Get access to' },
    signup: { view: 'signup', heading: 'You are here', subHeading: ' Sign up with mobile' }
}
const signupInitialValues = { firstname: '', lastname: '', username: '', email: '', password: '', phone: '' }
const loginInitialValues = { username: '', password: '' }
const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialValues);//signup={firstname: '', lastname: '', username: '', email: '', password: '', phone: ''}
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    const [v, sV] = useState(false);
    const { setAccount } = useContext(DataContext);
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login)
        setError(false)
        sV(false)
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }
    const onInputChange = (e) => {
        sV(false);
        setSignup({ ...signup, [e.target.name]: e.target.value })
        // console.log(signup)
    }
    const signupUser = async () => {
        if (!signupInitialValues.firstname || !signupInitialValues.lastname || !signupInitialValues.username ||
            !signupInitialValues.email || !signupInitialValues.password || !signupInitialValues.phone) { sV(true) } else { sV(false) }
        let response = await authenticateSignup(signup);

        if (!response) return;
        handleClose();
        setAccount(signup.firstname)
    }
    const onValueChange = (e) => {
        sV(false);
        setError(false);
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const loginUser = async () => {
        if (!loginInitialValues.username || !loginInitialValues.password ) { sV(true) } else { sV(false) }
         
        let response = await authenticateLogin(login);
        sV(false)

        setError(false);
        if (response.status === 200) {

            handleClose();
            setAccount(response.data.data.firstname)
        } else {
            setError(true)
        }
            }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter username'></TextField>
                         {v ? <span style={{ fontSize: 9, marginTop: 3, color: 'red', fontWeight: 'bold' }}>Can't be empty</span> : ''}
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter password'></TextField>{v ? <span style={{ fontSize: 9, color: 'red', fontWeight: 'bold' }}>Can't be empty</span> : ''}
                            {error && <Error>Please enter valid username or password</Error>}
                            <Text>By continuing you agree our policy.</Text>
                            <LoginButton onClick={() => loginUser()}>login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>or</Typography>
                            <RequestOTP>Request otp</RequestOTP>
                            <CreateAccount onClick={() => { toggleSignup() }}>New to flipkart ? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label='firstname'></TextField>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label='lastname'></TextField>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='username'></TextField>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='email'></TextField>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='password'></TextField>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label='phone'></TextField>
                            {v ? <span style={{ fontSize: 9, marginTop: 3, color: 'red', fontWeight: 'bold' }}>Can't be empty! All fields are required</span> : ''}
                            <LoginButton onClick={() => signupUser()}>continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog