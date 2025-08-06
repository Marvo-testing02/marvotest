import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import EnterprisePage1 from './EnterprisePage1';
import EnterprisePage2 from './EnterprisePage2';
import EnterprisePage3 from './EnterprisePage3';
import EnterprisePage4 from './EnterprisePage4';
import EnterprisePage5 from './EnterprisePage5';
import EnterprisePage6 from './EnterprisePage6';
import EnterprisePage7 from './EnterprisePage7';
import EnterprisePage8 from './EnterprisePage8';

const EnterprisePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(id);

  const goToNext = () => {
    if (currentPage < 8) {
      navigate(`/enterprise/page/${currentPage + 1}`);
    }
  };

  const goToBack = () => {
    if (currentPage > 1) {
      navigate(`/enterprise/page/${currentPage - 1}`);
    }
  };
  const pages = {
  1: <EnterprisePage1 goToNext={goToNext} goToBack={goToBack} />,
  2: <EnterprisePage2 goToNext={goToNext} goToBack={goToBack} />,
  3: <EnterprisePage3 goToNext={goToNext} goToBack={goToBack} />,
  4: <EnterprisePage4 goToNext={goToNext} goToBack={goToBack} />,
  5: <EnterprisePage5 goToNext={goToNext} goToBack={goToBack} />,
  6: <EnterprisePage6 goToNext={goToNext} goToBack={goToBack} />,
  7: <EnterprisePage7 goToNext={goToNext} goToBack={goToBack} />,
  8: <EnterprisePage8 goToNext={goToNext} goToBack={goToBack} />,
};


  

  return (
    <div>
      {pages[currentPage] || <div>Enterprise Page Not Found</div>}

      {/* Navigation Buttons */}
      <div style={{ marginTop: '20px' }}>
        {currentPage > 1 && <button onClick={goToBack}>Back</button>}
        {currentPage < 8 && <button onClick={goToNext}>Next</button>}
      </div>
    </div>
  );
};

export default EnterprisePage;
