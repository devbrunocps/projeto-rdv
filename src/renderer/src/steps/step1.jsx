import { useContext } from "react"
import InputField from '../components/InputField'
import { DataContext } from "../context/DataContext"

const Step1 = () => {
    const data = useContext(DataContext)

    return (
        <div className="flex flex-col items-center gap-6 w-full h-full">
            <InputField onChange={(ev) => data.handleChange(ev.target, data.setName)} label={"Nome Colaborador (Obrigatório)"} value={data.name} type="text" id="name" placeholder="Nome" required/>
            <InputField onChange={(ev) => data.handleChange(ev.target, data.setEmail)} label={"E-mail Corporativo (Obrigatório)"} value={data.email} type="email" id="email" placeholder="E-mail" required />
            <InputField onChange={(ev) => data.handleChange(ev.target, data.setDepartment)} label={"Departamento (Obrigatório)"} value={data.department} type="text" id="department" placeholder="Departamento" required/>
            <InputField onChange={(ev) => data.handleChange(ev.target, data.setDateExpense)} label={"Data (Obrigatório)"} type="date" value={data.dateExpense} required />
        </div>
    )
}


export default Step1