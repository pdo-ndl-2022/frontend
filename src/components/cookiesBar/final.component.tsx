import { useEffect } from "react"
import { Timer } from "./timer.component"
import { isMacOs } from 'react-device-detect'

export const Final = ({setStep}: any) => {
    useEffect(() => {
        document.addEventListener('keydown', keydownHandler)
        return () => document.removeEventListener('keydown', keydownHandler)
    }, [])

    function keydownHandler(e: KeyboardEvent) {
        console.log(e)
        if (e.key === 'Escape') {
            e.preventDefault() // disable default browser binding if triggered
            setStep("")
        }
    }
    return <div style={{
        top: "15%",
        left: "10%",
        backgroundColor: "lightgrey",
        width: "80%",
        height: "70%",
        zIndex: 1,
        position: "fixed",
        paddingLeft: "3%",
        paddingRight: "3%",
        overflow: "scroll",
        borderRadius: "2%",
        textAlign: "center",
        paddingTop: "10%",
    }}>
        <p>Vous avez réussi à <i>é</i>viter les <i>c</i>ookies ! You<i>h</i>ou !</p>
        <p>Vous pouvez <i>a</i>ussi choisir de les acce<i>p</i>ter ou attendre la fin du compteur</p>
        <button>Accepter les cookies</button>
        <Timer />
    </div>
}