import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
    LineChart,
    BarChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';


const campaignEngagementData = [
    { name: 'Product ', engagement: 85 },
    { name: 'Event Invites', engagement: 70 },
    { name: 'Newsletter', engagement: 65 },
    { name: 'Re-Engagement ', engagement: 90 },
    { name: 'Other', engagement: 40 },
];
const data = [
    { label: 'Total Contacts', value: '12.6K', change: 3.2 },
    { label: 'New Leads Today', value: '865', change: 5.4 },
    { label: 'Active Campaigns', value: '37', change: 8.1 },
    { label: 'Replies Received', value: '9.2K', change: -1.5 },
    { label: 'Conversion Rate', value: '22.5%', change: 6.3 },
];

const chartDatas = [
    { day: 'Mon', replies: 20, change: 'up' },
    { day: 'Tue', replies: 15, change: 'down' },
    { day: 'Wed', replies: 25, change: 'up' },
];

// Dummy 30-day data for the chart
const chartData = Array.from({ length: 30 }, (_, index) => ({
    day: index + 1,
    replies: Math.floor(20 + Math.sin(index / 3) * 10 + Math.random() * 5),
}));

const CustomBar = (props) => {
    const { x, y, width, height } = props;

    return (
        <g>
            {/* Transparent Bar */}
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill="#E8EDF5"
            />
            {/* Gray top border */}
            <line
                x1={x}
                y1={y}
                x2={x + width}
                y2={y}
                stroke="#999"
                strokeWidth={2}
            />
        </g>
    );
};

//  for maps
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});
const usageData = [
    { city: 'Jaipur', coords: [26.9124, 75.7873], users: 950 },
    { city: 'Delhi', coords: [28.6139, 77.2090], users: 600 },
    { city: 'Mumbai', coords: [19.0760, 72.8777], users: 420 },
    { city: 'Bengaluru', coords: [12.9716, 77.5946], users: 320 },
    { city: 'Hyderabad', coords: [17.3850, 78.4867], users: 270 },

];

