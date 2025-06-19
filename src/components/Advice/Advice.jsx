import { useEffect, useState } from "react";
import fetchAdvice from "../../services/adviceServices";
import { saveAdvice } from "../../services/adviceServices";
import Button from "../Button/Button";
import "./Advice.css"

export default function Advice() {
    const [advice, setAdvice] = useState("Click the button to get advice!")

    const handleSaveAndGet = async () => {
        try {
            const adviceData = await fetchAdvice();
            setAdvice(adviceData.advice);
            await saveAdvice(adviceData.advice);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="advice-container">
            <h1>Advice Generator App</h1>
            <h2>{advice}</h2>
            <Button onClick={handleSaveAndGet}>Get and Save Advice</Button>
        </div>
    )
}