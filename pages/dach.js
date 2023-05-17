import Image from 'next/image'
import Link from "next/link"
import jsonDach from '../jsondb/dach'


export default function Gallery() {
  return (
    <div className="bilderMap">
       {jsonDach.dach.map((dächer) => (
                <div key={dächer.id} className="einzelBild">
                    <Link href={`/liste2/${dächer.url}`} passHref>
                        <Image variant="top" src={dächer.bild} width={260} height={200} alt="Skizze" className="border border-white"/>
                    </Link>   
                  <h5 className="card-text border border-1 border-dark shadow" style={{backgroundColor: "white", display:" flex", overflow: "hidden", width:"250px"}}>{dächer.title}</h5>   
                </div> 
            ))}
    </div>
  )
}
