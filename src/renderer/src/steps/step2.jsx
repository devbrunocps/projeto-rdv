import { useContext } from "react"
import InputField from "../components/InputField"
import { DataContext } from "../context/DataContext"

const Step2 = () => {
    const data = useContext(DataContext)

    return (
        <div className="flex w-full justify-center items-center gap-12">
            <div className="flex flex-col w-full gap-6 items-end">
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setPlace)} label={"Local (Obrigatório)"} value={data.place} type="text" id="place" placeholder="Cidade - UF" required />
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setTransport)} label={"Transporte"} value={data.transport} type="number" id="transport" placeholder="Valor" />
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setParking)} label={"Estacionamento / Pedágio"} value={data.parking} type="number" id="parking" placeholder="Valor" />
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setVehicle)} label={"Combustível / Manutenção"} value={data.vehicle} type="number" id="vehicle" placeholder="Valor" />
            </div>
            <div className="flex flex-col w-full gap-6 items-start">
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setAccommodation)} label={"Hospedagem / Hotel"} value={data.accommodation} type="text" id="accommodation" placeholder="Valor" />
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setMeals)} label={"Refeições"} value={data.meals} type="number" id="meals" placeholder="Valor" />
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setPhone)} label={"Telefone / Internet / Correios"} value={data.phone} type="number" id="phone" placeholder="Valor" />
                <InputField onChange={(ev) => data.handleChange(ev.target, data.setOthers)} label={"Outros"} value={data.others} type="number" id="others" placeholder="Valor" />
            </div>
        </div>
    )
}


export default Step2