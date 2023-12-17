import data from "../../data/index.json";
import { useState } from "react";

const LongText = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, maxLength) : text;

  const toggleReadMore = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <p className="hero--section-description">
      {resultString}
      {text.length > maxLength && (
        <span onClick={toggleReadMore}>
          {isTruncated ? " ->read more" : " show less"}
        </span>
      )}
    </p>
  );
};

export default function AboutMe() {
  const aboutData = data.aboutme[0]; // Mengambil data dari file JSON

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboutData.src} alt={aboutData.title} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">{aboutData.title}</h1>
          <LongText text={aboutData.description} maxLength={100} />
          {/* 
            Atau ganti 'maxLength' dengan panjang karakter maksimal yang Anda inginkan
            Sesuaikan 'aboutData.description' dengan teks yang ingin Anda tampilkan
          */}
        </div>
      </div>
    </section>
  );
}

