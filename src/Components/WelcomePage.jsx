import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import logo from '../assets/logo/marvo-logo.png';
import blueBgImage from '../assets/background/BackgroundPage.png';
import mapImage from '../assets/background/map-background.png';
import illustration from '../assets/illustrations/welcomeIllustration.png';

const WelcomePage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) {
      setEmailError('Email is required.');
      return;
    }
    setEmailError('');
    navigate('/login');
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
            zIndex: 1
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
            zIndex: 2
          }}
        />

  
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
              height: 'auto',
              backgroundColor: '#fff',
              borderRadius: { xs: '20px 20px 0 0', md: '20px 0 0 20px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              py: { xs: 2, md: 0 }
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
              variant="h6"
              align="center"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'bold',
                color: '#318CFF',
                mb: 2
              }}
            >
              Login / Sign up
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: 22, sm: 26.87 },
                color: '#414141',
                mb: 1
              }}
            >
              Hello there, <br />
              <span
                style={{
                  fontSize: 30.23,
                  color: '#1254DC',
                  fontWeight: 'bold'
                }}
              >
                Welcome to Marvo
              </span>
            </Typography>

            <Typography sx={{ fontSize: 16, color: '#444', mb: 2 }}>
              Flexibly log in with any email. If you have an account, sign in!
              If not, we’ll help you sign up.
            </Typography>

            <Typography
              sx={{
                fontWeight: 'bold',
                fontFamily: 'Inter, sans-serif',
                color: '#000'
              }}
            >
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
                mb: 3,
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

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: '#1A6DF6',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                alignSelf: 'flex-start',
                px: 4,
                mb: 3,
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
                gap: 2
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: '#444'
                }}
              >
                Sign in with:
              </Typography>

              <IconButton sx={{ p: 0 }}>
                <GoogleIcon
                  sx={{ width: 19.88, height: 20.28, color: '#1A6DF6' }}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <FacebookIcon
                  sx={{ fontSize: '20.55px', color: '#1A6DF6' }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomePage;
