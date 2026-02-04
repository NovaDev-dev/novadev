export function Button({ className = "", children, onClick, disabled }: any) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                px-3 py-2 md:px-4 md:py-3
                rounded-md
                font-semibold
                shadow-md

                md:text-lg text-xs 

                cursor-pointer
                transition-all duration-200 ease-in-out

                hover:opacity-90
                hover:shadow-md

                active:translate-y-0
                active:shadow-sm

                whitespace-nowrap

                ${className}
            `}
        >
            {children}
        </button>
    );
}

export function PixelButton({ className = "", children, onClick, disabled }: any) {

    return(
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`
                px-4 py-2 md:px-6 md:py-3
                text-xs md:text-lg
                font-bold
                border-4 
                shadow-[4px_4px_0_0_var(--color-secondary),8px_8px_0_0_rgba(0,0,0,0.25)]
                cursor-pointer
                transition-all duration-100 ease-in-out
                hover:opacity-90
                active:translate-x-0.5 active:translate-y-0.5 
                active:shadow-[2px_2px_0_0_var(--color-secondary),4px_4px_0_0_rgba(0,0,0,0.25)]
                whitespace-nowrap
                ${className}
                `}>
            {children}
        </button>
    );
}
