import { useState } from "react"
import SelectField from "./components/SelectField"

import LogoPredilecta from './assets/predilecta.png'
import LogoStelladoro from './assets/stelladoro.png'
import LogoSoFruta from './assets/sofruta.png'
import LogoSalsaretti from './assets/salsaretti.png'
import LogoMinas from './assets/minas.png'
import LogoNordeste from './assets/nordeste.png'
import ArrowRight from './assets/arrow-right.png'

import Form from "./Form"
import { DataContextProvider } from "./context/DataContext"

function App() {
    const [screen, setScreen] = useState(0)

    const [company, setCompany] = useState("")
    let [logo, setLogo] = useState(LogoPredilecta)

    switch (company) {
        case "Predilecta":
            logo = LogoPredilecta
            break;
        case "Só Fruta":
            logo = LogoSoFruta
            break;
        case "Stella D'Oro":
            logo = LogoStelladoro
            break;
        case "Salsaretti":
            logo = LogoSalsaretti
            break;
        case "Minas Mais":
            logo = LogoMinas
            break;
        case "Nordeste Mais":
            logo = LogoNordeste
            break;
    }

    const companies = [
        { name: "Predilecta" },
        { name: "Só Fruta" },
        { name: "Stella D'Oro" },
        { name: "Salsaretti" },
        { name: "Minas Mais" },
        { name: "Nordeste Mais" },
    ]

    return (
        <DataContextProvider>
            {screen == 0 ? <div className="w-[100vw] min-h-[100vh] bg-neutral-900 flex items-center pt-24 flex-col gap-8 p-8">
                <div className="text-center">
                    <span className="max-md:text-xl font-mont font-bold text-neutral-200 text-2xl">RELATÓRIO DE DESPESAS DE VIAGEM</span>
                </div>
                <div className="w-full min-h-36 flex justify-center items-center">
                    <img src={logo} width={240} height={190} alt="Logo Empresa" />
                </div>
                <SelectField onchange={(ev) => setCompany(ev.target.value)} options={companies} id="companies" value={company} label="Selecione sua empresa:" />
                <div className="w-full flex justify-center">
                    <button onClick={() => setScreen(1)} className=" bg-neutral-800 text-white flex gap-2 font-mont rounded-xl px-3 py-[0.5rem] items-center">
                        <span className="text-sm">Próxima Etapa</span>
                        <img width={15} height={15} src={ArrowRight} alt="" />
                    </button>
                </div>
            </div> : <Form screen={screen} setScreen={setScreen} logo={logo} setCompany={setCompany} logoPredilecta={LogoPredilecta} setLogo={setLogo}/>}
        </DataContextProvider>
    )
}

export default App

