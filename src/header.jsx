
import { useState } from 'react'
import {useSettingsPerfil, SetOptions} from './SetOptions.jsx'


function HeaderOptions() {
    const {mode, setMode, color, PomodoroOptions, setClockStart} = useSettingsPerfil();
    
    const handleModeBtn = (option) => {
        setClockStart(true);
        setMode(option);
    }

    return (
        <div className="wrapper__head grid items-center justify-items-center gap-10">
            <h1 className="text-3xl font-bold text-center text-blue-100 md:text-4xl">pomodoro</h1>
            <div className="wrapper__options flex items-center justify-center gap-0.5 p-3 bg-blue-900 rounded-full">
                {Object.keys(PomodoroOptions).map((option) => (
                    <button key={option} onClick={() => handleModeBtn(option)}
                        className={`w-105 h-12  ${mode === option ? 'bg-cyan-400 px-2 rounded-3xl hover:bg-cyan-700'
                                : 'text-grey-400 bg-blue-900'
                            }`}>
                        {PomodoroOptions[option]}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default HeaderOptions; 

