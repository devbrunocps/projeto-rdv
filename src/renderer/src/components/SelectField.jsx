const SelectField = ({ id, label, value, options, onchange, ...rest }) => {
    return (
        <div className="max-md:w-4/5 w-1/3 flex flex-col gap-2 text-sm">
            <label htmlFor={id} className="font-mont text-white">{label}</label>
            <select onChange={onchange} id={id} className="rounded-lg bg-neutral-800 border-none outline-none text-white font-mont py-2 px-2">
                {options.map((option, i) => {
                    return (
                        <option key={i} value={option.name} {...rest}>{option.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectField