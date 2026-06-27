import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TablePicker() {
  const navigate = useNavigate();

  const pilihMeja = (minOrang, maxOrang, label) => {
    sessionStorage.setItem('mejaTerpilih', JSON.stringify({ min: minOrang, max: maxOrang, label: label }));
    navigate('/reservasi');
  };

  return (
    <div>
      <div className="page-title">
        <h1>Pilih Kapasitas Meja</h1>
        <p>Sesuaikan dengan jumlah tamu</p>
      </div>

      <div className="table-section">
        <p className="section-eyebrow">Tersedia untuk anda</p>
        <div className="table-grid">

          {/* 1–2 orang */}
          <div className="table-card" onClick={() => pilihMeja(1, 2, 'Meja Kecil')} style={{ cursor: 'pointer' }}>
            <div className="table-pic">
              <div className="top"></div>
              <div className="leg-l"></div>
              <div className="leg-r"></div>
              <div className="seats-top">
                <div className="s"></div>
                <div className="s"></div>
              </div>
            </div>
            <h3>1 – 2 Orang</h3>
            <span className="sublabel">Meja Kecil</span>
          </div>

          {/* 3–4 orang */}
          <div className="table-card" onClick={() => pilihMeja(3, 4, 'Meja Standar')} style={{ cursor: 'pointer' }}>
            <div className="table-pic">
              <div className="top"></div>
              <div className="leg-l"></div>
              <div className="leg-r"></div>
              <div className="seats-top">
                <div className="s"></div>
                <div className="s"></div>
                <div className="s"></div>
                <div className="s"></div>
              </div>
            </div>
            <h3>3 – 4 Orang</h3>
            <span className="sublabel">Meja Standar</span>
          </div>

          {/* 4–6 orang */}
          <div className="table-card" onClick={() => pilihMeja(4, 6, 'Meja Keluarga')} style={{ cursor: 'pointer' }}>
            <div className="table-pic">
              <div className="top"></div>
              <div className="leg-l"></div>
              <div className="leg-r"></div>
              <div className="seats-top">
                <div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
              <div className="seats-bot">
                <div className="s"></div><div class="s"></div><div className="s"></div>
              </div>
            </div>
            <h3>4 – 6 Orang</h3>
            <span className="sublabel">Meja Keluarga</span>
          </div>

          {/* 7–8 orang */}
          <div className="table-card" onClick={() => pilihMeja(7, 8, 'Meja Besar')} style={{ cursor: 'pointer' }}>
            <div className="table-pic">
              <div className="top"></div>
              <div className="leg-l"></div>
              <div className="leg-r"></div>
              <div className="seats-top">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
              <div className="seats-bot">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
            </div>
            <h3>7 – 8 Orang</h3>
            <span className="sublabel">Meja Besar</span>
          </div>

          {/* 8–10 orang */}
          <div className="table-card" onClick={() => pilihMeja(8, 10, 'Meja Grup')} style={{ cursor: 'pointer' }}>
            <div className="table-pic">
              <div className="top"></div>
              <div className="leg-l"></div>
              <div className="leg-r"></div>
              <div className="seats-top">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
              <div className="seats-bot">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
            </div>
            <h3>8 – 10 Orang</h3>
            <span className="sublabel">Meja Grup</span>
          </div>

          {/* 10+ orang */}
          <div className="table-card" onClick={() => pilihMeja(10, 999, 'Pesta / Event')} style={{ cursor: 'pointer' }}>
            <div className="table-pic">
              <div className="top"></div>
              <div className="leg-l"></div>
              <div className="leg-r"></div>
              <div className="seats-top">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
              <div className="seats-bot">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
            </div>
            <h3>10+ Orang</h3>
            <span className="sublabel">Pesta / Event</span>
          </div>

          {/* VIP Room */}
          <div className="table-card vip" onClick={() => pilihMeja(1, 999, 'VIP Room')} style={{ cursor: 'pointer' }}>
            <div className="table-pic">
              <div className="top"></div>
              <div className="leg-l"></div>
              <div className="leg-r"></div>
              <div className="seats-top">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
              <div className="seats-bot">
                <div className="s"></div><div className="s"></div><div className="s"></div><div className="s"></div>
              </div>
            </div>
            <div className="vip-info">
              <span className="badge">VIP</span>
              <h3>VIP Room</h3>
              <span className="sublabel">Ruangan Eksklusif · Privat · Premium</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