function DashboardOverviewPage() {
    return (
        <Box className="mt-10 px-4">
            {/* Top stats */}
            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {data.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        style={{
                            boxShadow: 'none',
                            border: '2px solid #CFDBE8',
                            borderRadius: '12px',
                        }}
                        className="px-6 flex flex-col justify-center gap-1 h-[144px]"
                    >
                        <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
                            {item.label}
                        </Typography>
                        <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>
                            {item.value}
                        </Typography>
                        <Typography
                            sx={{ fontSize: '16px', fontWeight: 500 }}
                            className={`font-medium ${item.change >= 0 ? 'text-green-600' : 'text-red-500'
                                }`}
                        >
                            {item.change >= 0 ? '+' : ''}
                            {item.change}%
                        </Typography>
                    </Paper>
                ))}
            </Box>

            {/* Line chart section */}
            <Box className="mt-8 bg-[#F1F8FF] rounded-xl  w-full">
                <Typography sx={{ fontSize: '22px', fontWeight: 700 }} className="font-semibold mb-2">
                    Campaign Timeline (Last 30 Days)
                </Typography>
                <Typography sx={{ mt: 3 }} className=" text-sm text-black font-semibold mb-4">
                    Campaign Sends / Replies
                </Typography>

                {/* Responsive Line Chart */}
                <div className="mt-9 w-full h-[300px] ">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            {/* <CartesianGrid strokeDasharray="3 3" vertical={false} /> */}
                            <XAxis dataKey="day" tick={{ fontSize: 12 }} />

                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="replies"
                                stroke="#4A739C"
                                strokeWidth={3}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Box>


            {/* Funnel Overview + Leads by Country */}
            <Box className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Funnel Overview */}
                <Paper
                    sx={{
                        boxShadow: `
    1px 1px 2px 0px #0000001A,
    3px 2px 4px 0px #00000017,
    6px 5px 5px 0px #0000000D,
    11px 10px 6px 0px #00000003,
    18px 15px 7px 0px #00000000
  `
                        ,
                        borderRadius: '12px'
                    }}
                    className="bg-[#F1F8FF] p-6 flex flex-col gap-12 "
                >
                    <Typography variant="h6" fontWeight={700} className="mb-4">
                        Funnel Overview
                    </Typography>
                    <Box className="space-y-3">
                        {[
                            { label: 'Sent', value: '10,000' },
                            { label: 'Opened', value: '6,800 ▼ 32%' },
                            { label: 'Clicked', value: '4,300 ▼ 36.7%' },
                            { label: 'Replied', value: '2,900 ▼ 32.5%' },
                            { label: 'Qualified', value: '1,800 ▼ 37.9%' },
                            { label: 'Converted', value: '1,200' },
                        ].slice(0, 6).map((item, index) => (
                            <Box
                                key={index}
                                className="flex justify-between  text-sm text-black font-medium"
                            >
                                <Typography className="text-[#4A739C] font-semibold">
                                    {item.label}
                                </Typography>
                                <Typography className="font-semibold">{item.value}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Paper>

                {/* Leads by Country */}
                <Paper
                    sx={{
                        boxShadow: `
    1px 1px 2px 0px #0000001A,
    3px 2px 4px 0px #00000017,
    6px 5px 5px 0px #0000000D,
    11px 10px 6px 0px #00000003,
    18px 15px 7px 0px #00000000
  `
                        ,
                        borderRadius: '12px'
                    }}
                    className="bg-[#F1F8FF] p-6 flex flex-col gap-12  "
                >
                    <Typography variant="h6" fontWeight={700} className="mb-4">
                        Leads by Country
                    </Typography>
                    <Box className="space-y-3">
                        {[
                            { country: 'United States', stats: '38.7%, 4.9K' },
                            { country: 'United Kingdom', stats: '21.3%, 2.7K' },
                            { country: 'Australia', stats: '13.4%, 1.7K' },
                            { country: 'India', stats: '9.1%, 1.2K' },
                            { country: 'Canada', stats: '6.8%, 875' },
                            { country: 'Others', stats: '10.7%, 1.4K' },
                        ].slice(0, 6).map((item, index) => (
                            <Box
                                key={index}
                                className="flex justify-between text-sm text-black font-medium"
                            >
                                <Typography className="text-[#4A739C] font-semibold">
                                    {item.country}
                                </Typography>
                                <Typography className="font-semibold">{item.stats}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Paper>
            </Box>


            {/* Most Engaged Campaign Types */}
            <Box className="mt-10 bg-[#F1F8FF]  w-full">
                <Typography sx={{ fontSize: '22px', fontWeight: 700 }} className="mb-2">
                    Most Engaged Campaign Types
                </Typography>
                <Typography sx={{ fontSize: 18, mt: 4, }} className="text-sm text-black font-bold mb-4">
                    Campaign Engagement
                </Typography>

                <div className="w-full h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={campaignEngagementData} barGap={0} barSize={300}>
                            <XAxis

                                dataKey="name"
                                tick={{ fontSize: 16, fill: '#4A739C', fontWeight: 600 }}
                                axisLine={{ stroke: 'transparent' }}
                                tickLine={false}
                            />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#F2F9FF',
                                    borderRadius: 12,
                                    border: '1px solid #D6E6F2',
                                    fontWeight: 600,
                                    color: '#000',
                                }}
                                cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                            />

                            <Bar
                                dataKey="engagement"
                                shape={<CustomBar />}
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Box>


            {/* Active Countries Heatmap / Usage by Location */}
            <Box className="mt-10  bg-[#F1F8FF]  rounded-xl w-full">
                <Typography sx={{ fontSize: '22px', mb: 2, fontWeight: 700 }} className="mb-4">
                    Active Countries Heatmap
                </Typography>

                <Box className="w-full h-[500px] rounded-xl overflow-hidden">
                    <MapContainer
                        center={[22.9734, 78.6569]}
                        zoom={4.5}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        />

                        {usageData.map((location, index) => (
                            <Marker className="rounded-lg p-2" key={index} position={location.coords}>
                                <Popup >
                                    <strong className=' text-[15px] font-bold' >{location.city}</strong><br />
                                    <span className=' text-[20px] font-bold mr-3'> {location.users}</span><span className='font-bold'>active users</span>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </Box>
            </Box>

        </Box>
    );
}

export default DashboardOverviewPage;
