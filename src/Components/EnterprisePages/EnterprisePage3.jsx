import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import bgImage from '../../assets/background/backgroundRole.png';
import logo from '../../assets/logo/BlueLogo.png';
import plane from '../../assets/effects/plane.png';
import dottedLine from '../../assets/Ways/ThreeWay.svg';
import sideIllustration from '../../assets/illustrations/invite.svg';
import '../../App.css';

const EnterprisePage3 = ({goToNext}) => {
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

            <Box component="img" src={logo} alt="Logo" sx={{ position: 'absolute', top: 20, left: 20, width: 120, zIndex: 10 }} />

            <Box sx={{ position: 'absolute', top: 43, left: 172, width: 485, height: 124, zIndex: 5 }}>
                <Box component="img" src={dottedLine} width="100%" />
            </Box>

            <motion.div
                initial={{ top: 95.99, left: 370 }}
                animate={{ top: 45, left: 528.18 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'absolute',
                    width: 70,
                    height: 76,
                    transform: 'rotate(-30.53deg)',
                    zIndex: 6,
                }}
            >
                <img src={plane} alt="plane" width="100%" />
            </motion.div>

            <Box
                sx={{
                    position: 'absolute',
                    top: 92,
                    left: 172,
                    width: 35,
                    height: 35,
                    borderRadius: '50%',
                    backgroundColor: '#57AFFF',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 16,
                    zIndex: 7,
                }}
            >
                1
            </Box>


            <Box
                sx={{
                    position: 'absolute',
                    top: 139,
                    left: 350,
                    width: 35,
                    height: 35,
                    borderRadius: '50%',
                    backgroundColor: '#57AFFF',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: 16,
                    zIndex: 7,
                }}
            >
                2
            </Box>


            {[{ num: 4, x: 758, y: 147 }, { num: 5, x: 926, y: 30 }, { num: 6, x: 1158, y: 147 }].map((step, i) => (
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
                        display: 'flex',
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
                        justifyContent: 'flex-start',
                        position: 'relative',
                        mt: 26,
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
                        <Typography variant="h4" fontWeight="bold" color="#1254DC" mb={3} >
                            Which team members should we invite?
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <TextField
                                label="Enter 1st Email Id"
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
                                label="Enter 2nd Email Id"
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
                                label="Enter 3rd Email Id"
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
                            <Typography onClick={handleSkip} sx={{ cursor: 'pointer', color: '#000', ml: { md: 4 } }}>
                                Skip
                            </Typography>
                        </Box>
                    </Box>


                    <Box
                        component="img"
                        src={sideIllustration}
                        alt="illustration"
                        sx={{
                            width: { xs: '100%', md: 377.98 },
                            height: { xs: 'auto', md: 347.29 },
                            mt: { xs: 8, md: 2 },
                            mr: { md: 12 },
                            ml: { md: 14 },
                        }}
                    />
                </Box>
            </motion.div>
        </Box>

    );
};

export default EnterprisePage3;
