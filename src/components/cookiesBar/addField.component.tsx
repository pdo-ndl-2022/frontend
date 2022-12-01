import { useState } from "react"

export const AddFields = () => {
    const [nbFields, setNbFields] = useState(1)
    const incrementNbFields = () => setNbFields(nbFields+1)
    return <>
        {/* {for (let i = 0; i < nbFields; i++){
            <span onClick={incrementNbFields}> + </span>
            <input type="text"/>
        }} */}
        </>
}