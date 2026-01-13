

export const IconArrowDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12"><path fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 1l6 4 6-4" /></svg>
);

export const IconArrowUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12"><path fill="none" stroke="#1E213F" strokeOpacity=".25" strokeWidth="2" d="M1 6l6-4 6 4" /></svg>
);

export const InputArrows = ({ value, onChange, min = 1, max = 60, name }) => {
    const arrowUp = () => value < max && onChange(value + 1);
    const arrowDown = () => value > min && onChange(value - 1);
    return (
        <div className="flex items-center justify-between w-35 h-10 bg-blue-50 rounded-xl px-3">
            <input className="w-12 bg-transparent text-blue-950" type="number" name={name} value={value} readOnly aria-label={name} onChange={(e) => onChange(Number(e.target.value))} />
            <div className="flex flex-col items-center justify-center">
                <button type="button" onClick={arrowUp} aria-label="increment 1 minute" className="w-4.5 h-3 flex items-center justify-center">
                    <IconArrowUp />
                </button>
                <button type="button" onClick={arrowDown} aria-label="decrement 1 minute" className="w-4.5 h-3 flex items-center justify-center">
                    <IconArrowDown />
                </button>
            </div>
        </div>
    );
}
