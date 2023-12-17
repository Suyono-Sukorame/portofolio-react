import React, { useState } from "react";
import data from "../../data/index.json";

const MySkills = () => {
  const [expandedSkills, setExpandedSkills] = useState([]);

  // Function to toggle the expanded state of a skill
  const toggleExpand = (index) => {
    if (expandedSkills.includes(index)) {
      setExpandedSkills(expandedSkills.filter((item) => item !== index));
    } else {
      setExpandedSkills([...expandedSkills, index]);
    }
  };

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              {/* Display shortened or full description based on expanded state */}
              <p className="skills--section--description">
                {expandedSkills.includes(index)
                  ? item.description
                  : `${item.description.slice(0, 100)}...`}
                {item.description.length > 100 && (
                  <button
                    className="read-more-btn"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedSkills.includes(index) ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;


