import { useState } from "react";
import fetchAdvice from "../../services/adviceServices";
import { saveAdvice } from "../../services/adviceServices";
import Button from "../Button/Button";
import "./Advice.css"

export default function Advice({ onAdviceAdded }) {
    const [advice, setAdvice] = useState("Click the button to get your first advice!")

    const handleSaveAndGet = async () => {
        try {
            const adviceData = await fetchAdvice();
            setAdvice(adviceData.advice);
            const savedAdvice = await saveAdvice(adviceData.advice);
            onAdviceAdded(savedAdvice);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="advice-container">
            <h2>{advice}</h2>
            <Button onClick={handleSaveAndGet}>Get and Save Advice</Button>
        </div>
    )
}