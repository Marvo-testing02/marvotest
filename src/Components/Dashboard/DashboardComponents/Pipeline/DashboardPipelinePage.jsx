import React, { useState } from 'react';
import {
    Box,
    Typography,
    Chip,
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

const tabs = ["All", "Linked", "Drafts", "Templates"];

const PipelineCards = ({ selectedTab }) => {
    const allCards = [
        { title: "Lead Magnet WhatsApp Flow", type: "WhatsApp", tab: "Linked", value: 6 },
        { title: "Onboarding Email Sequence", type: "Email", tab: "Drafts", value: 4 },
        { title: "Customer Feedback SMS Flow", type: "SMS", tab: "Templates", value: undefined },
    ];

    const filteredCards = selectedTab === "All"
        ? allCards
        : allCards.filter((card) => card.tab === selectedTab);

    const maxValue = Math.max(...allCards.map(card => card.value || 0));
    const maxBarHeight = 200;
    const minBarHeight = 40;

    return (
        <Box sx={{ px: 0, pt: 3, fontFamily: "Inter, sans-serif", }}>
            <Typography sx={{ mt: 2 }} variant="h3" fontWeight="bold" fontSize={30} color="#0D141C" mb={4}>
                {selectedTab} Pipelines
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    gap: 4,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    height: maxBarHeight + 50,
                }}
            >
                {filteredCards.map((card, i) => {
                    const value = card.value ?? 0;
                    const scaledHeight = value
                        ? Math.max((value / maxValue) * maxBarHeight, minBarHeight)
                        : minBarHeight;

                    return (
                        <Box
                            key={i}
                            sx={{ width: "100%", display: 'flex', flexDirection: 'column', }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: `${scaledHeight}px`,
                                    backgroundColor: '#BBDFFF',
                                    borderRadius: 2,
                                    transition: '0.3s',
                                }}
                            />
                            <Typography
                                fontWeight={600}
                                fontSize={15}
                                color="#0D141C"
                                mt={2}
                                textAlign="start"
                            >
                                {card.title}
                            </Typography>
                            <Typography
                                fontSize={14}
                                color="#6B7280"
                                textAlign="start"
                                mt={1}
                            >
                                {card.type}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

const PipelineTable = ({ selectedTab }) => {
    const allRows = [
        {
            name: "Lead Magnet WhatsApp Flow",
            type: "WhatsApp",
            steps: "6 Steps",
            campaign: "Fitness Blast July 24",
            status: "Linked"
        },
        {
            name: "Onboarding Email Sequence",
            type: "Email",
            steps: "4 Steps",
            campaign: "Welcome New Users",
            status: "Drafts"
        },
        {
            name: "Customer Feedback SMS Flow",
            type: "SMS",
            steps: "3 Steps",
            campaign: "Post-Purchase Survey",
            status: "Templates"
        }
    ];

    const filteredRows = selectedTab === "All" ? allRows : allRows.filter(r => r.status === selectedTab);

    return (
        <Box sx={{ px: 0, mt: 4, fontFamily: "Inter, sans-serif" }}>
            <TableContainer component={Paper} sx={{ border: "1px solid #E5E7EB", borderRadius: 2, boxShadow: "none", width: "100%" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {["Name", "Type", "Total Steps", "Linked Campaign", "Status", "Actions"].map((header) => (
                                <TableCell
                                    key={header}
                                    sx={{
                                        fontWeight: 600,
                                        color: header === "Actions" ? "#5C758A" : "#121417",
                                        borderRight: "1px solid #E5E7EB",
                                        borderBottom: "1px solid #E5E7EB",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.map((row, i) => (
                            <TableRow key={i} sx={{ "& td": { borderRight: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" } }}>
                                <TableCell sx={{ color: "#121417" }}>{row.name}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.type}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.steps}</TableCell>
                                <TableCell sx={{ color: "#5C758A" }}>{row.campaign}</TableCell>
                                <TableCell>
                                    <Chip label={row.status} sx={{ borderRadius: 2, px: 1.5, fontWeight: 500, fontSize: 13, color: "#121417", backgroundColor: "#EBEDF2" }} />
                                </TableCell>
                                <TableCell>
                                    <Typography fontWeight={600} fontSize={14} sx={{ color: "#5C758A", cursor: "pointer" }}>
                                        Edit Flow
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

function DashboardPipelinePage() {
    const [selectedTab, setSelectedTab] = useState("All");

    return (

        <>
            <Box sx={{ mt: 2, display: "flex", gap: 4, alignItems: "center" }}>
                <SearchIcon sx={{ fontSize: 20, color: "#121417" }} />
                <FilterAltOutlinedIcon sx={{ fontSize: 20, color: "#121417" }} />
                <FileUploadOutlinedIcon sx={{ fontSize: 20, color: "#121417" }} />
                <DashboardOutlinedIcon sx={{ fontSize: 20, color: "#121417" }} />
                <Button
                    variant="outlined"
                    sx={{
                        border: "none",
                        borderRadius: 4,
                        textTransform: "none",
                        px: 3,
                        fontFamily: "Inter, sans-serif",
                        backgroundColor: "#EBEDF2",
                        color: "#121417",
                        boxShadow: "none",
                        "&:hover": { backgroundColor: "#EBEDF2" },
                    }}
                >
                    Create New Pipeline
                </Button>
            </Box>
            <Box sx={{ backgroundColor: "#F2F9FF", minHeight: "100vh", width: "100%", fontFamily: "Inter, sans-serif" }}>
                <Box sx={{ display: "flex", gap: 6, borderBottom: "2px solid #dde2e7ff", px: 0, pt: 3 }}>
                    {tabs.map((label) => (
                        <Typography
                            key={label}
                            onClick={() => setSelectedTab(label)}
                            sx={{
                                cursor: "pointer",
                                fontSize: 16,
                                fontWeight: 550,
                                color: selectedTab === label ? "#0D141C" : "#5C758A",
                                borderBottom: selectedTab === label ? "4px solid #0D141C" : "4px solid transparent",
                                pb: 0,
                                padding: 1
                            }}
                        >
                            {label}
                        </Typography>
                    ))}
                </Box>
                <PipelineCards selectedTab={selectedTab} />
                <PipelineTable selectedTab={selectedTab} />
            </Box>
        </>
    );
}

export default DashboardPipelinePage;
