import { useState } from "react"
import { useForm } from "react-hook-form"
// import { styled } from "styled-components"


export const FormFields = ({ setStep }: { setStep: (str: string) => void}) => {
    const [error, setError] = useState("")
    const onclick = () => {
        if (document.getElementById("form3")) {
            // @ts-ignore
          if ((document.getElementById("form0")?.value == "V") &&
            // @ts-ignore
                (document.getElementById("form1")?.value == "III") &&

            // @ts-ignore
            (document.getElementById("form2")?.value == "II") &&
            // @ts-ignore
                (document.getElementById("form3")?.value == "I")) {
                setStep("final")
            }

            else setError("Tu n'as pas retiré tous les cookies")
        } else setError("Il te manque des éléments...")
        console.log(error)
    }
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }

    const [hover, setHover] = useState(false)
    const [left, setLeft] = useState(false)
    const [nbFields, setNbFields] = useState(1)
    const incrementNbFields = () => setNbFields(nbFields + 1)
    const fields = []
    for (let i = 0; i < nbFields; i++) {
        if (i < 4) fields.push('_')
    }
    return <div>
        {
            fields.map((object, i) =>
                <div style={{
                    marginTop: "3px"
                }} key={i}>
                    <span onClick={incrementNbFields}> + </span>
                    <input type="text" id={"form" + i} />
                </div>
            )}
        <p style={{ color: "red" }}>Vous ne devriez pas ajouter plus d'éléments</p>
        <div style={{ display: "flex", justifyContent: left?"start":"end" }}>
            <button
                onMouseEnter={() => {setHover(true); setLeft(!left)}}
                onMouseLeave={() => setHover(false)}
                style={{ backgroundColor: hover ? "yellow" : "blue", }}
                onClick={onclick}
            >
                Valider
            </button>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
            <p style={{ color: "blue" }}>{error}</p>
        </div>

    </div>
}
