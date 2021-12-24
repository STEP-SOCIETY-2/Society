export const ShareButton = ({children}) => {
    return(
        <button className="flex items-center py-2 lg:py-3 justify-center w-28 lg:w-36 border-4 border-orange cursor-pointer">
            {children}
        </button>
    )
}