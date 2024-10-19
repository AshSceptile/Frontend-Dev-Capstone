import React from 'react';
import avatar from '../public/avatar.jpg'; // Ensure you have an image named avatar.jpg in the public folder.

const LandingSection = () => {
  return (
    <section id="landing">
      <img src={avatar} alt="Avatar" style={{ borderRadius: '50%', width: '150px' }} />
      <h1>Your Name</h1>
      <p>Short bio about you and your work.</p>
    </section>
  );
};

export default LandingSection;
