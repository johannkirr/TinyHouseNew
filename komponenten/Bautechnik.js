
import Link from 'next/link'

export default function Unterboden() {
  
  return (
    <div className='bilderDiv'>
      <div className="bautechnikLink">
      <Link href="/unterboden" className="paper-btn btn-primary-white text-decoration-none text-black" style={{width:"15rem"}}>
        Unterboden
      </Link>
      </div> 

      <div className="bautechnikLink">
      <Link href="/dach" className="paper-btn btn-primary-white text-decoration-none text-black" style={{width:"15rem"}} >
        Dach
      </Link>
      </div> 

      <div className="bautechnikLink">
      <Link href="/inside" className="paper-btn btn-primary-white text-decoration-none text-black" style={{width:"15rem"}} >
        Innen
      </Link>
      </div>

    </div> 
  )
}

