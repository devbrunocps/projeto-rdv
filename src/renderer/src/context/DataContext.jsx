import { createContext, useState } from "react"

export const DataContext = createContext({})

export function DataContextProvider({ children }) {
    const [screenForm, setScreenForm] = useState(1)
    const [screenSummary, setScreenSummary] = useState(1)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [dateExpense, setDateExpense] = useState("")

    const [place, setPlace] = useState("")
    const [transport, setTransport] = useState("")
    const [parking, setParking] = useState("")
    const [vehicle, setVehicle] = useState("")
    const [accommodation, setAccommodation] = useState("")
    const [meals, setMeals] = useState("")
    const [phone, setPhone] = useState("")
    const [others, setOthers] = useState("")
    const [comments, setComments] = useState("")

    const handleChange = (ev, setState) => {
        setState(ev.value)
    }

    const data = {
        handleChange,
        screenForm,
        setScreenForm,
        screenSummary,
        setScreenSummary,
        name,
        setName,
        email,
        setEmail,
        department,
        setDepartment,
        dateExpense,
        setDateExpense,
        place,
        setPlace,
        transport,
        setTransport,
        parking,
        setParking,
        vehicle,
        setVehicle,
        accommodation,
        setAccommodation,
        meals,
        setMeals,
        phone,
        setPhone,
        others,
        setOthers,
        comments,
        setComments,
    }


    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}