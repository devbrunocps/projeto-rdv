const Alert = ({ message }) => {
    return (
        <div className="fixed bg-red-700 upper p-3 rounded-lg text-sm text-white font-mont animate z-20 top-12 right-12 animate">
            <span>{message}</span>
        </div>
    )
}

export default Alert