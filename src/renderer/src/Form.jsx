import { useContext, useEffect, useState } from "react"
import ArrowRight from './assets/arrow-right.png'
import Step1 from "./steps/step1"
import Step2 from "./steps/step2"
import Step3 from "./steps/step3"
import { DataContext } from "./context/DataContext"
import Alert from "./components/Alert"
import { criarPlanilha, salvarPlanilha } from './index.js'

function Form({ screen, setScreen, logo, setCompany, setLogo, logoPredilecta }) {
    const data = useContext(DataContext)
    const [viewAlert, setViewAlert] = useState(false)

    const back = () => {
        setScreen(!screen)
        setCompany("Predilecta")
        setLogo(logoPredilecta)
    }

    const checkReasonMeals = () => {
        if(!data.highMeals && data.reasonMeals != "") {
            return true
        } else if(!data.highMeals == false) {
            return true
        } else {
            return false
        }
    }

    const nextThirdPage = () => {
        data.name && data.email && data.department && data.dateExpense && data.place && checkReasonMeals() ? data.setScreenForm(3) : setViewAlert(true)
    }

    const handleEnviarClick = async () => {
        try {
            const buffer = await criarPlanilha(data);
            const filename = 'expense_data.xlsx';
            await salvarPlanilha(buffer, filename);
            console.log('Planilha criada e salva com sucesso');
        } catch (error) {
            console.error('Erro ao criar e salvar a planilha:', error);
        }
    };

    useEffect(() => {
        data.name && data.email && data.department && data.dateExpense && data.place && checkReasonMeals() ? setViewAlert(false) : null 
    }, [data.name, data.email, data.department, data.dateExpense, data.place, data.reasonMeals])

    return (
        <section className="w-[100vw] min-h-[100vh] bg-neutral-900 flex items-center flex-col pt-18 gap-8 p-8 max-md:px-0 ">

            <img onClick={back} src={ArrowRight} className="rotate-180 absolute top-4 left-4 cursor-pointer" width={18} height={18} alt="" />
            {viewAlert && <Alert message="Preencha as informações obrigatórias" />}

            <div className="flex w-full min-h-[17vh] justify-center items-center">
                <img src={logo} width={220} alt="Logo Predilecta" />
            </div>


            <form action="" className="w-full min-h-[58vh] relative flex flex-col items-center gap-8">
                {data.screenForm === 1 && <Step1 />}
                {data.screenForm === 2 && <Step2 />}
                {data.screenForm === 3 && <Step3 />}
            </form>


            <div className="flex relative gap-4">
                <button onClick={() => data.setScreenForm(1)} className={data.screenForm == 1 ? "bg-neutral-800 border-[1px] text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center" : "bg-neutral-800 text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center"}>1</button>
                <button onClick={() => data.setScreenForm(2)} className={data.screenForm == 2 ? "bg-neutral-800 border-[1px] text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center" : "bg-neutral-800 text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center"}>2</button>
                <button onClick={nextThirdPage} className={data.screenForm == 3 ? "bg-neutral-800 border-[1px] text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center" : "bg-neutral-800 text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center"}>3</button>
                {data.screenForm == 3 && <button onClick={handleEnviarClick} className="hover:bg-green-900 transition-all bg-green-800 text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center">Enviar</button>}
            </div>
        </section>
    )
}

export default Form

