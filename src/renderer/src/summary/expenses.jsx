import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const Expenses = () => {
    const data = useContext(DataContext)

    return (
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-4 gap-y-12 border-neutral-700 rounded-xl  p-12 border-[1px]">

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Transporte</span>
                <span className="text-white font-mont text-sm">R${data.transport}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Estacionamento / Pedágio</span>
                <span className="text-white font-mont text-sm">R${data.parking}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Combustível / Manutenção</span>
                <span className="text-white font-mont text-sm">R${data.vehicle}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Hospedagem / Hotel</span>
                <span className="text-white font-mont text-sm">R${data.accommodation}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Refeições</span>
                <span className="text-white font-mont text-sm">R${data.meals}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Telefone / Internet / Correios</span>
                <span className="text-white font-mont text-sm">R${data.phone}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Outros</span>
                <span className="text-white font-mont text-sm">R${data.others}</span>
            </div>

            <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Observações</span>
                <span className="text-white font-mont text-sm">{data.comments == "" ? "Sem observações" : data.comments}</span>
            </div>

            {!data.highMeals && data.reasonMeals != "" && <div className="flex flex-col text-center">
                <span className="text-white font-mont text-[0.9rem] max-md:text-[0.8rem] uppercase font-bold">Motivo Refeição Excedida</span>
                <span className="text-white font-mont text-sm">{data.reasonMeals}</span>
            </div>}
        </div>
    )
}

export default Expenses