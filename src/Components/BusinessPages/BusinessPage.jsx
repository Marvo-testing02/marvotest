import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BusinessPage1 from './BusinessPage1';
import BusinessPage2 from './BusinessPage2';
import BusinessPage3 from './BusinessPage3';
import BusinessPage4 from './BusinessPage4';
import BusinessPage5 from './BusinessPage5';
import BusinessPage6 from './BusinessPage6';
import BusinessPage7 from './BusinessPage7';

const BusinessPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(id);

  const goToNext = () => {
    if (currentPage < 7) {
      navigate(`/business/page/${currentPage + 1}`);
    }
  };

  const goToBack = () => {
    if (currentPage > 1) {
      navigate(`/business/page/${currentPage - 1}`);
    }
  };
  const pages = {
  1: <BusinessPage1 goToNext={goToNext} goToBack={goToBack} />,
  2: <BusinessPage2 goToNext={goToNext} goToBack={goToBack} />,
  3: <BusinessPage3 goToNext={goToNext} goToBack={goToBack} />,
  4: <BusinessPage4 goToNext={goToNext} goToBack={goToBack} />,
  5: <BusinessPage5 goToNext={goToNext} goToBack={goToBack} />,
  6: <BusinessPage6 goToNext={goToNext} goToBack={goToBack} />,
  7: <BusinessPage7 goToNext={goToNext} goToBack={goToBack} />,
};




  return (
    <div>
      {pages[currentPage] || <div>Business Page Not Found</div>}

      {/* Navigation Buttons */}
      <div style={{ marginTop: '20px' }}>
        {currentPage > 1 && <button onClick={goToBack}>Back</button>}
        {currentPage < 7 && <button onClick={goToNext}>Next</button>}
      </div>
    </div>
  );
};

export default BusinessPage;
