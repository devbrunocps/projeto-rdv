import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import General from "../summary/general"
import Expenses from "../summary/expenses"

const Step3 = () => {
    const data = useContext(DataContext)

    return (
        <div className="flex flex-col w-full items-center gap-8">
            <div className="w-full justify-center flex gap-4">
                <button onClick={() => data.setScreenSummary(1)} className={data.screenSummary == 1 ? "max-md:w-2/5 border-[1px] rounded-lg bg-neutral-800 outline-none text-sm text-white font-mont py-2 px-3 uppercase" : "max-md:w-2/5 rounded-lg bg-neutral-800 outline-none text-sm text-white font-mont py-2 px-3 uppercase"} type="button">Informações Gerais</button>
                <button onClick={() => data.setScreenSummary(2)} className={data.screenSummary == 2 ? "max-md:w-2/5 border-[1px] rounded-lg bg-neutral-800 outline-none text-sm text-white font-mont py-2 px-3 uppercase" : "max-md:w-2/5 rounded-lg bg-neutral-800 outline-none text-sm text-white font-mont py-2 px-3 uppercase"} type="button">Resumo das Despesas</button>
            </div>

            <div className="w-full min-h-[45vh] flex justify-center">
                {data.screenSummary == 1 && <General />}
                {data.screenSummary == 2 && <Expenses />}
            </div>
        </div>
    )
}


export default Step3