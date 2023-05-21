import Image from "next/image"
import logos from '../public/bilder/logo2.svg'


export default function logo() {
  return (
    <div>
        <Image src={logos} className="App-logo" alt="logo"/>
    </div>
  )
}
