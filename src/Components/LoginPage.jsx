import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import logo from '../assets/logo/marvo-logo.png';
import blueBgImage from '../assets/background/BackgroundPage.png';
import mapImage from '../assets/background/map-background.png';
import illustration from '../assets/illustrations/loginIllustration.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const nameFromEmail = email.split('@')[0];
    const displayName = nameFromEmail
        ? `Hello ${nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1)}`
        : 'Hello there';

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = () => {
        let valid = true;
        setEmailError('');
        setPasswordError('');

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

        if (!valid) return;

        navigate('/signup', { state: { email } });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${blueBgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
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
                    justifyContent: 'center',
                    pr: { xs: 2, md: 6 },
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
                        stiffness: 200,
                        damping: 15,
                        mass: 0.5
                    }}
                    style={{ zIndex: 2, width: '100%', maxWidth: 900 }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0,
                            px: 2,
                            py: 4,
                        }}
                    >
                        {/* Illustration */}
                        <Box
                            sx={{
                                width: { xs: '40%', md: '40%' },
                                backgroundColor: '#fff',
                                borderRadius: { xs: '20px 20px 0 0', md: '20px 0 0 20px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                py: { xs: 2, md: 0 },
                            }}
                        >
                            <Box
                                component="img"
                                src={illustration}
                                alt="Illustration"
                                sx={{ width: '100%', maxWidth: 500 }}
                            />
                        </Box>

                        {/* Login Form */}
                        <Box
                            sx={{
                                width: { xs: '100%', md: '50%' },
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                p: { xs: 3, sm: 4 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                boxShadow: 4,
                            }}
                        >
                            <Typography align="center" sx={{ fontFamily: 'Inter, sans-serif', fontSize: 20, fontWeight: 'bold', color: '#318CFF', mb: 2 }}>
                                Login
                            </Typography>

                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: 26.87, color: '#414141', mb: 1 }}>
                                {displayName}
                                <br />
                                <span style={{ fontSize: 30.23, color: '#1254DC', fontWeight: 'bold' }}>
                                    Welcome Back to Marvo
                                </span>
                            </Typography>

                            <Typography sx={{ fontSize: 16, color: '#444', mb: 2 }}>
                                Let's sign you in.
                            </Typography>

                            {/* Email */}
                            <Typography fontWeight="bold" color="black">Email</Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your email address"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!emailError}
                                helperText={emailError}
                                sx={{
                                    mb: 3,
                                    '& .MuiInput-underline:before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:hover:before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:after': { borderBottomColor: '#318CFF' },
                                }}
                            />

                            {/* Password */}
                            <Typography fontWeight="bold" color="black">Password</Typography>
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
                                    mb: 3,
                                    '& .MuiInput-underline:before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:hover:before': { borderBottomColor: '#318CFF' },
                                    '& .MuiInput-underline:after': { borderBottomColor: '#318CFF' },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleTogglePassword} sx={{ ml: 1, p: 0 }}>
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
                                    fontWeight: 600,
                                    alignSelf: 'flex-start',
                                    px: 4,
                                    mb: 3,
                                    '&:hover': { backgroundColor: '#174ea6' },
                                }}
                            >
                                NEXT
                            </Button>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12.6px' }}>
                                <Typography fontWeight="bold" fontSize={16} color="#444">
                                    Sign in with:
                                </Typography>
                                <IconButton sx={{ p: 0 }}>
                                    <GoogleIcon sx={{ fontSize: 20, color: '#1A6DF6' }} />
                                </IconButton>
                                <IconButton sx={{ p: 0 }}>
                                    <FacebookIcon sx={{ fontSize: 20, color: '#1A6DF6' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};

export default LoginPage;
