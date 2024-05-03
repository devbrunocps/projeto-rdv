import { useContext, useEffect, useState } from "react"
import InputField from "../components/InputField"
import { DataContext } from "../context/DataContext"

const Step2 = () => {
    const data = useContext(DataContext)
    const [colorRed, setColorRed] = useState(false)

    useEffect(() => {
        data.meals > 40 ? setColorRed(true) : setColorRed(false)
        data.meals > 40 ? data.setHighMeals(false) : data.setHighMeals(true)
    }, [data.meals])

    return (
        <div className="flex flex-col w-[100vw] items-center gap-6">
            <div className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-x-8 max-md:gap-y-6">
                <div className="flex flex-col w-full gap-6 items-end max-md:items-center">
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setPlace)} label={"Local (Obrigatório)"} value={data.place} type="text" id="place" placeholder="Cidade - UF" required />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setTransport)} label={"Transporte"} value={data.transport} type="number" id="transport" placeholder="Valor" />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setParking)} label={"Estacionamento / Pedágio"} value={data.parking} type="number" id="parking" placeholder="Valor" />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setVehicle)} label={"Combustível / Manutenção"} value={data.vehicle} type="number" id="vehicle" placeholder="Valor" />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setAccommodation)} label={"Hospedagem / Hotel"} value={data.accommodation} type="text" id="accommodation" placeholder="Valor" />
                </div>
                <div className="flex flex-col w-full gap-6 items-start max-md:items-center">
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setMeals)} colorRed={colorRed} label={"Refeições"} value={data.meals} type="number" id="meals" placeholder="Valor" />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setPhone)} label={"Telefone / Internet / Correios"} value={data.phone} type="number" id="phone" placeholder="Valor" />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setOthers)} label={"Outros"} value={data.others} type="number" id="others" placeholder="Valor" />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setComments)} label={"Observações"} value={data.comments} type="text" id="comments" placeholder="Observações" />
                    <InputField onChange={(ev) => data.handleChange(ev.target, data.setReasonMeals)} hidden={data.highMeals} label={"Refeições excedendo limite (Obrigatório)"} value={data.reasonMeals} type="text" id="reason-mea" placeholder="Motivo" />
                </div>
            </div>
        </div>
    )
}


export default Step2