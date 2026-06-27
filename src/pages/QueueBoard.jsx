import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function getAntrianData() {
  let saved = JSON.parse(localStorage.getItem('antrian') || '{}');
  if (saved.tanggal !== getToday()) {
    saved = { tanggal: getToday(), counter: 0 };
    localStorage.setItem('antrian', JSON.stringify(saved));
  }
  return saved;
}

function saveAntrianData(data) {
  localStorage.setItem('antrian', JSON.stringify(data));
}

export default function QueueBoard() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [showResetMsg, setShowResetMsg] = useState(false);

  useEffect(() => {
    const data = getAntrianData();
    setCounter(data.counter || 0);
  }, []);

  const ambilNomor = () => {
    const data = getAntrianData();
    data.counter = (data.counter || 0) + 1;
    saveAntrianData(data);
    setCounter(data.counter);
    navigate('/struk');
  };

  const resetAntrian = () => {
    if (window.confirm('Reset semua antrian hari ini? Nomor akan mulai dari A001 kembali.')) {
      const data = { tanggal: getToday(), counter: 0 };
      saveAntrianData(data);
      setCounter(0);
      setShowResetMsg(true);
      setTimeout(() => {
        setShowResetMsg(false);
      }, 2500);
    }
  };

  return (
    <div className="container antrian-container">
      <div className="antrian-board">
        <p className="antrian-eyebrow">☕ The Cups & Co</p>
        <h2>Antrian Cafe</h2>
        <p className="sub-antrian">Ambil nomor &amp; tunggu giliran dengan nyaman</p>

        <div className="antrian-status-card">
          <span className="antrian-status-label">Sedang Dilayani / Antrian Ke-</span>
          <span className="antrian-status-num" id="antrianInfo">{counter}</span>
          <span className="antrian-status-label">hari ini</span>
        </div>

        <button className="btn-ambil" onClick={ambilNomor}>
          Ambil Nomor Antrian
        </button>

        <div className="antrian-divider"></div>

        <button className="btn-reset-antrian" onClick={resetAntrian}>
          🔄 Reset Antrian Hari Ini
        </button>

        {showResetMsg && (
          <p id="resetMsg" className="reset-msg">
            ✓ Antrian berhasil direset ke A001
          </p>
        )}

        <p className="antrian-note">Antrian direset otomatis setiap hari</p>
      </div>
    </div>
  );
}
