import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import RoleSelectionPage from './components/RoleSelectionPage';
import FreelancerPage1 from './components/FreelancerPages/FreeLancerPage1';
import FreelancerPage2 from './components/FreelancerPages/FreeLancerPage2';
import FreelancerPage3 from './components/FreelancerPages/FreeLancerPage3';
import FreelancerPage4 from './components/FreelancerPages/FreeLancerPage4';
import FreelancerPage5 from './components/FreelancerPages/FreeLancerPage5';
import FreelancerPage6 from './components/FreelancerPages/FreeLancerPage6';
import BusinessPage1 from './components/BusinessPages/BusinessPage1';
import BusinessPage2 from './components/BusinessPages/BusinessPage2';
import BusinessPage3 from './components/BusinessPages/BusinessPage3';
import BusinessPage4 from './components/BusinessPages/BusinessPage4';
import BusinessPage5 from './components/BusinessPages/BusinessPage5';
import BusinessPage6 from './components/BusinessPages/BusinessPage6';
import BusinessPage7 from './components/BusinessPages/BusinessPage7';
import EnterprisePage1 from './components/EnterprisePages/EnterprisePage1';
import EnterprisePage2 from './components/EnterprisePages/EnterprisePage2';
import EnterprisePage3 from './components/EnterprisePages/EnterprisePage3';
import EnterprisePage4 from './components/EnterprisePages/EnterprisePage4';
import EnterprisePage5 from './components/EnterprisePages/EnterprisePage5';
import EnterprisePage6 from './components/EnterprisePages/EnterprisePage6';
import EnterprisePage7 from './components/EnterprisePages/EnterprisePage7';
import EnterprisePage8 from './components/EnterprisePages/EnterprisePage8';
import ProfessionalPage1 from './components/OtherProfessional/ProfessionalPage1';
import ProfessionalPage2 from './components/OtherProfessional/ProfessionalPage2';
import ProfessionalPage3 from './components/OtherProfessional/ProfessionalPage3';
import ProfessionalPage4 from './components/OtherProfessional/ProfessionalPage4';
import ProfessionalPage5 from './components/OtherProfessional/ProfessionalPage5';
import ProfessionalPage6 from './components/OtherProfessional/ProfessionalPage6';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/role" element={<RoleSelectionPage />} />
        <Route path="/freelancer/page1" element={<FreelancerPage1 />} />
        <Route path="/freelancer/page2" element={<FreelancerPage2 />} />
        <Route path="/freelancer/page3" element={<FreelancerPage3 />} />
        <Route path="/freelancer/page4" element={<FreelancerPage4 />} />
        <Route path="/freelancer/page5" element={<FreelancerPage5 />} />
        <Route path="/freelancer/page6" element={<FreelancerPage6 />} />
        <Route path="/business/page1" element={<BusinessPage1 />} />
        <Route path="/business/page2" element={<BusinessPage2 />} />
        <Route path="/business/page3" element={<BusinessPage3 />} />
        <Route path="/business/page4" element={<BusinessPage4 />} />
        <Route path="/business/page5" element={<BusinessPage5 />} />
        <Route path="/business/page6" element={<BusinessPage6 />} />
        <Route path="/business/page7" element={<BusinessPage7 />} />
        <Route path="/enterprise/page1" element={<EnterprisePage1 />} />
        <Route path="/enterprise/page2" element={<EnterprisePage2 />} />
        <Route path="/enterprise/page3" element={<EnterprisePage3 />} />
        <Route path="/enterprise/page4" element={<EnterprisePage4 />} />
        <Route path="/enterprise/page5" element={<EnterprisePage5 />} />
        <Route path="/enterprise/page6" element={<EnterprisePage6 />} />
        <Route path="/enterprise/page7" element={<EnterprisePage7 />} />
        <Route path="/enterprise/page8" element={<EnterprisePage8 />} />
        <Route path="/otherprofessional/page1" element={<ProfessionalPage1 />} />
        <Route path="/otherprofessional/page2" element={<ProfessionalPage2 />} />
        <Route path="/otherprofessional/page3" element={<ProfessionalPage3 />} />
        <Route path="/otherprofessional/page4" element={<ProfessionalPage4 />} />
        <Route path="/otherprofessional/page5" element={<ProfessionalPage5 />} />
        <Route path="/otherprofessional/page6" element={<ProfessionalPage6 />} />

      </Routes>
    </AnimatePresence>
  );
};
function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App;
