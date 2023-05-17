import Link from "next/link"


export default function Fusszeile() {
    return (
      <div >
        <div className="fixed-bottom bg-black" style={{display: "flex", justifyContent:"right", opacity:0.8}}>
          <div className="footerButtons" style={{marginBottom: "-16px", marginTop: "5px"}}>
          <Link href="/datenschutz" className=" paper-btn btn-small text-decoration-none" style={{backgroundColor:"transparent", color:"white"}} >
            Datenschutz
          </Link>
          <Link href="/impressum" className=" paper-btn btn-small text-decoration-none" style={{backgroundColor:"transparent", color:"white"}}>
            Impressum
          </Link>
          </div>
        </div>
      </div>
    )
  }