import { useState } from "react";
import { FormFields } from "./addField.component";
import { Final } from "./final.component";

export const CookiesBar = () => {
  const [isAccepted, setIsAccepted] = useState(false)
  const [quit0, setQuit0] = useState(false)
  const [step, setStep] = useState("init")


  const accepted = () => {
    document.cookie = "cookie=accepted";
    setIsAccepted(true);
  }

  const xClicked = () => {
    console.log("start")
    setQuit0(true)
    setTimeout(() => setStep(""), 1000)
    setTimeout(() => setStep("step1"), 5000);
  }

  if (isAccepted) return <></>
  switch (step) {
    case "init":
      return <div style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingBottom: "2%",
        backgroundColor: "gray",
        zIndex: 1,
      }}>
        <p>Nous n'utilisons aucun cookies que vous pouvez refuser. Seulement des cookies nécessaires </p>
        <p>Mais vous pouvez essayer de les refuser. Bonne chance !</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div onClick={xClicked} > X </div>
          <button style={{ backgroundColor: "green", color: "white" }} onClick={accepted}>
            Accepter
          </button>
        </div>
      </div>
    case "step1":
      return <>
      <img src="cheveux2.png" alt="troll faux cheveux" 
      style={{
        zIndex:200,
        position:"fixed",
        opacity:0.3,
        top:"5%",
        right:0,
        transform: "scaleX(-1)"
      }}/>
      <div style={{
        top:"15%",
        left:"10%",
        backgroundColor: "#576905",
        width: "80%",
        height:"70%",
        zIndex: 1,
        position: "fixed",
        paddingLeft: "3%",
        paddingRight: "3%",
        overflow: "scroll",
      }}>
        <p style={{color: "#FF2BEA"}}>Afin de refuser les cookies, sélectionner les cookies que vous ne souaitez pas.</p>
        <p style={{color: "#FF2BEA"}}>Enfin en vrai vous faites ce que vous voulez parce que vous pouvez aussi les accepter.</p>
        <p style={{color: "#FF2BEA"}}>Liste des cookies :</p>
        <ul style={{color: "#FF2BEA"}}>
          <li>NUMERO 1 : Pixel Facebook</li>
          <li>NUMERO 2 : Adsense</li>
          <li>NUMERO 3 : Mesure d’audience</li>
          <li>NUMERO 5 : Déveloper et améliorer nos produits</li>
        </ul>
        <p style={{color: "#FF2BEA"}}> Ajouter les cookies que vous souhaitez de pas garder</p>
        <p style={{color: "#4C5E02"}}> Les numéros des cookies non voulus sont a inscrire en chiffre romaines uniquement</p>
          <FormFields setStep={setStep} />
        <p style={{color: "#4C5E02"}}> et du plus grand au plus petit </p>
      </div>
      </>
    case "final":
      return <Final setStep={setStep}></Final>
    default:
      <></>
  }


};
