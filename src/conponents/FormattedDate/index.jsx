const FormattedDate = ({ isHighLight, children }) => {
    return (
        <div>
            <span className={`text-sm ${isHighLight ? "text-primaryAccent" : ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;