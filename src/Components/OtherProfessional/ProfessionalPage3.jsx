import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { motion } from 'framer-motion';
import bgImage from '../../assets/background/backgroundRole.png';
import logo from '../../assets/logo/BlueLogo.png';
import plane from '../../assets/effects/plane.png';
import dottedLine from '../../assets/Ways/ThreeWay.svg';
import sideIllustration from '../../assets/illustrations/onlinetechtalks.svg';
import '../../App.css';

const ProfessionalPage3 = ({goToNext}) => {
    const [goal, setGoal] = useState('');
    const [skipped, setSkipped] = useState(false);
    const [error, setError] = useState(false);

    const handleSkip = () => {
        setSkipped(true);
        setTimeout(() => {
            setSkipped(false);
        }, 1000);
    };

    const goToNextStep = () => {
        if (!goal) {
            setError(true);
            return;
        }
        setError(false);
        goToNext();
 
    };

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
                        <Typography variant="h4" fontWeight="bold" color="#1254DC" mb={3}>
                            What is your primary offering?
                        </Typography>
                        <RadioGroup value={goal} onChange={(e) => { setGoal(e.target.value); setError(false); }}>
                            {['Services (Consulting, Coaching, etc.)', 'Physical Products', 'Digital Products (Courses, Software, Templates, etc.)', 'Social or Community Support', 'Other'].map((option, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={option}
                                    control={<Radio sx={{ color: '#1A6DF6' }} />}
                                    label={
                                        <Typography
                                            className={skipped && goal !== option ? 'glow-animation' : ''}
                                            sx={{
                                                fontWeight: 'bold',
                                                color: '#2B2B2B',
                                                fontSize: 18,
                                                px: 2,
                                                py: 1,
                                                borderRadius: 0,
                                                border: skipped && goal !== option ? '2px solid #6dc4daff' : 'none',
                                                backgroundColor: skipped && goal !== option ? 'rgba(49, 214, 255, 0.2)' : 'transparent',
                                            }}
                                        >
                                            {option}
                                        </Typography>
                                    }
                                />
                            ))}
                        </RadioGroup>

                        {error && (
                            <Typography sx={{ color: 'red', mt: 1 }}>
                                Please select an option before proceeding.
                            </Typography>
                        )}

                        <Box mt={2} display="flex" alignItems="center" gap={2}>
                            <Button
                                variant="contained"
                                onClick={goToNextStep}
                                sx={{
                                    backgroundColor: '#1A6DF6',
                                    color: '#fff',
                                    px: 4,
                                    textTransform: 'none',
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

export default ProfessionalPage3;
