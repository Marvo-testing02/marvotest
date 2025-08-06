import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProfessionalPage1 from './ProfessionalPage1';
import ProfessionalPage2 from './ProfessionalPage2';
import ProfessionalPage3 from './ProfessionalPage3';
import ProfessionalPage4 from './ProfessionalPage4';
import ProfessionalPage5 from './ProfessionalPage5';
import ProfessionalPage6 from './ProfessionalPage6';

const ProfessionalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(id);
const goToNext = () => {
    if (currentPage < 6) {
      navigate(`/otherprofessional/page/${currentPage + 1}`);
    }
  };

  const goToBack = () => {
    if (currentPage > 1) {
      navigate(`/otherprofessional/page/${currentPage - 1}`);
    }
  };

 const pages = {
    1: <ProfessionalPage1 goToNext={goToNext} goToBack={goToBack} />,
    2: <ProfessionalPage2 goToNext={goToNext} goToBack={goToBack} />,
    3: <ProfessionalPage3 goToNext={goToNext} goToBack={goToBack} />,
    4: <ProfessionalPage4 goToNext={goToNext} goToBack={goToBack} />,
    5: <ProfessionalPage5 goToNext={goToNext} goToBack={goToBack} />,
    6: <ProfessionalPage6 goToNext={goToNext} goToBack={goToBack} />,
  };

  
  return (
    <div>
      {pages[currentPage] || <div>Other Professional Page Not Found</div>}

      {/* Navigation Buttons */}
      <div style={{ marginTop: '20px' }}>
        {currentPage > 1 && <button onClick={goToBack}>Back</button>}
        {currentPage < 6 && <button onClick={goToNext}>Next</button>}
      </div>
    </div>
  );
};

export default ProfessionalPage;
