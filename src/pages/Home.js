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
            <tr class="tr1">
                <th class="th1" className="text-[25px] text-center">Pusat Primata Schmutzer</th>
                <th class="th1" className="text-[25px] text-center">Taman Refleksi</th>
                <th class="th1" className="text-[25px] text-center">Satwa Anak</th>
            </tr>
            <tr class="tr1">
                <td class="td1"><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/smutzer2.jpg" alt="Pusat Primata Schmutzer"/></td>
                <td class="td1"><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/IMG_3568-271x300.jpg" alt="Taman Refleksi"/></td>
                <td class="td1"><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/other-facilities-3b2.jpg" alt="Taman Satwa Anak"/></td>
            </tr>
            <tr class="tr1">
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
        <div className="py-10" align="center">
          <iframe width="900" height="600" src="https://www.youtube.com/embed/Ps4hqQVhcMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="content-center">
        <table class="tabel2">
          <tr class="tr2">
            <td class="td2">
              <p align="justify" className="detail text-lg mt-4">Selamat datang di Taman Margasatwa Ragunan. Sebuah taman seluas 147 hektar dan berpenghuni lebih dari 2.000 ekor satwa serta ditumbuhi lebih dari 50.000 pohon membuat suasana lingkungannya sejuk dan nyaman. Lahannnya tertata dan terbangun serta sebagian lagi masih dikembangkan menuju suatu kebun binatang yang modern sebagai identitas kota Jakarta.</p>
              <p align="justify" className="detail text-lg mt-4">
                Kebun Binatang Ragunan adalah salah satu kebun binatang terbesar di Indonesia. Dengan luas
                lebih dari 140 hektar, kebun binatang ini merupakan rumah bagi berbagai jenis hewan dari
                seluruh dunia. Nikmati pengalaman menarik dalam menjelajahi keindahan alam dan melihat
                keanekaragaman fauna yang ada di sini.
              </p>
              <br></br>
              <h4 class="visimisi"><b>VISI DAN MISI TAMAN MARGASATWA RAGUNAN</b></h4><br></br>
              <h3 class="vm"><b>VISI</b></h3>
              <h2 class="vmd">Menjadikan Taman Margasatwa Ragunan seperti Kebun Binatang di Negara Maju yang dihuni oleh satwa-satwa yang sejahtera.</h2>
              <h3 class="vm"><b>MISI</b></h3>
              <h2 class="vmd">
                1. Meningkatkan kualitas kesejahteraan satwa<br></br>
                2. Meningkatkan kualitas pendidikan lingkungan<br></br>
                3. Meningkatkan hubungan ilmiah dengan universitas, instansiterkait, dan lembaga konservasi<br></br>
                4. Meningkatkan profesionalisme sumber daya manusia<br></br>
                5. Meningkatkan hubungan antar Lembaga Konservasi di dalam dan luar negeri melalui program tukar menukar satwa;<br></br>
                6. Meningkatkan kualitas pelayanan pengunjung;<br></br>
                7. Meningkatkan cinta satwa kepada masyarakat.
              </h2>
            </td>
            <td class="td2">
                <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/local_maps.jpg"></img>
            </td>
          </tr>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
