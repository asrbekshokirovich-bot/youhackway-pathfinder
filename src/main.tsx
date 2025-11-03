import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Yuhakway CRM</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        This is a React Native Expo mobile application.
      </p>
      <p style={{ marginTop: '1rem', opacity: 0.7 }}>
        Please run the mobile app from the <code>frontend/</code> directory.
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
