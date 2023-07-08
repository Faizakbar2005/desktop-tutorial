// Home.js
import React from 'react';
import '../styles/box.css';

function Home() {
  return (
    <div className="hewan mx-auto">
      <div className="imgfront flex justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/1096614485231423568/1127300416850378954/imgfrontragunan.png"
          alt="Kebun Binatang Ragunan"
          className="w-screen h-auto m-0 p-0 rounded-[15px]" /*w-max*/
        />
      </div>
      <div className="my-8">
        <h1 align="center" className="text-4xl font-bold" >Selamat Datang di Kebun Binatang Ragunan!</h1>
        <br></br>
        <div className="container">
          <div className="box">
            <h2 className="box-title">Pusat Primata Schmutzer</h2>
            <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/smutzer2.jpg" alt="Pusat Primata Schmutzer"/>
            <p className="box-description">
              Deskripsi fasilitas 1.
            </p>
          </div>
          <br></br>
          <div className="box">
            <h2 className="box-title">Taman Satwa Anak</h2>
            <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/IMG_3568-271x300.jpg" alt="Taman Refleksi"/>
            <p className="box-description">
              Deskripsi fasilitas 2.
            </p>
          </div>
          <div className="box">
            <h2 className="box-title">Taman Satwa Anak</h2>
            <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/other-facilities-3b.jpg" alt="Taman Satwa Anak"/>
            <p className="box-description">
              Deskripsi fasilitas 3.
            </p>
          </div>
        </div>
        <p align="justify" className="text-lg mt-4">
          Kebun Binatang Ragunan adalah salah satu kebun binatang terbesar di Indonesia. Dengan luas
          lebih dari 140 hektar, kebun binatang ini merupakan rumah bagi berbagai jenis hewan dari
          seluruh dunia. Nikmati pengalaman menarik dalam menjelajahi keindahan alam dan melihat
          keanekaragaman fauna yang ada di sini.
        </p>
      </div>
    </div>
  );
}

export default Home;
