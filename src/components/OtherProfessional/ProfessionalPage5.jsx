import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { motion } from 'framer-motion';
import bgImage from '../../assets/background/backgroundRole.png';
import logo from '../../assets/logo/BlueLogo.png';
import plane from '../../assets/effects/plane.png';
import dottedLine from '../../assets/Ways/FiveWay.svg';
import '../../App.css';

const ProfessionalPage5 = () => {
    const [clientType, setClientType] = useState('');
    const [skipped, setSkipped] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSkip = () => {
        setSkipped(true);
        setTimeout(() => {
            setSkipped(false);
        }, 1000);
    };

    const goToNextStep = () => {
        if (!clientType) {
            setError(true);
            return;
        }
        setError(false);
        navigate('/otherprofessional/page6');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            <Box
                sx={{
                    minHeight: '88vh',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    position: 'relative',
                    overflow: 'hidden',
                    px: { xs: 2, md: 8 },
                    py: { xs: 4, md: 6 },
                }}
            >
                <Box component="img" src={logo} alt="Logo" sx={{ position: 'absolute', top: 20, left: 20, width: 120, zIndex: 10 }} />
                <Box sx={{ position: 'absolute', top: 43, left: 172, width: 790, height: 124, zIndex: 5 }}>
                    <Box component="img" src={dottedLine} width="100%" />
                </Box>
                <Box sx={{ position: 'absolute', top: 12, left: 882, width: 70, height: 76, transform: 'rotate(-19.66deg)', zIndex: 6 }}>
                    <Box component="img" src={plane} width="100%" />
                </Box>
                <Box sx={{ position: 'absolute', top: 110, left: 720, width: 40, height: 20, backgroundColor: 'white', zIndex: 5 }} />

                <Box sx={{ position: 'absolute', top: 85, left: 155, width: 35, height: 35, borderRadius: '50%', backgroundColor: '#57AFFF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 16, zIndex: 7 }}>
                    1
                </Box>
                <Box sx={{ position: 'absolute', top: 140, left: 350, width: 35, height: 35, borderRadius: '50%', backgroundColor: '#57AFFF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 16, zIndex: 7 }}>
                    2
                </Box>
                <Box sx={{ position: 'absolute', top: 60, left: 550, width: 35, height: 35, borderRadius: '50%', backgroundColor: '#57AFFF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 16, zIndex: 7 }}>
                    3
                </Box>
                <Box sx={{ position: 'absolute', top: 135, left: 758, width: 35, height: 35, borderRadius: '50%', backgroundColor: '#57AFFF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 16, zIndex: 7 }}>
                    4
                </Box>
                {[{ num: 6, x: 1158, y: 147 }].map((step, i) => (
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
                            What is the biggest challenge you're facing in your business right now?
                        </Typography>

                        <RadioGroup value={clientType} onChange={(e) => setClientType(e.target.value)}>
                            {[
                                'Struggling to get clients or customers',
                                'No proper online presence',
                                'Branding and design issues',
                                'Lack of marketing knowledge',
                                'No website or automation setup'
                            ].map((option, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={option}
                                    control={<Radio sx={{ color: '#1A6DF6' }} />}
                                    label={
                                        <Typography
                                            className={skipped && clientType !== option ? 'glow-animation' : ''}
                                            sx={{
                                                fontWeight: 'bold',
                                                color: '#2B2B2B',
                                                fontSize: 18,
                                                px: 2,
                                                py: 1,
                                                borderRadius: 0,
                                                border: skipped && clientType !== option ? '2px solid #31D6FF' : 'none',
                                                backgroundColor: skipped && clientType !== option ? 'rgba(49, 214, 255, 0.2)' : 'transparent',
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
                                    '&:hover': { backgroundColor: '#0f52ba' },
                                }}
                            >
                                Next
                            </Button>
                            <Typography onClick={handleSkip} sx={{ cursor: 'pointer', color: '#000', ml: { md: 4 } }}>
                                Skip
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProfessionalPage5;
