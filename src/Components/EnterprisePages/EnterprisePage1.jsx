import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import bgImage from '../../assets/background/backgroundRole.png';
import logo from '../../assets/logo/BlueLogo.png';
import plane from '../../assets/effects/plane.png';
import airSpiral from '../../assets/effects/air.png';
import dottedLine from '../../assets/Ways/Oneway.svg';
import sideIllustration from '../../assets/illustrations/www.svg';

import '../../App.css';

const EnterprisePage1 = ({goToNext}) => {
    const [goal1, setGoal1] = useState('');
    const [goal2, setGoal2] = useState('');
    const [goal3, setGoal3] = useState('');
    const [skipped, setSkipped] = useState(false);


    const handleSkip = () => {
        setSkipped(true);
        setTimeout(() => {
            setSkipped(false);
        }, 1000);
    };
    const goToNextStep = () => {
        goToNext();
    }
   

    return (

        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                position: 'relative',
                overflow: 'hidden',
                px: { xs: 2, sm: 4, md: 8 },
                py: { xs: 4, sm: 5, md: 6 },
                fontFamily: 'Inter, sans-serif'

            }}
        >

            <Box component="img" src={logo} alt="Logo" sx={{ position: 'absolute', top: 20, left: 20, width: { xs: 100, sm: 110, md: 120 }, zIndex: 10 }} />

            <Box sx={{ position: 'absolute', top: 60, left: 132, width: { xs: 50, sm: 60, md: 70 }, transform: 'rotate(0.1deg)', zIndex: 5 }}>
                <Box component="img" src={plane} width="100%" />
            </Box>
            <Box sx={{ position: 'absolute', top: 60, left: 40, width: { xs: 70, sm: 90, md: 102 }, height: 36.8, transform: 'rotate(10.31deg)', zIndex: 3 }}>
                <Box component="img" src={airSpiral} width="100%" />
            </Box>
            <Box sx={{ position: 'absolute', top: 43, left: 172, width: { xs: 80, sm: 90, md: 103 }, height: 124, zIndex: 6 }}>
                <Box component="img" src={dottedLine} width="100%" />
            </Box>

            {[{ num: 2, x: 350, y: 139 }, { num: 3, x: 571, y: 65 }, { num: 4, x: 758, y: 147 }, { num: 5, x: 926, y: 30 }, { num: 6, x: 1158, y: 147 }].map((step, i) => (
                <Box
                    key={i}
                    sx={{
                        position: 'absolute',
                        top: step.y,
                        left: step.x,
                        width: 35,
                        height: 35,
                        borderRadius: '50%',
                        backgroundColor: '#BBDFFF',
                        color: '#1A6DF6',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 16,
                        zIndex: 2,
                    }}
                >
                    {step.num}
                </Box>
            ))}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        mt: { xs: 10, sm: 14, md: 26 },
                    }}
                >

                    <Box
                        sx={{
                            width: { xs: '100%', md: 465 },
                            height: { xs: 'auto', md: 350 },
                            ml: { md: 18 },
                            mt: { xs: 4, md: 0 },
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold" color="#1254DC" mb={3}>
                            Company Name, Industry, and Website
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <TextField
                                label="Company Name"
                                variant="standard"
                                value={goal1}
                                onChange={(e) => setGoal1(e.target.value)}

                                sx={{
                                    mb: 2,
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                }}
                            />
                            <TextField
                                label="Industry of Your Business"
                                variant="standard"
                                value={goal2}
                                onChange={(e) => setGoal2(e.target.value)}

                                sx={{
                                    mb: 2,
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                }}
                            />
                            <TextField
                                label="Enter Your Website URL"
                                variant="standard"
                                value={goal3}
                                onChange={(e) => setGoal3(e.target.value)}

                                sx={{
                                    mb: 1,
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#318CFF', borderBottomWidth: '2px',
                                    },

                                }}
                            />
                        </Box>


                        <Box mt={2} display="flex" alignItems="center" gap={2}>
                            <Button
                                className={skipped ? 'glow-animation' : ''}
                                variant="contained"
                                onClick={goToNextStep}
                                sx={{
                                    backgroundColor: '#1A6DF6 !important',
                                    color: '#fff',
                                    px: 4,
                                    textTransform: 'none',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#0f52ba',
                                    },

                                }}
                            >
                                Next
                            </Button>

                            <Typography
                                onClick={handleSkip}

                                sx={{
                                    cursor: 'pointer',
                                    color: '#000',
                                    ml: { md: 4 },
                                }}
                            >
                                Skip
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Side Illustration */}
                    <Box
                        component="img"
                        src={sideIllustration}
                        alt="illustration"
                        sx={{
                            width: { xs: '100%', sm: '80%', md: 378 },
                            height: 'auto',
                            mx: 'auto',
                        }}
                    />
                </Box>
            </motion.div>

        </Box>

    );
};

export default EnterprisePage1;
