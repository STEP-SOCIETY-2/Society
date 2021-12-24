export const SmallButtonDark = ({children, onClick, test, value}) => {
    return(
        <button onClick={onClick} className={`flex items-center py-3 justify-center w-24 lg:w-36 border-4 lg:border-8 cursor-pointer ${test === value ? "bg-orange" : ""}`}>
            <p>
            {children}
            </p>
        </button>
    )
}