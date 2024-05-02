import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const General = () => {
    const data = useContext(DataContext)

    return (
        <div className="flex flex-col w-2/5 items-center gap-8 rounded-xl">
            <div className="flex flex-col text-center">
                <span className="text-white font-mont">Nome do Colaborador: {data.name}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont">E-mail Corporativo</span>
                <span className="text-white font-mont">{data.email}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont">Departamento</span>
                <span className="text-white font-mont">{data.department}</span>
            </div>
        </div>
    )
}

export default General