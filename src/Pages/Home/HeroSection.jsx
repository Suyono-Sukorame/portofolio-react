import React, { useState } from 'react';

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
        <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
          {isTruncated ? ' ->read more' : ' show less'}
        </span>
      )}
    </p>
  );
};

export default function HeroSection() {
  const longText = `As a Full Stack Developer, I have in-depth expertise in developing web applications from start to finish. With a broad understanding of programming languages such as HTML, CSS, JavaScript, and PHP, as well as a profound knowledge of frameworks like Laravel, CodeIgniter, VueJS, and ReactJS on the client-side (frontend), I am also capable of creating engaging and responsive user interfaces. On the server-side (backend), I have experience in database development, utilizing technologies such as Git, VS Code, MySQL, MongoDB, Node.js, and Express to ensure efficient and reliable application performance. Furthermore, my ability to integrate systems and tailor applications to meet client needs enables me to provide comprehensive and innovative technical solutions.`;

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Yono</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <LongText text={longText} maxLength={52} />
          {/* 
            Atau sesuaikan 'maxLength' dengan jumlah karakter maksimal yang Anda inginkan
            Sesuaikan 'longText' dengan teks yang ingin Anda tampilkan
          */}
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
