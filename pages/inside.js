import Image from 'next/image'
import Link from "next/link"
import jsonInside from "../jsondb/inside"


export default function Gallery() {
  return (
 
    <div className="bilderMap">
       {jsonInside.inside.map((room) => (
                <div key={room.id} className="einzelBild">
                    <Link href={`/liste3/${room.url}`} passHref>
                        <Image variant="top" src={room.bild} width={260} height={200} alt="Skizze" className="border border-white"/>
                    </Link>   
                  <h5 className="card-text border border-1 border-dark shadow" style={{backgroundColor: "white", display:" flex", overflow: "hidden", width:"250px"}}>{room.title}</h5>    
                </div> 
            ))}
    </div>

  )
}