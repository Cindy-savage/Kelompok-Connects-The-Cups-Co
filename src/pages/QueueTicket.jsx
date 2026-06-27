import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function QueueTicket() {
  const [ticketNo, setTicketNo] = useState('A000');
  const [tanggal, setTanggal] = useState('—');
  const [jam, setJam] = useState('—');
  const [total, setTotal] = useState('0');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('antrian') || '{}');
    const count = saved.counter || 0;
    
    setTicketNo('A' + String(count).padStart(3, '0'));
    setTotal(String(count));

    const now = new Date();
    setTanggal(now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }));
    setJam(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="struk-wrap">
      <div className="struk">
        {/* Header struk */}
        <div className="struk-header">
          <img src="/assets/images/logo.png" alt="Logo" className="struk-logo" />
          <h2>The Cups &amp; Co</h2>
          <p className="struk-sub">Specialty Coffee · Medan</p>
          <p className="struk-address">Jl. Gunung Krakatau No.25A, Medan</p>
        </div>

        <div className="struk-line dashed"></div>

        {/* Info waktu */}
        <div className="struk-meta">
          <div className="struk-meta-row">
            <span>Tanggal</span>
            <span id="struktanggal">{tanggal}</span>
          </div>
          <div className="struk-meta-row">
            <span>Waktu Ambil</span>
            <span id="strukjam">{jam}</span>
          </div>
          <div className="struk-meta-row">
            <span>Total Antrian Hari Ini</span>
            <span id="totalAntrian">{total}</span>
          </div>
        </div>

        <div className="struk-line dashed"></div>

        {/* Nomor besar */}
        <p className="struk-label-no">Nomor Antrian Anda</p>
        <div className="nomor">
          <h1 id="nomorAntrian">{ticketNo}</h1>
        </div>

        <div className="struk-line dashed"></div>

        {/* Pesan */}
        <p className="struk-msg">Silakan menunggu giliran Anda<br />di area yang telah disediakan.</p>
        <p className="struk-thanks">Terima kasih telah berkunjung ☕</p>

        <div className="struk-line solid"></div>

        <p className="struk-footer-note">*Nomor antrian hanya berlaku hari ini<br />dan akan direset esok hari.</p>

        {/* Tombol cetak */}
        <button className="btn-print" onClick={handlePrint}>🖨 Cetak Struk</button>

        <Link to="/antrian" className="btn-back-antrian">← Kembali</Link>
      </div>
    </div>
  );
}
