import Image from "next/image";
import coverPicture1 from "../public/bilder/coverBilder/hausCover1.jpg";
import coverPicture2 from "../public/bilder/coverBilder/hausCover2.jpg";
import coverPicture4 from "../public/bilder/coverBilder/hausCover4.jpg";
import coverPicture3 from "../public/bilder/coverBilder/hausCover3.jpg";


export default function Home() {
  return (
   
    <div className="homeCover">

      <div>
        <Image src={coverPicture1} width={600} height={400} alt="coverPicture1"/>
      </div>

      <div className="HausCover" >
   

        <h1
          className="shadow shadow-5 rounded-5"
          style={{ fontFamily: "arial", color: "white", marginTop:"50px" }}>
          FASZINATION TINY HÄUSER
        </h1>

        <div style={{ paddingBottom: "10px" }}>
          <hr className="border border-3 border-white rounded-3"/>
        </div>

        
        <p style={{marginTop: "20px", textAlign: "center"}}>
          Hallo Besucher! <br/>
          Es freut mich, dass du dich für die Faszination des Bauens und Wohnens 
          von Tiny Häusern interessierst. <br/> Dies ist mein Beitrag um eine alternative Wohnmöglichkeit oder besser, 
          eine Rückzugsmöglichkeit vom stressigen Alltag vorzustellen.

        </p>

          <div>
            <Image src={coverPicture4} width={600} height={400} alt="coverPicture4"/>
          </div>

          <p style={{marginTop: "20px"}}>
          Diese kleinen Häuser, die oft auf Rädern oder einer festen 
          Grundlage gebaut werden, haben typischerweise eine Größe 
          von 9 bis 38 Quadratmetern und sind somit optimal für Einzelpersonen{" "}
          oder Paare, die ihr Leben vereinfachen möchten. 
          Trotz ihrer geringen Größe sind viele Tiny Häuser 
          funktional und stilvoll gestaltet.  
          </p>

          <div>
            <Image src={coverPicture2} width={600} height={400} alt="coverPicture2"/>
          </div>

          <p style={{marginTop: "20px"}}>  
          Vielleicht hast du schon einmal daran gedacht, dein eigenes Tiny Haus
          zu bauen oder möchtest einfach ein Tiny Haus in deinem Garten als Rückzugsort oder 
          Gästehaus haben. Es gibt unzählige Möglichkeiten, ein Tiny Haus nach deinen individuellen 
          Bedürfnissen und Vorstellungen zu gestalten und zu bauen. Es erfordert zwar einiges an Planung 
          und Arbeit, aber das Ergebnis kann sich lohnen.
        </p>
      </div>

      <div>
        <Image src={coverPicture3} width={600} height={400} alt="coverPicture3"/>
      </div>

      <p style={{marginTop: "20px", textAlign: "center"}}>
          Ein Tiny Haus ist nicht nur eine Wohnlösung, 
          sondern auch eine Einstellung. Es erfordert eine Veränderung in der Art und Weise, wie wir über den Platz, 
          den wir brauchen, nachdenken und wie wir unser Leben organisieren.
          Einheitsarchitektur die Wohnhäuser vom Fließband produziert mag seine Vorteile haben, jedoch ist es ein grundlegendes 
          menschliches Bedürfnis, unser Zuhause selber zu gestalten. Wir wollen uns in unseren Häusern wohl und geborgen fühlen 
          und unsere persönlichen Vorlieben und Stile ausdrücken. Der Mensch sollte nicht nur 
          die Möglichkeit haben groß zu denken, sondern auch klein. <br/>  
          Hör doch mal auf deine Innere Stimme  und frag dich selst was Freiheit für dich bedeutet?
      </p>

      <div className="kontaktText">
        <div>
          <h3
            className="coverText2"
            style={{ color: "white", fontFamily: "arial", marginBottom:"-10px" }}
          >
            Fragen?
          </h3>
          <br />
          Ich wünsche dir viel Erfolg und Freude bei deinem Vorhaben. <br/> 
          Kontaktiere mich für einen Besichtigungstermin oder
          für Fragen, rund um das Bauen von einem Tiny Haus.
        </div>

        <div >
          <div
            
            style={{ backgroundColor: "transparent", marginTop:"15px" }}
            className="paper-btn btn-primary border border-white shadow text-white text-decoration-none">
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="mailto: johannkirr3110@gmail.com">
              Kontakt
            </a>
          </div>
        </div>
      </div>

   
    </div>
   
  );
}
