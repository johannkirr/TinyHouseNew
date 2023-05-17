import Image from 'next/image'
import Link from "next/link"
import jsonUnterboden from '../jsondb/pictures'


export default function unterboden() {
  return (
    
       <div className="bilderMap">
        {jsonUnterboden.pictures.map((picture) => (
                <div key={picture.id} className="einzelBild">
                    <Link href={`/liste/${picture.url}`} passHref>
                        <Image variant="top" src={picture.bild} width={260} height={200} alt="Skizze" className="border border-white"/>
                    </Link>   
                  <h5 className="card-text border border-1 border-dark shadow" style={{backgroundColor: "white", display:" flex", overflow: "hidden", width:"250px"}}>{picture.title}</h5>    
                </div> 
            ))}
   
    </div>
  )
}
