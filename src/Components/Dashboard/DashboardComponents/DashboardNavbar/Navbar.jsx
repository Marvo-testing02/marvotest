import React from 'react'
import { FormControl, Input, InputAdornment, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import useDashboardStore from '../../../../Store/useDashboardStore/useDashboardStore';
function Navbar() {
    const { currentPageTitle } = useDashboardStore();
    return (
        <div className='flex flex-col justify-center w-full'>
            <div className='flex items-center justify-between gap-3 md:gap-0 lg:gap-0   '>
                <h3 className='text-1xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold lg:font-bold'>{currentPageTitle}</h3>
                <form noValidate autoComplete="off">
                    <FormControl
                        sx={{
                            width: { xs: '17ch', sm: '25ch', md: '25ch', lg: '290px' },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                                fontFamily: 'Roboto',
                                fontWeight: 400,
                                fontStyle: 'normal',
                                background: 'white',
                                fontSize: '16px',
                                lineHeight: '140%',
                                letterSpacing: '0%',
                                height: { xs: '40px', sm: '40px', md: '48px', lg: '48px' },
                                color: '#697077',
                                '& fieldset': {
                                    borderColor: '#1A6DF6',
                                    border: '2px solid #1A6DF6'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#1A6DF6',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1A6DF6',
                                },
                            },
                        }}
                    >
                        <OutlinedInput

                            placeholder="Please enter text"
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon sx={{ color: '#1A6DF6', fontSize: { sm: '20px', md: '20px', lg: '30px' } }} />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </form>
            </div>
        </div>
    )
}

export default Navbar
