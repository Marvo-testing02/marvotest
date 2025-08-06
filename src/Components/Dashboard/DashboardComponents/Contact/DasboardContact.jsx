import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

// Dummy dynamic data
const contacts = [
  {
    name: "Ethan Harper",
    company: "Tech Solutions Inc.",
    phone: "+1-555-123-4567",
    email: "ethan.harper@techsolutions.com",
    platform: "Facebook",
    status: "Hot",
    tags: ["VIP"],
    lastActivity: "Today",
  },
  {
    name: "Olivia Bennett",
    company: "Global Marketing Ltd.",
    phone: "+1-555-987-6543",
    email: "olivia.bennett@globalmarketing.com",
    platform: "WhatsApp",
    status: "Warm",
    tags: ["eCom"],
    lastActivity: "This Week",
  },
  {
    name: "Noah Carter",
    company: "Fitness First Co.",
    phone: "+1-555-246-8013",
    email: "noah.carter@fitnessfirst.com",
    platform: "Instagram",
    status: "Cold",
    tags: ["Fitness"],
    lastActivity: "Last Month",
  },
  {
    name: "Ava Davis",
    company: "Creative Designs LLC",
    phone: "+1-555-135-7924",
    email: "ava.davis@creativedesigns.com",
    platform: "Facebook",
    status: "Hot",
    tags: ["VIP"],
    lastActivity: "Today",
  },
  {
    name: "Liam Evans",
    company: "Software Innovations Corp.",
    phone: "+1-555-369-1215",
    email: "liam.evans@softwareinnovations.com",
    platform: "WhatsApp",
    status: "Warm",
    tags: ["eCom"],
    lastActivity: "This Week",
  },
  {
    name: "Sophia Foster",
    company: "Health & Wellness Group",
    phone: "+1-555-147-2586",
    email: "sophia.foster@healthwellness.com",
    platform: "Instagram",
    status: "Cold",
    tags: ["Fitness"],
    lastActivity: "Last Month",
  },
  {
    name: "Jackson Green",
    company: "Financial Services Ltd.",
    phone: "+1-555-159-3697",
    email: "jackson.green@financialservices.com",
    platform: "Facebook",
    status: "Hot",
    tags: ["VIP"],
    lastActivity: "Today",
  },
  {
    name: "Isabella Hayes",
    company: "Retail Ventures Inc.",
    phone: "+1-555-268-4708",
    email: "isabella.hayes@retailventures.com",
    platform: "WhatsApp",
    status: "Warm",
    tags: ["eCom"],
    lastActivity: "This Week",
  },
  {
    name: "Lucas Ingram",
    company: "Education Solutions Co.",
    phone: "+1-555-170-5819",
    email: "lucas.ingram@educationsolutions.com",
    platform: "Instagram",
    status: "Cold",
    tags: ["Fitness"],
    lastActivity: "Last Month",
  },
  {
    name: "Mia Jenkins",
    company: "Consulting Experts LLC",
    phone: "+1-555-182-6820",
    email: "mia.jenkins@consultingexperts.com",
    platform: "Facebook",
    status: "Hot",
    tags: ["VIP"],
    lastActivity: "Today",
  },
];

const sortOptions = ["Last Activity", "Name", "Status", "Source"];

