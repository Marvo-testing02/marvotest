import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo/marvo-logo.png';
import mapImage from '../assets/background/map-background.png';
import blueBgImage from '../assets/background/BackgroundPage.png';


import freelancerIcon from '../assets/roles/freelancer.svg';
import smallBusinessIcon from '../assets/roles/business.svg';
import enterpriseIcon from '../assets/roles/enterprise.svg';
import professionalIcon from '../assets/roles/other.svg';

const RoleSelectionPage = () => {
    const location = useLocation();
    const firstName = location?.state?.firstName || 'there';
    const [selectedRole, setSelectedRole] = React.useState(null);
    const navigate = useNavigate();

    const roles = [
        { label: 'Freelancer', image: freelancerIcon },
        { label: 'Small Business Marketing', image: smallBusinessIcon },
        { label: 'Enterprise Marketing Leader', image: enterpriseIcon },
        { label: 'Other Professional Role', image: professionalIcon }
    ];

    const handleContinue = () => {
        if (!selectedRole) return;

        switch (selectedRole) {
            case 'Freelancer':
                navigate('/freelancer/page/1');
                break;
            case 'Small Business Marketing':
                navigate('/business/page/1');
                break;
            case 'Enterprise Marketing Leader':
                navigate('/enterprise/page/1');
                break;
            case 'Other Professional Role':
                navigate('/otherprofessional/page/1');
                break;
            default:
                break;
        }

    };

    return (
        <div

            style={{ fontFamily: 'Inter, sans-serif' }}
            className='w-full '

        >
            <Box
                sx={{
                    minHeight: '100vh',
                    backgroundImage: `url(${blueBgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className=' flex flex-col '
            >
                <Box
                    sx={{
                        minHeight: '100vh',
                        backgroundImage: `url(${mapImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: "column",
                        position: 'relative',

                        px: { xs: 2, sm: 3, md: 4 },
                    }}

                >

                    <Box
                        sx={{
                            mt: '20px',
                            mb: '20px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'start',
                        }}
                    >
                        <img src={logo} alt="logo" width={120} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '100%', md: 1000, lg: 1300 },
                                height: { xs: 'auto', md: 600 },
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: 3,
                                zIndex: 3,
                                backgroundColor: '#fff',
                                marginBottom: '20px'
                            }}
                        >

                            <Box
                                sx={{
                                    height: { xs: 'auto', md: 116 },
                                    backgroundColor: '#EEF7FF',
                                    px: { xs: 3, sm: 4, md: 8 },
                                    py: { xs: 2, md: 0 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    fontWeight="bold"
                                    sx={{ fontSize: { xs: 24, sm: 28, md: 30 }, color: '#000' }}
                                >
                                    Hi {firstName}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: { xs: 18, sm: 20, md: 24 }, color: '#333' }}
                                >
                                    Tell us a little about yourself so we can create a better experience for you.
                                </Typography>
                            </Box>


                            <Box
                                sx={{
                                    height: { md: 384 },
                                    px: { xs: 3, sm: 4, md: 8 },
                                    py: { xs: 3, md: 4 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                }}
                            >

                                <Typography
                                    fontWeight="bold"
                                    sx={{
                                        fontSize: { xs: 18, sm: 20, md: 24 },
                                        color: '#333',
                                        mb: { xs: 2, md: 1 },
                                    }}
                                >
                                    What is your current professional role?
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        gap: 3,
                                        mb: 3,
                                    }}
                                >
                                    {roles.map((role, index) => (

                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.2, // Staggered animation
                                                type: 'spring',
                                                stiffness: 60,
                                            }}
                                        >
                                            <Box
                                                key={index}
                                                onClick={() => setSelectedRole(role.label)}
                                                sx={{
                                                    textAlign: 'center',
                                                    cursor: 'pointer',
                                                    border: selectedRole === role.label
                                                        ? '2px solid #1A6DF6'
                                                        : '2px solid transparent',
                                                    borderRadius: '10px',

                                                    transition: '0.3s',
                                                    px: 2,
                                                    py: 1,
                                                    '&:hover': {
                                                        transform: 'scale(1.05)',

                                                    },
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={role.image}
                                                    alt={role.label}
                                                    sx={{
                                                        width: { xs: 140, sm: 160, md: 190 },
                                                        height: { xs: 160, sm: 190, md: 222 },
                                                        objectFit: 'contain',
                                                        display: 'block',
                                                        mx: 'auto',           // Center horizontally
                                                        objectPosition: 'bottom' // Ensure it's centered within the box
                                                    }}
                                                    mb={4}
                                                />
                                                <Typography sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, mt: 1 }}>
                                                    {role.label}
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Box>


                                <Button
                                    variant="contained"
                                    onClick={handleContinue}
                                    disabled={!selectedRole}
                                    sx={{
                                        backgroundColor: '#1A6DF6',
                                        color: '#ffffff',
                                        width: { xs: '100%', sm: 400, md: 600, lg: 940 },
                                        height: 45,
                                        alignSelf: 'center',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                        fontSize: { xs: 18, sm: 20, md: 24 },
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#1A6DF6',
                                            border: '1px solid #1A6DF6',
                                            color: '#ffffff',
                                        },
                                        '&.Mui-disabled': {
                                            backgroundColor: '#A0A0A0',
                                            color: '#ffffff',
                                        },
                                    }}
                                >
                                    Save And Continue
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default RoleSelectionPage;
