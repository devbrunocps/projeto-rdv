const InputField = ({ colorRed, hidden, label, value, type, id, ...rest }) => {
    return (
        <div className={`${hidden ? "hidden" : "flex"} w-2/5 max-lg:w-2/3 flex flex-col gap-2 text-sm`}>
            <label htmlFor={id} className="text-white font-mont">{label}</label>
            <input id={id} className={`${colorRed ? "bg-red-700" : ""} rounded-lg bg-neutral-800 border-none outline-none text-white font-mont py-2 px-2`} type={type} value={value} {...rest} />
        </div>
    )
}

export default InputField