function DashboardContact() {
  const [selectedSort, setSelectedSort] = useState("Last Activity");
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");
  const [lastActivity, setLastActivity] = useState("");
  const [search, setSearch] = useState("");

  const filteredContacts = contacts
    .filter((contact) => {
      const searchTerm = search.toLowerCase();
      return (
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.company.toLowerCase().includes(searchTerm) ||
        contact.phone.toLowerCase().includes(searchTerm) ||
        contact.email.toLowerCase().includes(searchTerm)
      );
    })
    .filter((contact) => (platform ? contact.platform === platform : true))
    .filter((contact) => (status ? contact.status === status : true))
    .filter((contact) => (tags ? contact.tags.includes(tags) : true))
    .filter((contact) =>
      lastActivity ? contact.lastActivity === lastActivity : true
    )
    .sort((a, b) => {
      switch (selectedSort) {
        case "Name":
          return a.name.localeCompare(b.name);
        case "Status":
          return a.status.localeCompare(b.status);
        case "Source":
          return a.platform.localeCompare(b.platform);
        case "Last Activity":
        default:
          return a.lastActivity.localeCompare(b.lastActivity);
      }
    });

  return (
    <Box
      className="mt-10 p-2 lg:p-0"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F2F9FF",
      }}
    >
      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search by name, company, phone, or email"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#5C738A" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 1.5,
          minWidth: "160px",
          padding: "4px 12px",
          marginBottom: "22px",
          backgroundColor: "#EBEDF2",
          borderRadius: "8px",
          "& fieldset": { border: "none" },
          "& input::placeholder": {
            color: "#5C738A",
            opacity: 1,
          },
        }}
      />

      {/* Dropdown Filters */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          mb: 3,
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            label: "Platform",
            value: platform,
            setValue: setPlatform,
            options: ["Facebook", "WhatsApp", "Instagram"],
          },
          {
            label: "Status",
            value: status,
            setValue: setStatus,
            options: ["Hot", "Warm", "Cold"],
          },
          {
            label: "Tags",
            value: tags,
            setValue: setTags,
            options: ["VIP", "eCom", "Fitness"],
          },
          {
            label: "Last Activity",
            value: lastActivity,
            setValue: setLastActivity,
            options: ["Today", "This Week", "Last Month"],
          },
        ].map((filter, index) => (
          <FormControl size="small" key={index} sx={{ minWidth: 140 }}>
            <Select
              displayEmpty
              value={filter.value}
              onChange={(e) => filter.setValue(e.target.value)}
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) =>
                selected === "" ? (
                  <span
                    style={{ color: "#000000", backgroundColor: "#EBEDF2" }}
                  >
                    {filter.label}
                  </span>
                ) : (
                  selected
                )
              }
              sx={{
                color: "#000000",
                pl: "16px",
                pr: "8px",
                borderRadius: "12px",
                backgroundColor: "#EBEDF2",
                fontSize: "14px",
                fontWeight: 500,
                "& .MuiSelect-select": { py: 0.8, pl: 2 },
                "& fieldset": { border: "none" },
              }}
            >
              <MenuItem
                value=""
                sx={{ fontSize: "13px", fontWeight: 500, color: "#000000" }}
              >
                All {filter.label}
              </MenuItem>
              {filter.options.map((opt) => (
                <MenuItem
                  key={opt}
                  value={opt}
                  sx={{ color: "#000000", fontSize: "13px", fontWeight: 500 }}
                >
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>

      {/* Sort by Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
          mb: 2,
          width: "80%",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, fontSize: "18px" }}
        >
          Sort by
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
          {sortOptions.map((option) => (
            <Chip
              key={option}
              label={option}
              clickable
              onClick={() =>
                setSelectedSort((prev) => (prev === option ? "" : option))
              }
              sx={{
                borderRadius: "12px",
                height: "32px",
                fontSize: "14px",
                fontWeight: 500,
                px: "16px",
                backgroundColor:
                  selectedSort === option ? "#CCE4FF" : "#EBEDF2",
                color: selectedSort === option ? "#121417" : "#121417",
                "&:hover": {
                  backgroundColor:
                    selectedSort === option ? "#CCE4FF" : "#EBEDF2",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper} sx={{ borderRadius: 2, mx: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center" width={"150px"}>
                Phone
              </TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Platform</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Tags</TableCell>
              <TableCell align="center">Last Activity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts.map((contact, index) => (
              <TableRow key={index} hover>
                <TableCell align="center">{contact.name}</TableCell>
                <TableCell align="center" sx={{ color: "#5C738A" }}>
                  {contact.company}
                </TableCell>
                <TableCell align="center" sx={{ color: "#5C738A" }}>
                  {contact.phone}
                </TableCell>
                <TableCell align="center" sx={{ color: "#5C738A" }}>
                  {contact.email}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    sx={{ background: "#EBEDF2", borderRadius: "12px", px: 2 }}
                    label={contact.platform}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    sx={{
                      background: "#EBEDF2",
                      borderRadius: "12px",
                      px: 2,
                      width: "100px",
                    }}
                    label={contact.status}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    sx={{
                      background: "#EBEDF2",
                      borderRadius: "12px",
                      px: 2,
                      width: "100px",
                    }}
                    label={contact.tags}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">{contact.lastActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DashboardContact;
