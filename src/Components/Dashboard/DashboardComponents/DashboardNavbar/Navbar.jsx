import React, { useState } from 'react'
import { FormControl, Input, InputAdornment, OutlinedInput, Alert, Collapse, } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import useDashboardStore from '../../../../Store/useDashboardStore/useDashboardStore';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const { currentPageTitle, setSearchQuery, setCurrentPageTitle } = useDashboardStore();
    const [input, setInput] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();


    const routesMap = [
        { keywords: ['dashboard', 'admin', 'start','live'], route: '/dashboard', title: 'Dashboard' },
        { keywords: ['contact', 'support', 'help'], route: '/dashboard/contact', title: 'Contacts' },
        { keywords: ['report', 'reports', 'analytics'], route: '/dashboard/Reports', title: 'Reports' },
        { keywords: ['pipeline', 'sales pipeline', 'crm'], route: '/dashboard/Pipeline', title: 'Pipeline Builder' },
        { keywords: ['setting', 'settings', 'config'], route: '/dashboard/Settings', title: 'Settings' },
        { keywords: ['campaign', 'campaigns', 'ads'], route: '/dashboard/Campaigns', title: 'Campaigns' },
    ];


    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = input.toLowerCase().trim();

        setSearchQuery(keyword);

        const matched = routesMap.find(item =>
            item.keywords.some(k => keyword.includes(k))
        );

        if (matched) {
            setCurrentPageTitle(matched.title);
            navigate(matched.route);
        } else {
            setCurrentPageTitle('Search Results');
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    };

    return (

        <div className='flex flex-col justify-center w-full'>
            {/* 🔔 Alert Message */}
            <Collapse in={showAlert}>
                <Alert
                    severity="warning"
                    sx={{ mb: 2, fontSize: '14px', alignItems: 'center', zIndex: 1 }}
                >
                    No related section found for your search.
                </Alert>
            </Collapse>
            <div className='flex items-center justify-between gap-3 md:gap-0 lg:gap-0   '>
                <h3 className='text-1xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold lg:font-bold'>{currentPageTitle}</h3>
                <form noValidate autoComplete="off" onSubmit={handleSearch}>
                    <FormControl
                        sx={{
                            width: { xs: '17ch', sm: '25ch', md: '25ch', lg: '290px' },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
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
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Search"
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
