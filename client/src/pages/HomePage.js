import React from 'react';

const HomePage = () => (
  <div>
    <h1>Welcome to Ideal Home Project</h1>
    <div className="features">
      <div className="feature">
        <h3>Interactive Home Customization Tool</h3>
        <p>This feature allows users to customize their home layout and design in real-time. For example, users can drag and drop furniture, change paint colors, and see a 3D model of their customized home.</p>
      </div>
      <div className="feature">
        <h3>Smart Home Integration</h3>
        <p>Integrating smart home technology allows users to control various aspects of their home remotely. Examples include smart lighting control, where users can adjust brightness and color, and security camera monitoring with live video feeds.</p>
      </div>
      <div className="feature">
        <h3>Comprehensive Service Listings and Booking System</h3>
        <p>A detailed list of services offered, such as home renovation and landscaping, along with an online booking system. Users can schedule consultations or service appointments directly through the website.</p>
      </div>
    </div>
  </div>
);

export default HomePage;
