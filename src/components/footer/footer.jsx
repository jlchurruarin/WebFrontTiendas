import React from 'react';
import '../footer/footer.css'

export default function Footer() {
  return (
    <footer bgColor='light' className='footer'>
      
        &copy; {new Date().getFullYear()} Copyright: {' '}
        <p> By Leandro Sarvi</p>
      
    </footer>
  );
}