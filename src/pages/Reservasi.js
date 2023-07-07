// ReservationPage.js
import React, { useState } from 'react';
import '../styles/tiket.css';

function ReservationPage() {
  const [ticketType, setTicketType] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [isTicketOrdered, setIsTicketOrdered] = useState(false);

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };

  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(Number(e.target.value));
  };

  const handleOrderTicket = () => {
    if (ticketType && ticketQuantity > 0) {
      console.log(`Nama Tiket: ${ticketType}, Jumlah: ${ticketQuantity}, Total Harga: ${ticketQuantity * 10000}`);
    } else {
      console.log('Harap lengkapi pilihan tiket dan jumlah tiket yang valid.');
    }
    setIsTicketOrdered(true);
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-heading">Informasi Tiket dan Pembelian Tiket</h1>

      <div className="reservation-section">
        <h2 className="reservation-subheading">Tarif Masuk Pengunjung</h2>
        <img
          src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/ticket-01.jpg"
          alt="Tarif Masuk Pengunjung"
          className="ticket-image"
        />
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Jenis</th>
              <th>Tarif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dewasa</td>
              <td>Rp. 4.000,-/orang</td>
            </tr>
            <tr>
              <td>Anak-anak</td>
              <td>Rp. 3.000,-/orang</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="reservation-section">
        <h2 className="reservation-subheading">Tarif Penitipan Kendaraan / Parkir</h2>
        <img
          src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/ticket-02.jpg"
          alt="Tarif Penitipan Kendaraan / Parkir"
          className="ticket-image"
        />
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Jenis Kendaraan</th>
              <th>Tarif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bus besar, truk besar, mobil box besar</td>
              <td>Rp. 15.000,-/hari</td>
            </tr>
            <tr>
              <td>Bus kecil, truk kecil, mobil box kecil, pick up besar</td>
              <td>Rp. 12.500,-/hari</td>
            </tr>
            <tr>
              <td>Mobil sedan, minibus/sejenis (termasuk dalam bentuk pickup kecil)</td>
              <td>Rp. 6.000,-/hari</td>
            </tr>
            <tr>
              <td>Sepeda motor, kendaraan roda tiga</td>
              <td>Rp. 3.000,-/hari</td>
            </tr>
            <tr>
              <td>Sepeda</td>
              <td>Rp. 1.000,-/hari</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="reservation-section">
        <h2 className="reservation-subheading">Pemakaian Fasilitas</h2>
        <img
          src="https://ragunanzoo.jakarta.go.id/wp-content/uploads/2014/10/ticket-03.jpg"
          alt="Pemakaian Fasilitas"
          className="ticket-image"
        />
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Fasilitas</th>
              <th>Tarif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kuda tunggang</td>
              <td>Rp. 5.000,-/satu kali keliling</td>
            </tr>
            <tr>
              <td>Onta tunggang</td>
              <td>Rp. 7.500,-/satu kali keliling</td>
            </tr>
            <tr>
              <td>Taman Satwa Anak</td>
              <td>Rp. 2.500,-/satu kali keliling</td>
            </tr>
            <tr>
              <td>Perahu Angsa</td>
              <td>Rp. 18.000,-/satu kali keliling</td>
            </tr>
            <tr>
              <td>Kereta keliling</td>
              <td>Rp. 10.000,-/satu kali keliling</td>
            </tr>
            <tr>
              <td>Sepeda tunggal</td>
              <td>Rp. 10.000,-/orang</td>
            </tr>
            <tr>
              <td>Sepeda ganda</td>
              <td>Rp. 15.000,-/orang</td>
            </tr>
            <tr>
              <td>Kuda bendi</td>
              <td>Rp. 15.000,-/satu kali keliling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="reservation-section">
        <h2 align="center" className="reservation-subheading"><b>Pemesanan Tiket</b></h2>
        <div className="reservation-ticket-form">
          <label htmlFor="ticketType">Jenis Tiket:</label>
          <select id="ticketType" value={ticketType} onChange={handleTicketTypeChange}>
            <option value="">-- Pilih Jenis Tiket --</option>
            <option value="Dewasa">Dewasa</option>
            <option value="Anak-anak">Anak-anak</option>
            <option value="Bus besar, truk besar, mobil box besar">Bus besar, truk besar, mobil box besar</option>
            <option value="Bus kecil, truk kecil, mobil box kecil, pick up besar">Bus kecil, truk kecil, mobil box kecil, pick up besar</option>
            <option value="Mobil sedan, minibus/sejenis (termasuk dalam bentuk pickup kecil)">Mobil sedan, minibus/sejenis (termasuk dalam bentuk pickup kecil)</option>
            <option value="Sepeda motor, kendaraan roda tiga">Sepeda motor, kendaraan roda tiga</option>
            <option value="Sepeda">Sepeda</option>
            <option value="Kuda tunggang">Kuda tunggang</option>
          </select>
          <label htmlFor="ticketQuantity">Jumlah Tiket:</label>
          <input
            type="number"
            id="ticketQuantity"
            value={ticketQuantity}
            onChange={handleTicketQuantityChange}
          />
          <button className="ease-in duration-300 ..." onClick={handleOrderTicket}>Pesan</button>
        </div>
      </div>
    

{isTicketOrdered && (
  <div className="notification">
    Terima kasih Telah memesan tiket.
  </div>
)}
</div>
);
}

export default ReservationPage;
