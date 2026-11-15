import React from 'react';
import packageInfo from '../../package.json';
import './About.css';

function About({ isOpen, onClose }) {
  if (!isOpen) return null;

  const infoRows = [
    ['Package', packageInfo.name],
    ['Version', packageInfo.version],
    ['Description', packageInfo.description],
    ['Author', packageInfo.author]
  ].filter(([, value]) => value);

  return (
    <>
      {/* Backdrop */}
      <div className="about-backdrop" onClick={onClose}></div>

      {/* Modal */}
      <div className="about-modal">
        <button className="about-close-btn" onClick={onClose} title="Close">
          ✕
        </button>

        {/* Logo */}
        <div className="about-logo-container">
          <img src="/logo.png" alt="SubnetViz Logo" className="about-logo" />
        </div>

        {/* Title */}
        <h1 className="about-title">SubnetViz</h1>

        {/* Tagline */}
        <p className="about-tagline">
          AWS Subnet Visualization & Analytics
        </p>

        {/* Description */}
        <div className="about-description">
          <p>
            SubnetViz is a modern web application designed to help you visualize and analyze subnet allocation patterns in AWS VPCs. Identify fragmentation, optimize IP block allocation, and plan for large-scale EKS deployments with confidence.
          </p>
        </div>

        {/* Features */}
        <div className="about-features">
          <h3>Key Features</h3>
          <ul>
            <li>Advanced subnet filtering and search</li>
            <li>Real-time IP allocation visualization</li>
            <li>Fragmentation analysis and scoring</li>
            <li>Large subnet pagination support</li>
            <li>Dark/Light theme support</li>
          </ul>
        </div>

        {/* Footer Info */}
        <div className="about-footer">
          {infoRows.map(([label, value]) => (
            <div className="about-info-row" key={label}>
              <span>{label}:</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button className="about-action-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
}

export default React.memo(About);
