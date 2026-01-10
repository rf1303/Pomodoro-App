import { useState, useEffect } from 'react';
/* import iconSetting from '../assets/images/icon-settings.svg'; */
import { useSettingsPerfil, SetOptions } from './SetOptions.jsx'

const IconClose = () => (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#1E213F" fillRule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5" /></svg>);

function SettingsOptions({ onClose }) {
    const { color, timeLeft, setTimeLeft, font, setFontcolor, setColor, mode, setMode, duration, setDuration, PomodoroOptions, setIsSettingOption } = useSettingsPerfil();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

        
    return (
        <div className="absolute inset-0 bg-blue-850 w-full h-full">
            <form className='absolute inset-0 m-auto w-clampSetting h-setting-mobile rounded-2xl bg-blue-50  px-6 py-4 md:px-9 z-50' onSubmit={handleSubmit}>
                <header className='flex items-center justify-between'>
                    <h2 className='text-setting-1'>Settings</h2>
                    <button type="button" onClick={onClose}>{<IconClose />}</button>
                </header>
            <button type="submit" className='absolute inset-y-[95%] left-1/2 -translate-x-1/2  w-36 h-14 bg-red-400 rounded-4xl text-white text-base text-shadow-black '>Apply</button>
            </form>
        </div>
    );
}
export default SettingsOptions;
