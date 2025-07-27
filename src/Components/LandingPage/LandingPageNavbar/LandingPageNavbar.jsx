import React, { useState } from 'react'
import logo from "../../../assets/logo.png"
import { Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, Divider, Collapse, useMediaQuery, Card, CardContent } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import { dropdownData } from '../LandingPageData'
import EastIcon from '@mui/icons-material/East';
function LandingPageNavbar() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [menuType, setMenuType] = useState('')
    const [drawerOpen, setDrawerOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width:768px)');
    const handleClick = (event, type) => {
        setAnchorEl(event.currentTarget)
        setMenuType(type)
    }

    const handleClose = () => {
        setAnchorEl(null)

    }

    const toggleDrawer = (open) => {
        setDrawerOpen(open)
    }

    const menuItems = ['Products', 'Solutions', 'Why Marvo?', 'Resources']

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
                paddingRight: !isMobile ? "8rem" : "1.4rem",
                paddingLeft: !isMobile ? "8rem" : "1.4rem",
            }}
            className='w-full space-x-8 flex justify-center fixed'>
            <div
                style={{
                    marginTop: '1.5rem',
                    boxShadow: `
      0px 4px 9px 0px #0330771A,
      0px 16px 16px 0px #03307717,
      0px 36px 22px 0px #0330770D,
      0px 64px 26px 0px #03307703,
      0px 101px 28px 0px #03307700
    ` }}
                className='w-full max-w-[1920px] bg-white flex items-center justify-between rounded-xl h-[72px]  px-4 sm:px-6 lg:px-8  '
            >
                {/* Logo */}
                <div>
                    <img src={logo} alt="MARVO" className=" h-auto w-20 md:h-auto md:w-40 lg:h-auto lg:w-40    " />
                </div>

                {/* Navigation Links (hide below 1133px) */}
                <div className="hidden xl:flex gap-0 2xl:gap-10 text-sm font-medium text-dark w-full justify-center">
                    {menuItems.map((item) => {
                        const isActive = menuType === item
                        return (
                            <div key={item}>
                                <Button
                                    disableRipple
                                    disableElevation
                                    onClick={(e) => handleClick(e, item)}
                                    style={{
                                        textTransform: 'none',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        color: isActive ? '#2563EB' : '#374151',
                                        backgroundColor: 'transparent',
                                    }}
                                    sx={{
                                        backgroundColor: 'transparent !important',
                                        '&:hover': {
                                            backgroundColor: 'transparent !important',
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: 'transparent !important',
                                        },
                                        '&.Mui-selected': {
                                            backgroundColor: 'transparent !important',
                                        },
                                        '&:active': {
                                            backgroundColor: 'transparent !important',
                                        },
                                    }}
                                >
                                    {item}
                                    <ExpandMoreIcon
                                        sx={{
                                            ml: '1px',
                                            color: isActive ? '#2563EB' : '#000',
                                            transition: 'color 0.3s',
                                        }}
                                    />
                                </Button>

                            </div>
                        )
                    })}
                </div>

                {/* Hamburger Menu (show below 1133px) */}
                <div className="xl:hidden">
                    <IconButton onClick={() => toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </div>

                {/* Right Buttons (Get Demo / Start Free) */}
                <div className="hidden xl:flex gap-5">
                    {/* Get a DEMO Button with hover effect */}
                    <button
                        className="group  gap-1 relative flex  items-center justify-center border border-blue-600 text-blue-600 h-10 rounded-lg text-md font-medium overflow-hidden transition-all duration-300 ease-in-out w-[116px] hover:w-[156px]"
                    >
                        <span style={{ marginRight: '0px' }} className="z-10 ">Get a DEMO</span>

                        {/* Icon that fades & slides in */}
                        <span className="absolute right-2 flex items-center  opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out text-sm z-0 ">
                            <EastIcon sx={{ fontSize: 30, paddingLeft: '8px' }} />
                        </span>
                    </button>

                    {/* Start Free Button */}
                    <button
                        style={{ width: '116px' }}
                        className="bg-[#1A6DF6] text-white h-10 rounded-lg text-md font-medium hover:bg-blue-700 transition px-3"
                    >
                        Start free
                    </button>
                </div>

            </div>

            {/* Drawer for mobile nav */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                <div style={{ padding: '20px' }} className="w-64 flex flex-col h-full p-4">
                    <div className="flex justify-between items-center mb-4">

                        <IconButton onClick={() => toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List >
                        {menuItems.map((item) => (
                            <ListItem className='flex flex-col justify-center' button key={item}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                    <div className="mt-auto flex flex-col gap-3">
                        <button className="w-full border  border-blue-600 text-blue-600 h-10 rounded-lg font-medium hover:bg-blue-50 transition">
                            Get a DEMO
                        </button>
                        <button className="w-full bg-[#1A6DF6] text-white h-10 rounded-lg font-medium hover:bg-blue-700 transition">
                            Start free
                        </button>
                    </div>
                </div>
            </Drawer>

            {/* Dropdown Menu (desktop) */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{
                    mt: 1,
                    pointerEvents: 'auto',
                    zIndex: 1300,
                }}
                PaperProps={{
                    sx: {
                        overflow: 'visible',
                        mt: 4.5,
                        borderRadius: 2,
                        width: '50%',

                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: "50%",
                            width: 20,
                            height: 20,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            boxShadow: '-1px -1px 1px rgba(0,0,0,0.05)',
                        },
                    },
                }}
            >


                <div style={{ padding: '25px', }} className="grid grid-cols-2 gap-2">
                    {dropdownData[menuType]?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                handleClose();
                                item.onClick();
                            }}
                            style={{
                                padding: '20px'
                            }}
                            className="flex items-center gap-5  hover:bg-blue-50 rounded-lg cursor-pointer transition "
                        >
                            {/* Icon */}
                            <img src={item.icon} alt="" className="w-10 h-10" />

                            {/* Text Content */}
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">{item.title}</div>
                                <div
                                    className="text-[#353535] text-sm normal-case">{item.description}</div>
                            </div>

                            {/* Arrow Icon */}
                            <div className="text-blue-600 text-right w-20">
                                <EastIcon />
                            </div>
                        </div>
                    ))}
                </div>



            </Menu>

        </motion.div>
    )
}

export default LandingPageNavbar
