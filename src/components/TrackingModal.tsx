"use client";

import React, { useEffect, useState } from "react";

interface TrackingModalProps {
  onClose: () => void;
}

export default function TrackingModal({ onClose }: TrackingModalProps) {
  const [refNumber, setRefNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "searching" | "result">("idle");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refNumber.trim()) return;

    setStatus("searching");
    setTimeout(() => {
      setStatus("result");
    }, 1500);
  };

  return (
    <div className="tracking-modal-overlay" onClick={onClose}>
      <div className="tracking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="tracking-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="tracking-modal-header">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1565C0"
            strokeWidth="1.5"
            style={{ marginBottom: "1rem" }}
          >
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
            <path d="M16.5 9.4 7.55 4.24" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" y1="22" x2="12" y2="12" />
            <circle cx="18.5" cy="15.5" r="2.5" />
            <path d="M20.27 17.27 22 19" />
          </svg>
          <h2>Case Tracking</h2>
          <p>Insert your reference case number to track your case.</p>
        </div>

        <div className="tracking-modal-body">
          {status === "idle" && (
            <form onSubmit={handleTrack} className="tracking-form">
              <input
                type="text"
                placeholder="e.g. NA/2026/001"
                value={refNumber}
                onChange={(e) => setRefNumber(e.target.value)}
                required
                className="tracking-input"
              />
              <button type="submit" className="tracking-submit">
                Track Case
              </button>
            </form>
          )}

          {status === "searching" && (
            <div className="tracking-searching">
              <div className="loader"></div>
              <p>Searching database...</p>
            </div>
          )}

          {status === "result" && (
            <div className="tracking-result">
              <div className="result-icon-error">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3>No Case Found</h3>
              <p>We couldn't find any file associated with the reference number: <strong>{refNumber}</strong></p>
              <p className="result-tip">Please ensure the reference number is correct or contact your lead counsel for assistance.</p>
              <button onClick={() => setStatus("idle")} className="tracking-retry">
                Try Another Number
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tracking-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }
        .tracking-modal-content {
          background: #fff;
          width: 100%;
          max-width: 500px;
          border-radius: 12px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          animation: modalFadeIn 0.3s ease-out forwards;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tracking-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.05);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          color: #666;
        }
        .tracking-modal-close:hover { background: rgba(0,0,0,0.1); }
        .tracking-modal-header {
          padding: 3rem 2rem 1rem;
          text-align: center;
        }
        .tracking-modal-header h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: #111;
        }
        .tracking-modal-header p {
          color: #666;
          font-size: 0.95rem;
        }
        .tracking-modal-body {
          padding: 1rem 2rem 3rem;
        }
        .tracking-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .tracking-input {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .tracking-input:focus {
          border-color: #1565C0;
        }
        .tracking-submit, .tracking-retry {
          padding: 1rem;
          background: #1565C0;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .tracking-submit:hover, .tracking-retry:hover {
          background: #0D47A1;
        }
        .tracking-searching {
          text-align: center;
          padding: 2rem 0;
        }
        .loader {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #1565C0;
          border-radius: 50%;
          margin: 0 auto 1rem;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .tracking-result {
          text-align: center;
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .result-icon-error {
          margin-bottom: 1rem;
        }
        .tracking-result h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #c62828;
        }
        .tracking-result p {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        .result-tip {
          font-size: 0.85rem !important;
          color: #888 !important;
          margin-bottom: 2rem !important;
        }
      `}</style>
    </div>
  );
}
