
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLandingPage from './Components/LandingPage/MainLandingPage'
import WelcomePage from "./Components/WelcomePage.jsx"
import LoginPage from "./Components/LoginPage.jsx"
import SignupPage from "./Components/SignupPage.jsx"
import RoleSelectionPage from "./Components/RoleSelectionPage.jsx"
import DashboardLayout from './Components/Dashboard/DashboardLayout.jsx'
import ProtectedRoute from './Components/ProtactedRoute/ProtectedRoute.jsx'
import DasboardContact from './Components/Dashboard/DashboardComponents/Contact/DasboardContact.jsx'
import MainDashboard from './Components/Dashboard/MainDashboard.jsx'
import DashboardReportPage from './Components/Dashboard/DashboardComponents/DashboardReportPage/DashboardReportPage.jsx'
import DashboardPipelinePage from './Components/Dashboard/DashboardComponents/Pipeline/DashboardPipelinePage.jsx'
import DashboardSettingPage from './Components/Dashboard/DashboardComponents/Settings/DashboardSettingPage.jsx'
import DashboardCampaignPage from './Components/Dashboard/DashboardComponents/Campaign/DashboardCampaignPage.jsx'
import FreelancerPage from './Components/FreelancerPages/FreelancerPage.jsx';
import BusinessPage from './Components/BusinessPages/BusinessPage.jsx';
import EnterprisePage from './Components/EnterprisePages/EnterprisePage.jsx';
import ProfessionalPage from './Components/OtherProfessional/ProfessionalPage.jsx';



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/role" element={<RoleSelectionPage />} />
        <Route path="/freelancer/page/:id" element={<FreelancerPage />} />
        <Route path="/business/page/:id" element={<BusinessPage />} />
        <Route path="/enterprise/page/:id" element={<EnterprisePage />} />
        <Route path="/otherprofessional/page/:id" element={<ProfessionalPage />} />

        {/* Dashboard Routes */}

        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<MainDashboard />} />
            <Route path="contact" element={<DasboardContact />} />
            <Route path="Reports" element={<DashboardReportPage />} />
            <Route path="Pipeline" element={<DashboardPipelinePage />} />
            <Route path="Settings" element={<DashboardSettingPage />} />
            <Route path="Campaigns" element={<DashboardCampaignPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
