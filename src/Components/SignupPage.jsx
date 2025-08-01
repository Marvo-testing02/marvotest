import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Grid } from '@mui/material';
import logo from '../assets/logo/marvo-logo.png';
import mapImage from '../assets/background/map-background.png';
import blueBgImage from '../assets/background/BackgroundPage.png';
import illustration from '../assets/illustrations/signupIllustration.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = () => {
        let valid = true;
        setEmailError('');
        setPasswordError('');
        setFirstNameError('');
        setLastNameError('');
        setPhoneError('');

        if (!email) {
            setEmailError('Email is required.');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Enter a valid email address.');
            valid = false;
        }

        if (!password) {
            setPasswordError('Password is required.');
            valid = false;
        }
        if (!firstName) {
            setFirstNameError('FirstName is required.');
            valid = false;
        }
        if (!lastName) {
            setLastNameError('LastName is required.');
            valid = false;
        }
        if (!phone) {
            setPhoneError('Phone number is required.');
            valid = false;
        }
        if (!valid) return;


        navigate('/role', { state: { firstName } });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${blueBgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundImage: `url(${mapImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >

                <Box

                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 31, 92, 0.3)',
                        zIndex: 1,

                    }}

                />


                <Box
                    component="img"
                    src={logo}
                    alt="Marvo Logo"
                    sx={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        width: 150,
                        height: 37.5,
                        zIndex: 2,

                    }}
                />
                <motion.div

                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        mass: 0.5
                    }}
                    style={{ zIndex: 2, width: '100%', maxWidth: 900 }}

                >

                    <Box
                        sx={{
                            zIndex: 2,
                            width: '100%',
                            maxWidth: 900,
                            px: 2,
                            py: 4,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0
                        }}
                    >

                        <Box

                            sx={{
                                width: { xs: '40%', md: '40%' },
                                backgroundColor: '#fff',
                                borderRadius: { xs: '20px 20px 0 0', md: '20px 0 0 20px' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                py: { xs: 2, md: 0 },
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            <Box
                                component="img"
                                src={illustration}
                                alt="Illustration"

                                sx={{ width: '100%', maxWidth: 500 }}
                            />
                        </Box>

                        <Box
                            sx={{
                                width: { xs: '100%', md: '50%' },
                                backgroundColor: '#fff',
                                borderRadius: { xs: '20px 20px 20px 20px', md: '20px 20px 20px 20px' },
                                p: { xs: 3, sm: 4 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                boxShadow: 4
                            }}
                        >
                            <Typography
                                align="center"
                                sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: '#318CFF',
                                    mb: 2
                                }}
                            >
                                Signup
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: 26.87,
                                    color: '#414141',
                                    mb: 1
                                }}
                            >
                                Hello there,
                                <br />
                                <span
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: 30.23,
                                        color: '#1254DC',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Welcome to Marvo
                                </span>
                            </Typography>


                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', color: 'black' }}>
                                Email
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your email address"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!emailError}
                                helperText={emailError}
                                sx={{
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#318CFF'
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#318CFF'
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#318CFF'
                                    }
                                }}
                            />
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Inter, sans-serif', color: '#318CFF', mb: 1 }}>
                                (Hmm... we don't recognize that email address. Let's get you signed up!)
                            </Typography>


                            <Grid container spacing={2.6} sx={{ mb: 1 }}>
                                <Grid item xs={12} sm={6} sx={{ width: { xs: '100%', sm: 'auto' } }}>

                                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', color: 'black' }}>
                                        First Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="First Name"
                                        variant="standard"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        error={!!firstNameError}
                                        helperText={firstNameError}
                                        sx={{
                                            '& .MuiInput-underline:before': { borderBottomColor: '#318CFF' },
                                            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#318CFF' },
                                            '& .MuiInput-underline:after': { borderBottomColor: '#318CFF' }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ width: { xs: '100%', sm: 'auto' } }}>

                                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', color: 'black' }}>
                                        Last Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Last Name"
                                        variant="standard"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        error={!!lastNameError}
                                        helperText={lastNameError}
                                        sx={{
                                            '& .MuiInput-underline:before': { borderBottomColor: '#318CFF' },
                                            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#318CFF' },
                                            '& .MuiInput-underline:after': { borderBottomColor: '#318CFF' }
                                        }}
                                    />
                                </Grid>
                            </Grid>


                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', color: 'black' }}>
                                Phone Number
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your phone number"
                                variant="standard"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                error={!!phoneError}
                                helperText={phoneError}
                                sx={{
                                    mb: 1,
                                    '& .MuiInput-underline:before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:after': { borderBottomColor: '#318CFF' }
                                }}
                            />


                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', color: 'black' }}>
                                Password
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your password"
                                type={showPassword ? 'text' : 'password'}
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!passwordError}
                                helperText={passwordError}
                                sx={{
                                    mb: 2,
                                    '& .MuiInput-underline:before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:after': { borderBottomColor: '#318CFF' },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleTogglePassword} sx={{ width: '16.79px', height: '16.79px', ml: 1, padding: 0 }}>
                                            {showPassword ? <Visibility sx={{ color: 'black' }} /> : <VisibilityOff sx={{ color: '#318CFF' }} />}
                                        </IconButton>
                                    ),
                                }}
                            />

                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                sx={{
                                    backgroundColor: '#1A6DF6',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    alignSelf: 'flex-start',
                                    px: 4,
                                    mb: 2,
                                    '&:hover': {
                                        backgroundColor: '#174ea6'
                                    }
                                }}
                            >
                                NEXT
                            </Button>


                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mt: 1,
                                    gap: '12.6px'
                                }}
                            >
                                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', fontSize: 16, color: '#444' }}>
                                    Sign in with:
                                </Typography>
                                <IconButton sx={{ p: 0 }}>
                                    <GoogleIcon sx={{ width: 19.88, height: 20.28, color: '#1A6DF6' }} />
                                </IconButton>
                                <IconButton sx={{ p: 0 }}>
                                    <FacebookIcon sx={{ fontSize: '20.55px', color: '#1A6DF6' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </Box>

    );
};

export default SignupPage;
