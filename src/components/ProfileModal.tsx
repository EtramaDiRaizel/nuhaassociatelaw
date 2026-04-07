"use client";

import React, { useEffect } from "react";

const profilesData: Record<string, any> = {
  nuha: {
    name: "Nur Nuha Suhaimi",
    role: "Managing Partner | Head of Corporate Insolvency",
    department: "Corporate Litigation & Debt Recovery",
    experience: "15",
    qualification: "Bachelor of Laws (Hons) from Universiti Teknologi MARA (UiTM); Advocate & Solicitor of the High Court of Malaya.",
    language: "English, Bahasa Malaysia, Mandarin",
    member: "Malaysian Bar Council; International Association of Restructuring, Insolvency & Bankruptcy Professionals (INSOL).",
    achievement: "Leading Individual in Dispute Resolution (Legal 500); Specialist in Companies Act 2016 recovery strategies.",
    about: "Nuha is the founding partner of Nuha & Associates. With 15 years of experience at the Bar, she specializes in high-value corporate insolvency and complex debt recovery. She is widely recognized for her strategic approach to compulsory winding-up proceedings and her ability to navigate the procedural intricacies of the High Court to protect creditor rights.\n\nHer experience includes acting for major corporations in multi-million ringgit recovery actions. She has extensive hands-on experience in evaluating corporate liabilities and managing the strategic development of litigation portfolios. Her professional development includes specialized training in insolvency law led by international practitioners and the Malaysian Insolvency Department.",
  },
  liyana: {
    name: "Nurliyana Amani Zainodin",
    role: "Senior Associate | Lead Counsel",
    department: "Debt Recovery & Digital Compliance",
    experience: "10",
    qualification: "Bachelor of Laws (Hons) from Universiti Malaya (UM).",
    language: "English, Bahasa Malaysia.",
    member: "Selangor Bar Committee; Associate Member of the Asian Patent Attorneys Association (APAA).",
    achievement: "Pioneer of the firm's \"Digital Litigation Workflow\"; Expert in AMLA/KYC Compliance and Data Privacy.",
    about: "Liyana specializes in the procedural execution of debt recovery and digital compliance. She is the architect behind the firm's Digital Client Portal, ensuring that clients have real-time transparency into their case milestones. Her practice focuses on the intersection of technology and law, ensuring all filings meet strict technical standards to prevent procedural strikes.\n\nHer combination of technical insight and practical knowledge of the legal system has helped clients manage large-scale data protection and identity verification processes. She joined Nuha & Associates as a Senior Associate in 2026 and has since been recognized for her efficiency in managing the firm's digital transformation.",
  },
  hamzah: {
    name: "Hamzah Shahadrian",
    role: "Senior Associate | Construction & Infrastructure Specialist",
    department: "Construction Law & Adjudication",
    experience: "12",
    qualification: "LLB (Hons) from University of Manchester, UK; Certificate in Legal Practice (CLP).",
    language: "English, Bahasa Malaysia.",
    member: "Society of Construction Law Malaysia (SCL).",
    achievement: "Successfully handled adjudications exceeding RM 50M under the Construction Industry Payment and Adjudication Act (CIPAA).",
    about: "Hamzah brings a deep technical understanding of construction and infrastructure contracts to the firm. He specializes in disputes arising from large-scale residential and commercial development projects. His expertise is vital in identifying valid claims and transforming complex construction disputes into liquidated debts.\n\nHamzah’s experience includes conducting patentability-like assessments of construction techniques and evaluating freedom-to-operate in engineering disputes. He works closely with technical experts to verify project specifications, ensuring that client claims are backed by rigorous factual and technical evidence.",
  },
  aina: {
    name: "Aina Azrina",
    role: "Senior Associate | Corporate Recovery & Liquidation",
    department: "Corporate Secretarial & Insolvency",
    experience: "9",
    qualification: "Bachelor of Laws (Hons) from Universiti Kebangsaan Malaysia (UKM).",
    language: "English, Bahasa Malaysia.",
    member: "Affiliate of the Malaysian Institute of Chartered Secretaries and Administrators (MAICSA).",
    achievement: "Specialist in asset tracing and corporate restructuring strategies.",
    about: "Aina focuses on the backend of corporate recovery. She assists clients in navigating the post-winding-up phase, working directly with court-appointed liquidators to maximize asset returns. Her deep knowledge of the Companies Commission of Malaysia (SSM) allows her to provide strategic guidance on parent-subsidiary liabilities.\n\nIn addition to coordinating filings across multiple jurisdictions, Aina’s experience includes evaluating freedom-to-operate assessments for companies in financial distress. Her practical knowledge of the patent and corporate secretarial systems helps clients identify valuable innovations even during the process of liquidation.",
  },
  yasmin: {
    name: "Yasmin Azizee",
    role: "Senior Associate | Alternative Dispute Resolution (ADR)",
    department: "Mediation & Arbitration",
    experience: "8",
    qualification: "LLB (Hons) from Universiti Teknologi MARA (UiTM); Accredited Mediator (MMC).",
    language: "English, Bahasa Malaysia.",
    member: "Malaysian Mediation Centre.",
    achievement: "Successfully settled numerous corporate disputes via mediation to avoid protracted court trials.",
    about: "Yasmin specializes in finding the balance between aggressive litigation and strategic settlement. While the firm is capable in court, Yasmin provides clients with alternative remedies that protect their cash flow and reputation. She is a registered mediator with a focus on commercial disputes.\n\nHer professional development includes specialized programs led by experienced international ADR practitioners. She has helped clients identify the most cost-effective routes to recovery, providing guidance through the process of both patent and commercial mediation. She joined the firm to lead the ADR division, prioritizing client empathy and outcome-driven results.",
  },
  nurul: {
    name: "Nurul Iman",
    role: "Senior Associate | Employment & Industrial Relations",
    department: "Employment Law in Insolvency",
    experience: "7",
    qualification: "LLB (Hons) from International Islamic University Malaysia (IIUM).",
    language: "English, Bahasa Malaysia, Arabic (Basic).",
    member: "Malaysian Industrial Relations Forum.",
    achievement: "Specialist in workforce management and wage protection during corporate insolvency.",
    about: "Nurul Iman provides a critical perspective on how corporate failure affects human capital. She advises on the priority of payments regarding employee wages and benefits when a company is faced with a winding-up petition.\n\nHer role includes evaluating disclosure requirements and conducting freedom-to-operate assessments regarding employment contracts in distressed sectors. Her combination of technical insight into labor laws and practical knowledge of the insolvency system provides holistic guidance to corporate clients during their most challenging periods.",
  }
};

