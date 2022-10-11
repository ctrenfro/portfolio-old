import React from "react";

import Resume from "../../assets/Renfro_Christopher_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={Resume}
        rel="noopener noreferrer"
        target="_blank"
        className="btn"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
