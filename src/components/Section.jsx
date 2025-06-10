import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="section">
      <div className={`section-header ${titleAlign}`}>
        <h2 className="section-title">{title}</h2>
        {link && (
          <a href={link.href} className="section-link">
            {link.text}
          </a>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
