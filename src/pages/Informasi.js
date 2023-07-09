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
