// Home.js
import React from 'react';
import '../styles/home.css';

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
      <div className="my-8 pt-5">
        <h1 align="center" className="text-4xl font-bold" >Selamat Datang di Kebun Binatang Ragunan!</h1>
        <br></br>

        <table class="tabelfasilitas">
            <tr>
                <th>Pusat Primata Schmutzer</th>
                <th>Taman Refleksi</th>
                <th>Satwa Anak</th>
            </tr>
            <tr>
                <td><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/smutzer2.jpg" alt="Pusat Primata Schmutzer"/></td>
                <td><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/IMG_3568-271x300.jpg" alt="Taman Refleksi"/></td>
                <td><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/other-facilities-3b2.jpg" alt="Taman Satwa Anak"/></td>
            </tr>
            <tr>
                <td>Pusat Primata Schmutzer adalah salah satu pusat primata berkelas internasional yang mempunyai peranan dalam konservasi primata Indonesia dan sekaligus sebagai Jendela Informasi Primata.</td>
                <td>Taman Refleksi adalah taman yang didesain untuk melakukan relaksasi dan olahraga ataupun sekedar berfoto ditaman tersebut dengan icon Orang Utan yang berada tepat di tengah kolam</td>
                <td>Taman Satwa Anak merupakan taman satwa yang menampilkan beberapa satwa yang disukai anak-anak seperti: ikan raksasa arapaima gigas yaitu ikan dengan berat mencapai lebih dari 100 kg.</td>
            </tr>
        </table>

        {/* <div className="container p-5">
          <div className="box">
            <h2 className="box-title">Pusat Primata Schmutzer</h2>
            <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/smutzer2.jpg" alt="Pusat Primata Schmutzer"/>
            <p className="box-description text-justify">
            Pusat Primata Schmutzer adalah salah satu pusat primata berkelas internasional<br></br> yang mempunyai peranan dalam konservasi primata Indonesia dan sekaligus sebagai Jendela Informasi Primata.
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
        </div> */}
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
