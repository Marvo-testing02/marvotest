
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLandingPage from './Components/LandingPage/MainLandingPage'
import WelcomePage from "./Components/WelcomePage.jsx"
import LoginPage from "./Components/LoginPage.jsx"
import SignupPage from "./Components/SignupPage.jsx"
import RoleSelectionPage from "./Components/RoleSelectionPage.jsx"
import FreelancerPage1 from "./Components/FreelancerPages/FreeLancerPage1.jsx"
import FreelancerPage2 from "./Components/FreelancerPages/FreeLancerPage2.jsx"
import FreelancerPage3 from "./Components/FreelancerPages/FreeLancerPage3.jsx"
import FreelancerPage4 from "./Components/FreelancerPages/FreeLancerPage4.jsx"
import FreelancerPage5 from "./Components/FreelancerPages/FreeLancerPage5.jsx"
import FreelancerPage6 from "./Components/FreelancerPages/FreeLancerPage6.jsx"
import BusinessPage1 from "./Components/BusinessPages/BusinessPage1.jsx"
import BusinessPage2 from "./Components/BusinessPages/BusinessPage2.jsx"
import BusinessPage3 from "./Components/BusinessPages/BusinessPage3.jsx"
import BusinessPage4 from "./Components/BusinessPages/BusinessPage4.jsx"
import BusinessPage5 from "./Components/BusinessPages/BusinessPage5.jsx"
import BusinessPage6 from "./Components/BusinessPages/BusinessPage6.jsx"
import BusinessPage7 from "./Components/BusinessPages/BusinessPage7.jsx"
import EnterprisePage1 from "./Components/EnterprisePages/EnterprisePage1.jsx"
import EnterprisePage2 from "./Components/EnterprisePages/EnterprisePage2.jsx"
import EnterprisePage3 from "./Components/EnterprisePages/EnterprisePage3.jsx"
import EnterprisePage4 from "./Components/EnterprisePages/EnterprisePage4.jsx"
import EnterprisePage5 from "./Components/EnterprisePages/EnterprisePage5.jsx"
import EnterprisePage6 from "./Components/EnterprisePages/EnterprisePage6.jsx"
import EnterprisePage7 from "./Components/EnterprisePages/EnterprisePage7.jsx"
import EnterprisePage8 from "./Components/EnterprisePages/EnterprisePage8.jsx"
import ProfessionalPage1 from "./Components/OtherProfessional/ProfessionalPage1.jsx"
import ProfessionalPage2 from "./Components/OtherProfessional/ProfessionalPage2.jsx"
import ProfessionalPage3 from "./Components/OtherProfessional/ProfessionalPage3.jsx"
import ProfessionalPage4 from "./Components/OtherProfessional/ProfessionalPage4.jsx"
import ProfessionalPage5 from "./Components/OtherProfessional/ProfessionalPage5.jsx"
import ProfessionalPage6 from "./Components/OtherProfessional/ProfessionalPage6.jsx"



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
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
    </>
  )
}

export default App
