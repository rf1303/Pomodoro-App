import { useState, useEffect } from 'react';
/* import iconSetting from '../assets/images/icon-settings.svg'; */
import { useSettingsPerfil, SetOptions } from './SetOptions.jsx'

const IconClose = () => (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#1E213F" fillRule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" /></svg>);

const IconCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" aria-hidden="true" ><path d="M1 6l4 4L15 1" fill="none" stroke="#1E213F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
);


function SettingsOptions({ onClose }) {
    const { color, timeLeft, setTimeLeft, font, setColor, mode, setMode, duration, setDuration, PomodoroOptions, setIsSettingOption, activeFont, setActiveFont, colorNames } = useSettingsPerfil();

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    console.log('font[activeFont]:', font[activeFont])
    return (
        <div className={`absolute inset-0 bg-blue-850 w-full h-full ${font[activeFont]}`}>
            <div className="absolute inset-0 m-auto w-clampSetting h-setting-mobile rounded-2xl bg-white  py-4.5 md:py-8 md:h-setting-tablet z-50">
                <header className='flex items-center justify-between  px-6  md:px-9'>
                    <h2 className='text-setting-1'>Settings</h2>
                    <button type="button" onClick={onClose}>{<IconClose />}</button>
                </header>
                <div className="w-full h-0.5 bg-grey-400 my-4"></div>
                <form className='grid items-center justify-items-center gap-6 px-6  md:px-9' onSubmit={handleSubmit}>
                    <div className="w-full">
                        <h3 className='settings__title'>time (minutes)</h3>
                        <div className="w-full flex flex-col items-center justify-center gap-2 md:flex-row">
                            {Object.keys(PomodoroOptions).map((option) => (
                                <div key={option} className="w-full flex items-center justify-between md:flex-col md:items-start">
                                    <label htmlFor={option} className='text-setting-4 text-blue-850 '>{PomodoroOptions[option]}</label>
                                    <input className='w-35 h-10 bg-blue-50 rounded-xl' type="number" id={option} name={option}
                                        onChange={(e) => {
                                            // Handle the change here
                                            console.log(e.target.value);
                                        }} value="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-grey-400"></div>
                    <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between">
                        <h3 className="settings__title">font</h3>
                        <div className="flex items-center justify-center gap-4">
                            {Object.keys(font).map((ft) => (
                                <button key={ft} type="button" className={`w-10 h-10 rounded-full
                                ${font[ft]} ${activeFont === ft
                                        ? 'bg-blue-950 text-white'
                                        : 'bg-blue-50 text-blue-950 hover:bg-grey-400 '}`}
                                    onClick={() => setActiveFont(ft)}>Aa</button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-grey-400"></div>
                    <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between">
                        <h3 className="settings__title">color</h3>
                        <div className="flex items-center justify-center gap-4">
                            {Object.keys(colorNames).map((clr) => (
                                <button key={clr} type="button" className={`w-10 h-10 rounded-full
                               ${colorNames[clr].bg} flex items-center justify-center `}
                                    onClick={() => setColor(clr)}>{color === clr
                                        ? <IconCheck />
                                        : ''}</button>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className='absolute inset-y-[95%] left-1/2 -translate-x-1/2  w-36 h-14 bg-red-400 rounded-4xl text-white text-base text-shadow-black '>Apply</button>
                </form>
            </div>
        </div>
    );
}
export default SettingsOptions;
