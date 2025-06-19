import axios from "axios";

export default async function fetchAdvice() {
    try{
        const response = await axios.get("https://api.adviceslip.com/advice")
        return response.data.slip;
    }
    catch(error){
        console.error("Error fetching advice from API:", error);
        throw error;
    }
}

export async function saveAdvice(advice) {
    try{
        const response = await axios.post("http://localhost:3000/advices", { advice })
        return response.data;
    }
    catch(error){
        console.error("Error saving advice:", error);
        throw error;
    }
}

export async function fetchSavedAdvices() {
    try{
        const response = await axios.get("http://localhost:3000/advices")
        console.log("Saved Advices: ", response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteAdvice(id) {
    try{
        const response = await axios.delete(`http://localhost:3000/advices/${id}`)
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}