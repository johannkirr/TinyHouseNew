import { useState, useEffect } from "react";
import Logo from "../komponenten/Logo";
import Link from 'next/link'

export default function Unterboden() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1550);

    return () => clearTimeout(timer);

  }, []);
  
  return (
    <div className='bilderDiv'>
       {isLoading ? (
        <Logo/>
      ) : (

      <>
      <div className="bautechnikLink">
      <Link href="/unterboden" className="paper-btn btn-primary-white text-decoration-none text-black" style={{width:"15rem"}}>
        Unterboden
      </Link>
      </div> 

      <div className="bautechnikLink">
      <Link href="/inside" className="paper-btn btn-primary-white text-decoration-none text-black" style={{width:"15rem"}} >
        Innen
      </Link>
      </div>

      <div className="bautechnikLink">
      <Link href="/dach" className="paper-btn btn-primary-white text-decoration-none text-black" style={{width:"15rem"}} >
        Dach
      </Link>
      </div> 

      </>

      )}

    </div> 
  )
}

