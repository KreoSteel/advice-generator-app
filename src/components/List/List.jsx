import { useState, useEffect } from "react";
import { fetchSavedAdvices, deleteAdvice } from "../../services/adviceServices";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../Button/Button";
import "./List.css"

export default function List() {
    const [advices, setAdvices] = useState([])

    const getAdvices = async () => {
        try {
            const advices = await fetchSavedAdvices()
            setAdvices(advices)
            console.log("Advices: ", advices);
        } catch (error) {
            console.error("Error fetching advices:", error);
            setAdvices([])
        }
    }

    useEffect(() => {
        getAdvices()
    }, [])


    return (
        <div className="list-container">
            <div className="list">
                <h2>Saved Advices</h2>
                {advices.map(advice => (
                    <div key={advice.id} className="advice-item">
                        <p>"{advice.advice}"</p>
                        <Button style={{ minWidth: "1.5rem" }} onClick={() => deleteAdvice(advice.id)}><HiOutlineTrash /></Button>
                    </div>
                ))}
                <Button onClick={getAdvices}>Refresh</Button>
            </div>
        </div>
    )
}