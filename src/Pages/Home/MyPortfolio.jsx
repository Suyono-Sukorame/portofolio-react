// src/Pages/Home/MyPortfolio.jsx

// Import data dari file index.json di dalam direktori "../../data/"
import data from "../../data/index.json";

// Mendefinisikan fungsi MyPortfolio yang diekspor sebagai default
export default function MyPortfolio() {
  const githubLink = "https://github.com/Suyono-Sukorame"; // Menyimpan tautan GitHub Anda

  // Render section HTML untuk menampilkan portfolio
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          {/* Tautan menuju GitHub Anda */}
          <a href={githubLink} className="btn btn-github">
            {""}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 33 33" fill="none">
              {/* ... (path SVG lainnya) */}
            </svg>
            Visit My GitHub
          </a>
        </div>
      </div>
      {/* <div className="portfolio--section--container"> */}
      {/* Mapping data dari portfolio untuk menampilkan kartu-kartu proyek */}
      {/* {data?.portfolio?.map((item, index) => ( */}
      {/* <div key={index} className="portfolio--section--card"> */}
      {/* <div className="portfolio--section--img"> */}
      {/* Menampilkan gambar proyek */}
      {/* <img src={item.src} alt="Placeholder" /> */}
      {/* </div> */}
      {/* <div className="portfolio--section--card--content"> */}
      {/* <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div> */}
      {/* <p className="text-sm portfolio--link"> */}
      {/* Tautan eksternal menuju proyek */}
      {/* <a href={item.link} target="_blank" rel="noopener noreferrer"> */}
      {/* {""} */}
      {/* {item.link} Menampilkan tautan proyek */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none"> */}
      {/* ... (path SVG lainnya) */}
      {/* </svg> */}
      {/* </a> */}
      {/* </p> */}
      {/* </div>
          </div>
        ))} */}
      {/* </div> */}
    </section>
  );
}
