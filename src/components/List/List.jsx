import { deleteAdvice } from "../../services/adviceServices";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../Button/Button";
import "./List.css"

export default function List({ advices, onAdviceRemoved }) {
    const handleDelete = async (id) => {
        try {
            await deleteAdvice(id);
            onAdviceRemoved(id);
        } catch (error) {
            console.error("Error deleting advice:", error);
        }
    }

    return (
        <div className="list-container">
            <div className="list">
                <h2>Saved Advices</h2>
                {advices.map(advice => (
                    <div key={advice.id} className="advice-item">
                        <p>"{advice.advice}"</p>
                        <Button onClick={() => handleDelete(advice.id)}><HiOutlineTrash /></Button>
                    </div>
                ))}
            </div>
        </div>
    )
}