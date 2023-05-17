import Image from 'next/image'
import HausSkizze from '../public/bilder/haus2.png'
import HausSkizze1 from '../public/bilder/haus1.png'

export default function skizze() {

  
  return (
    <div>
      <div className="skizzeBildContainer">
   
        <div className="skizzeBild">
          <Image  src={HausSkizze} layout="cover" alt="Card example image"/>
        </div>

        <div className="skizzeBild">
          <Image src={HausSkizze1}  layout="cover" alt="Card example image"/>
        </div>

      </div>
      
    </div>
  )
}
