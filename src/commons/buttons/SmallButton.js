export const SmallButton = ({children, onClick}) => {
    return(
        <div onClick={onClick} className="flex items-center py-3 justify-center w-28 lg:w-36 border-4 lg:border-8 border-orange cursor-pointer">
            <p>
            {children}
            </p>
        </div>
    )
}