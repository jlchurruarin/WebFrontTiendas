import React from 'react';
import '../footer/footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='descriptionFooter'>
      <p> Equipo MDA </p>
        &copy; {new Date().getFullYear()} Copyright: {' '}
      </div>
        
      
    </footer>
  );
}