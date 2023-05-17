import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHidden(window.pageYOffset > 100);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky-top ${hidden ? 'hidden' : ''}`} style={{ backgroundColor:"transparent", justifyContent:"center"}}>
     
        <div className="linkDiv">
          <div className="link">
            <Link href="/" className="paper-btn btn-primary text-decoration-none text-black">
              Haus
            </Link>
          </div>

          <div className="link">
            <Link href="/skizze" className="paper-btn btn-primary text-decoration-none text-black">
              Skizzen
            </Link>
          </div>

          <div className="link">
            <Link href="/harteArbeit" className="paper-btn btn-primary text-decoration-none text-black">
              Bautechnik
            </Link>
          </div>

          <div className="link">
            <Link href="/material" className="paper-btn btn-primary text-decoration-none text-black">
              Material
            </Link>
          </div>
        </div>
   
    </nav>
  );
}