interface ProfileModalProps {
  profileId: string;
  onClose: () => void;
}

export default function ProfileModal({ profileId, onClose }: ProfileModalProps) {
  const profile = profilesData[profileId];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!profile) return null;

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="profile-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="profile-modal-header">
          <h2>{profile.name}</h2>
          <p className="profile-role">{profile.role}</p>
        </div>

        <div className="profile-modal-body">
          <ul className="profile-details-list">
            <li><strong>Department:</strong> {profile.department}</li>
            <li><strong>Years of Experience:</strong> {profile.experience}</li>
            <li><strong>Qualification:</strong> {profile.qualification}</li>
            <li><strong>Language:</strong> {profile.language}</li>
            <li><strong>Member:</strong> {profile.member}</li>
            <li><strong>Professional Achievement:</strong> {profile.achievement}</li>
          </ul>

          <div className="profile-about">
            <h3>About {profile.name.split(" ")[0]}</h3>
            {profile.about.split("\n\n").map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-modal-overlay {
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
        .profile-modal-content {
          background: #fff;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 8px;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          animation: modalFadeIn 0.3s ease-out forwards;
        }
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .profile-modal-close {
          position: sticky;
          top: 1rem;
          float: right;
          margin-right: 1rem;
          background: rgba(0,0,0,0.05);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          color: #333;
        }
        .profile-modal-close:hover {
          background: rgba(0,0,0,0.1);
        }
        .profile-modal-header {
          padding: 2rem 2.5rem 1.5rem;
          border-bottom: 1px solid #eaeaea;
        }
        .profile-modal-header h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #111;
        }
        .profile-role {
          font-size: 1.1rem;
          color: #1565C0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .profile-modal-body {
          padding: 2rem 2.5rem;
        }
        .profile-details-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 6px;
        }
        .profile-details-list li {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.5;
        }
        .profile-details-list strong {
          color: #222;
          min-width: 180px;
          display: inline-block;
        }
        .profile-about h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: #222;
          font-family: var(--font-heading), serif;
        }
        .profile-about p {
          font-size: 1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.2rem;
        }
        @media (max-width: 600px) {
          .profile-modal-header, .profile-modal-body {
            padding: 1.5rem;
          }
          .profile-details-list strong {
            display: block;
            margin-bottom: 0.2rem;
          }
        }
      `}</style>
    </div>
  );
}
