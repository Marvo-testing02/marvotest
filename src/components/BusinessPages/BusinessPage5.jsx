import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { motion } from 'framer-motion';
import bgImage from '../../assets/background/backgroundRole.png';
import logo from '../../assets/logo/BlueLogo.png';
import plane from '../../assets/effects/plane.png';
import dottedLine from '../../assets/Ways/FiveWay.svg';
import sideIllustration from '../../assets/illustrations/dataanalysis.svg';
import '../../App.css';

const BusinessPage5 = () => {
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
        navigate('/business/page6');
    };

    return (

        <Box
            sx={{
                minHeight: '88vh',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                position: 'relative',
                overflow: 'hidden',
                px: { xs: 2, md: 8 },
                py: { xs: 4, md: 6 },
                fontFamily: 'Inter, sans-serif'

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

            {[1, 2, 3, 4].map((num, i) => (
                <Box
                    key={num}
                    sx={{
                        position: 'absolute',
                        top: [85, 140, 60, 135][i],
                        left: [155, 350, 550, 758][i],
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
                    {num}
                </Box>
            ))}

            <Box
                sx={{
                    position: 'absolute',
                    top: 147,
                    left: 1158,
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
                6
            </Box>
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
                            Do you already have lead data?
                        </Typography>

                        <RadioGroup value={clientType} onChange={(e) => setClientType(e.target.value)}>
                            {['Yes - Upload CSV', 'No', 'Sync from CRM'].map((option, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={option}
                                    control={<Radio sx={{ color: '#1A6DF6' }} />}
                                    label={
                                        <Typography
                                            className={skipped && clientType === '' ? 'glow-animation' : ''}
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

                        {error && clientType === '' && (
                            <Typography sx={{ color: 'red', fontSize: 14, mt: 1 }}>
                                Please select an option to proceed.
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

export default BusinessPage5;
