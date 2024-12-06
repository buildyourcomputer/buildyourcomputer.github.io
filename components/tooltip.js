const Tooltip = ({ children, text, direction = 'top', className = '' }) => {
    const directionClasses = {
        top: 'bottom-[110%] left-1/2 transform -translate-x-1/2 after:absolute after:left-1/2 after:bottom-[-7px] after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black',
        bottom: 'top-[110%] left-1/2 transform -translate-x-1/2 after:absolute after:left-1/2 after:top-[-7px] after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-black',
        left: 'top-1/2 right-[110%] transform -translate-y-1/2 after:absolute after:top-1/2 after:right-[-7px] after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-black',
        right: 'top-1/2 left-[110%] transform -translate-y-1/2 after:absolute after:top-1/2 after:left-[-7px] after:-translate-y-1/2 after:border-4 after:border-transparent after:border-r-black',
    };

    return (
        <div className={`relative inline-flex align-bottom group ${className}`}>
            <div>{children}</div>
            <div
                className={`hidden group-hover:block absolute w-max max-w-[300px] text-center z-50 rounded-md p-2 text-sm bg-black text-white ${directionClasses[direction]}`}
            >
                {text}
            </div>
        </div>
    );
};

Tooltip.defaultProps = {
    text: 'Tooltip',
    direction: 'top',
};

export default Tooltip;
