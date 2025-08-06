import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FreelancerPage1 from './FreeLancerPage1';
import FreelancerPage2 from './FreeLancerPage2';
import FreelancerPage3 from './FreeLancerPage3';
import FreelancerPage4 from './FreeLancerPage4';
import FreelancerPage5 from './FreeLancerPage5';
import FreelancerPage6 from './FreeLancerPage6';

const FreelancerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(id);

  // ✅ Define functions first
  const goToNext = () => {
    if (currentPage < 6) navigate(`/freelancer/page/${currentPage + 1}`);
  };

  const goToBack = () => {
    if (currentPage > 1) navigate(`/freelancer/page/${currentPage - 1}`);
  };

  // ✅ Then use them
  const pages = {
    1: <FreelancerPage1 goToNext={goToNext} goToBack={goToBack} />,
    2: <FreelancerPage2 goToNext={goToNext} goToBack={goToBack} />,
    3: <FreelancerPage3 goToNext={goToNext} goToBack={goToBack} />,
    4: <FreelancerPage4 goToNext={goToNext} goToBack={goToBack} />,
    5: <FreelancerPage5 goToNext={goToNext} goToBack={goToBack} />,
    6: <FreelancerPage6 goToNext={goToNext} goToBack={goToBack} />,
  };

  return (
    <div>
      {pages[currentPage] || <div>Page Not Found</div>}

      {/* Optional: Global Navigation Buttons */}
      <div style={{ marginTop: '20px' }}>
        {currentPage > 1 && <button onClick={goToBack}>Back</button>}
        {currentPage < 6 && <button onClick={goToNext}>Next</button>}
      </div>
    </div>
  );
};

export default FreelancerPage;
