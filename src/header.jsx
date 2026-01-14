import { useSettingsPerfil } from './SetOptions.jsx'

function HeaderOptions() {
    const { mode, setMode, color, PomodoroOptions, setClockStart, setIsRunning, setTimeLeft, duration, colorNames, font, activeFont } = useSettingsPerfil();

    const handleModeBtn = (option) => {
        setClockStart(true);
        setMode(option);
        setTimeLeft(duration[option] * 60)
        setIsRunning(false);

    }
    return (
        <div className={`grid items-center justify-items-center gap-10 ${font[activeFont]}`}> 
            <h1 className="text-3xl font-bold text-center text-blue-100 md:text-4xl">pomodoro</h1>
            <div className="flex items-center justify-center gap-0.5 p-3 bg-blue-900 rounded-full">
                {Object.keys(PomodoroOptions).map((option) => (
                    <button key={option} onClick={() => handleModeBtn(option)}
                        className={`w-105 h-12 rounded-3xl text-setting-4 md:text-setting-3 hover:text-mobile-2 hover:text-white cursor-pointer md:w-30 ${mode === option ? `${colorNames[color].bg}`
                            : 'text-grey-400 bg-blue-900 hover:bg-blue-850 '
                            }`}>
                        {PomodoroOptions[option]}
                    </button>
                ))}
            </div>
        </div>
    )

}
export default HeaderOptions;

