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
    const [transport, setTransport] = useState(0)
    const [parking, setParking] = useState(0)
    const [vehicle, setVehicle] = useState(0)
    const [accommodation, setAccommodation] = useState(0)
    const [meals, setMeals] = useState(0)
    const [phone, setPhone] = useState(0)
    const [others, setOthers] = useState(0)
    const [comments, setComments] = useState("")
    const [reasonMeals, setReasonMeals] = useState("")
    const [highMeals, setHighMeals] = useState(true)

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
        reasonMeals,
        setReasonMeals,
        highMeals,
        setHighMeals,
    }


    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}