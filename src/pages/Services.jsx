import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <div className="page-title">
        <h1>Apa yang kamu butuhkan?</h1>
        <p>Pilih layanan di bawah ini</p>
      </div>

      <div className="services">
        <div className="services-grid">
          <Link to="/antrian" className="service-card">
            <div className="icon-wrap">☕</div>
            <h2>Antrian</h2>
            <p>
              Ambil nomor antrian kamu disini dan tunggu giliran dengan nyaman.
            </p>
            <span className="cta">Ambil Nomor →</span>
          </Link>

          <Link to="/pilih-meja" className="service-card">
            <div className="icon-wrap">🪑</div>
            <h2>Reservasi</h2>
            <p>
              Reservasi meja kamu sekarang dan pastikan tempat duduk favoritmu tersedia.
            </p>
            <span className="cta">Pesan Meja →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
