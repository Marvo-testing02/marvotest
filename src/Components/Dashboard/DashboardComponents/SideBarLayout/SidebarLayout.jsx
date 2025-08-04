import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    CssBaseline,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer as MuiDrawer,
    Tooltip,
    useMediaQuery,

} from '@mui/material';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../../../../assets/logo/BlueLogo.png"
import Robo from "../../../../assets/Dashboardimg/Robo.png"
import useDashboardStore from '../../../../Store/useDashboardStore/useDashboardStore';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

const drawerWidth = 272;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': {
            ...openedMixin(theme),
            height: '100%',
        },
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': {
            ...closedMixin(theme),
            height: '100%',
        },
    }),
    boxShadow: `1px 0px 1px 0px #0000001A,
                2px 0px 2px 0px #00000017,
                5px 0px 3px 0px #0000000D,
                9px 0px 4px 0px #00000003,
                15px 0px 4px 0px #00000000`,
}));


const drawerItems = [
    { text: 'Dashboard', route: '/dashboard', icon: <SpaceDashboardOutlinedIcon />, tooltip: 'Overview of KPIs' },
    { text: 'Contacts', route: '/dashboard/contact', icon: <PeopleAltOutlinedIcon />, tooltip: 'List, import, and segmentation of leads' },
    { text: 'Campaigns', route: '/dashboard/Campaigns', icon: <SendOutlinedIcon />, tooltip: 'Create and track email/SMS/social campaigns' },
    { text: 'Pipeline Builder', route: '/dashboard/Pipeline', icon: <FilterAltOutlinedIcon />, tooltip: 'Visual funnel creation with drag & drop' },
    { text: 'Reports', route: '/dashboard/Reports', icon: <AirplayOutlinedIcon />, tooltip: 'Advanced performance and ROI analysis' },
    { text: 'Settings', route: '/dashboard/Settings', icon: <SettingsSuggestOutlinedIcon />, tooltip: 'CRM configuration, team roles, integrations' },
];


export default function SidebarLayout({ children }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { setCurrentPageTitle } = useDashboardStore();
    const [open, setOpen] = React.useState(false);
    const timeoutRef = React.useRef(null);
    const location = useLocation();
    const handleMouseEnter = () => {
        if (!isSmallScreen) {
            clearTimeout(timeoutRef.current);
            setOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isSmallScreen) {
            timeoutRef.current = setTimeout(() => {
                setOpen(false);
            }, 1000); // 3 seconds
        }
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                open={open}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ zIndex: 1 }}
            >
                <DrawerHeader sx={{ px: 2, mb: 0 }}>
                    {open ? <>   <img src={logo} alt="MARVO" /></> : <>   <img src={Robo} alt="MARVO" /></>}
                </DrawerHeader>


                <List>
                    {drawerItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ px: 1.5, py: 0.3 }}>
                            <Tooltip
                                title={item.tooltip}
                                placement="right"
                                PopperProps={{
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 20],
                                            },
                                        },
                                    ],
                                }}
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            bgcolor: '#888888',
                                            color: 'white',
                                            fontSize: 13,
                                            px: 1.5,
                                            py: 1.5,
                                            borderRadius: '8px',
                                        },
                                    },
                                }}
                            >

                                <ListItemButton
                                    onClick={() => {
                                        setCurrentPageTitle(item.text)
                                        navigate(item.route);
                                    }}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        borderRadius: '12px',
                                        backgroundColor: location.pathname === item.route ? '#D9ECFF' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: '#D9ECFF',
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: 'black'
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Tooltip>
                        </ListItem>
                    ))}

                </List>

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                    <Box sx={{ px: 2, mb: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                display: 'flex',
                                justifyContent: "center",
                                gap: "10px",
                                backgroundColor: !open ? "transparent" : "#0D80F2",
                                color: 'white',
                                textTransform: 'none',
                                borderRadius: '8px',
                                py: 1,
                                fontWeight: 500,

                                fontSize: '14px',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#0056b3',
                                },
                            }}
                        >
                            {!open && <CampaignOutlinedIcon sx={{ color: open ? "white" : "black" }} />}
                            {open && (
                                <span style={{ fontSize: '14px', fontWeight: 500 }}>Start Campaign</span>
                            )}
                        </Button>
                    </Box>

                    {/* Notifications Text */}
                    <Box sx={{ px: 2, pb: 3, display: 'flex', alignItems: 'center', cursor: 'pointer', width: '85%' }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1827/1827349.png"
                            alt="Notifications"
                            width={20}
                            height={20}
                            style={{ marginRight: open ? 10 : 0 }}
                        />
                        {open && (
                            <span style={{ fontSize: '14px', fontWeight: 500 }}>Notifications</span>
                        )}
                    </Box>
                </Box>
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    px: { xs: 2, sm: 2, md: 2, lg: 6 },
                    py: 2, // Padding on Y
                    bgcolor: '#F2F9FF',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                }}
            >
                {children}
            </Box>

        </Box>
    );
}
