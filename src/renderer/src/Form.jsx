import { useContext } from "react"
import ArrowRight from './assets/arrow-right.png'
import Step1 from "./steps/step1"
import Step2 from "./steps/step2"
import Step3 from "./steps/step3"
import { DataContext } from "./context/DataContext"
import Alert from "./components/Alert"

function Form({ screen, setScreen, logo, setCompany, setLogo, logoPredilecta }) {
    const data = useContext(DataContext)

    const nextThirdPage = () => {
        data.name && data.email && data.department && data.dateExpense && data.place ? data.setScreenForm(3) : <Alert message="Preencha tods informações obrigatórias"/> 
        alert("preenchas")
    }

    const back = () => {
        setScreen(!screen)
        setCompany("Predilecta")
        setLogo(logoPredilecta)
    }

    return (
        <section className="w-[100vw] min-h-[100vh] bg-neutral-900 flex items-center flex-col pt-18 gap-8 p-8 ">

            <img onClick={back} src={ArrowRight} className="rotate-180 absolute top-4 left-4 cursor-pointer" width={18} height={18} alt="" />

            <div className="flex w-full min-h-[17vh] justify-center items-center">
                <img src={logo} width={220} alt="Logo Predilecta" />
            </div>


            <form action="" className="w-full h-[55vh] flex - flex-col items-center gap-8">
                {data.screenForm === 1 && <Step1 />}
                {data.screenForm === 2 && <Step2 />}
                {data.screenForm === 3 && <Step3 />}
            </form>


            <div className="flex absolute bottom-8 gap-4">
                <button onClick={() => data.setScreenForm(1)} className={data.screenForm == 1 ? "bg-neutral-800 border-[1px] text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center" : "bg-neutral-800 text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center"}>1</button>
                <button onClick={() => data.setScreenForm(2)} className={data.screenForm == 2 ? "bg-neutral-800 border-[1px] text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center" : "bg-neutral-800 text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center"}>2</button>
                <button onClick={nextThirdPage} className={data.screenForm == 3 ? "bg-neutral-800 border-[1px] text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center" : "bg-neutral-800 text-white flex gap-2 font-mont rounded-xl px-4 py-[0.5rem] items-center"}>3</button>
            </div>
        </section>
    )
}

export default Form

