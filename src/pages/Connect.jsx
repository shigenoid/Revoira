import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import './css/Connect.css';

const Connect = () => {
  // Correct QR code to compare against
  const navigate = useNavigate();

  const correctQrCode = 'ManILoveJeffBuckley';

  useEffect(() => {
    // Initialize the QR code scanner
    const scanner = new Html5QrcodeScanner('qr-scanner', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    // Render the scanner
    scanner.render(
      (data) => {
        console.log('Scanned QR code:', data);
        validateQrCode(data); // Validate the QR code
        scanner.clear(); // Stop scanning after a result is found
      },
      (err) => {
        console.error('Scanner error:', err); // Log errors to the console
      }
    );

    // Cleanup on unmount
    return () => scanner.clear();
  }, []);

  // Function to validate the QR code and run an empty task
  const validateQrCode = (qrCodeText) => {
    if (qrCodeText === correctQrCode) {
      runEmptyTask(); // Run the empty task
      navigate('/home');
    }
  };

  // Function to run an empty task
  const runEmptyTask = () => {

  };

  return (
    <div className="connect-container">
      {/* QR Scanner */}
      <div id="qr-scanner" className="scanner-container"></div>
    </div>
  );
};

export default Connect;