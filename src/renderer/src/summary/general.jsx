import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const General = () => {
    const data = useContext(DataContext)

    const convertDate = (date) => {
        const partsDate = date.split("-")
        const newDate = partsDate[2] + "/" + partsDate[1] + "/" + partsDate[0]
        return newDate
    }

    return (
        <div className="flex flex-col w-2/5 items-center gap-8 rounded-xl">
            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] uppercase font-bold">Nome do Colaborador</span>
                <span className="text-white font-mont text-sm">{data.name}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] uppercase font-bold">E-mail Corporativo</span>
                <span className="text-white font-mont text-sm">{data.email}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] uppercase font-bold">Departamento</span>
                <span className="text-white font-mont text-sm">{data.department}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] uppercase font-bold">Data</span>
                <span className="text-white font-mont text-sm">{convertDate(data.dateExpense)}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] uppercase font-bold">Local</span>
                <span className="text-white font-mont text-sm">{data.place}</span>
            </div>
        </div>
    )
}

export default General