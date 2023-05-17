import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import jsonDach from '../../jsondb/dach'


export default function BilderListe() {

    const router = useRouter()
    const {dach} = router.query
    const picture = jsonDach.dach.find((a) => a.url === dach)

    if(picture) {

  return (
    <div>
      <div className="bildDecoration">
        <div className="urlBild">
            <Link href="/dach">
                <Image className='border border-4 border-white shadow' src={picture.bild} alt={picture.name} width={710} height={840} />
            </Link>
            <div className="card-body">
                  <h4 style={{color: "black", backgroundColor:"white", width:"auto"}} className="card-title mt-2 border border-dark ">{picture.title}</h4>
                  <p className="card-text border border-dark" style={{backgroundColor: "white", width:"440px", padding:"10px"}}>{picture.beschreibung}</p>
                  <p><Link href="/dach" className="paper-btn btn-secondary text-decoration-none">zurück</Link></p>
                  <p><br/></p>
            </div>
        </div>
    </div>
    </div>
  )
  }
}