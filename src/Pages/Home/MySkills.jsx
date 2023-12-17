// src/Pages/Home/MySkills.jsx

// Import React dan useState dari React library
import React, { useState } from "react";

// Import data dari file index.json di dalam direktori "../../data/"
import data from "../../data/index.json";

// Deklarasi komponen bernama MySkills
const MySkills = () => {
  // Menginisialisasi state expandedSkills dengan useState untuk menyimpan indeks skill yang diperluas
  const [expandedSkills, setExpandedSkills] = useState([]);

  // Fungsi toggleExpand untuk mengubah status perluasan suatu skill berdasarkan indeksnya
  const toggleExpand = (index) => {
    // Memeriksa apakah indeks skill sudah ada dalam expandedSkills
    if (expandedSkills.includes(index)) {
      // Jika ada, menghapus indeks skill tersebut dari expandedSkills
      setExpandedSkills(expandedSkills.filter((item) => item !== index));
    } else {
      // Jika tidak ada, menambahkan indeks skill tersebut ke dalam expandedSkills
      setExpandedSkills([...expandedSkills, index]);
    }
  };

  // Render section HTML untuk menampilkan skills
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {/* Mapping data dari skills dan menampilkan kartu-kartu skill */}
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              {/* Menampilkan gambar skill */}
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              {/* Menampilkan deskripsi yang disingkat atau lengkap berdasarkan status expandedSkills */}
              <p className="skills--section--description">
                {expandedSkills.includes(index) ? item.description : `${item.description.slice(0, 100)}...`}
                {item.description.length > 100 && (
                  // Tombol untuk menampilkan lebih sedikit atau lebih banyak deskripsi skill
                  <button className="read-more-btn" onClick={() => toggleExpand(index)}>
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

// Export komponen MySkills agar bisa digunakan di file lain
export default MySkills;
