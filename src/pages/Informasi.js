import React, { useState } from 'react';
import '../styles/informasi.css';


function Informasi() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan tindakan pengiriman pengaduan (misalnya, mengirim email atau mengirim ke server)
    console.log('Pengaduan terkirim:', { name, email, complaint });
    // Atur kembali nilai input
    setName('');
    setEmail('');
    setComplaint('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Peta Ragunan</h2>
      <div className="googlemap" align="center">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1WxhE_KdpD1pO36C0ow-q9HCQHuDMuGJL&ehbc=2E312F"
          width="1200"
          height="700"
          title="Google Maps"
        ></iframe>
      </div>

      <br></br>
      <h2 className="text-2xl font-bold mb-4">Berita Terbaru</h2>
      <div class="berita flex flex-row mx-auto pl-100">
        <div><h2></h2></div>
        <div><a href="https://ragunanzoo.jakarta.go.id/perubahan-jam-buka-selama-puasa/"><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2023/03/Screenshot_1.png"></img></a><h1 align="center" class="text-xl font-bold pt-5">Perubahan Jam Buka Selama Puasa</h1></div>
        <div class="px-10"><a href="https://ragunanzoo.jakarta.go.id/ganjil-genap-tidak-berlaku/"><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-18-at-09.27.34.jpeg"></img></a><h1 align="center" class="text-xl font-bold pt-5">Ganji Genap Tidak Berlaku</h1></div>
        <div><a href="https://ragunanzoo.jakarta.go.id/aturan-berkunjunga-selama-ppkm-level-3/"><img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-09-at-18.12.41-1.jpeg"></img></a><h1 align="center" class="text-xl font-bold pt-5">Aturan Berkunjung Selama PPKM</h1></div>
      </div>

      {/* <div className="berita">
        <table className="tabelberita table-auto">
          <tr className="trberita">
            <td class="tdberita">
              <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2023/03/Screenshot_1.png"></img>
            </td>
            <td class="tdberita">
              <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-18-at-09.27.34.jpeg"></img>
            </td>
            <td class="tdberita">
              <img src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-09-at-18.12.41-1.jpeg"></img>
            </td>
          </tr>
          <tr className="trdetailberita">
            <td className="tdd space-y-4">
              Perubahan Jam Buka Selama Puasa
            </td>
            <td>
              Ganjil Genap Tidak Berlaku
            </td>
            <td>
              Aturan Berkunjung Selama PPKM Level 3
            </td>
          </tr>
        </table>
      </div> */}


      <div className="complaint-box bg-gray-100 p-4 rounded-lg shadow-md mt-20 mb-20">
        <h3 className="text-lg font-bold mb-2" align="center">Kolom Pengaduan</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-field mb-4">
            <label htmlFor="name" className="block mb-2 font-bold">
              Nama:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full border border-gray-300 rounded py-2 px-3"
              required
            />
          </div>
          <div className="form-field mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded py-2 px-3 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              required
            />
          </div>
          <div className="form-field mb-4">
            <label htmlFor="complaint" className="block mb-2 font-bold">
              Keluhan:
            </label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={handleComplaintChange}
              className="w-full border border-gray-300 rounded py-2 px-3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Kirim Pengaduan
          </button>
        </form>
      </div>
    </div>
  );
}

export default Informasi;
