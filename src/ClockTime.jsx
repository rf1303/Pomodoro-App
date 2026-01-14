
import { useState, useEffect, useRef } from 'react';
import iconSetting from '../assets/images/icon-settings.svg';
import SettingsOptions from './SettingsOptions.jsx';
import { useSettingsPerfil } from './SetOptions.jsx';



function ClockTime() {
    const { mode, duration, isSettingOption, setIsSettingOption, clockStart, setClockStart, timeLeft, setTimeLeft, isRunning, setIsRunning, color, colorNames, font, activeFont } = useSettingsPerfil();

    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning, timeLeft]);


    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const seconds = secs % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleToggleTimer = () => {
        setIsRunning(!isRunning);
        return clockStart ? setClockStart(false) : '';

    }

    const handleSettingOptions = () => {
        setIsSettingOption(true);
    }

    const progress = (timeLeft / (duration[mode] * 60)) * 100;
    const circumference = 2 * Math.PI * 115;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
        <div className="grid items-center justify-items-center gap-20 md:gap-24 xl:gap-16">
            <div className={`wrapper__clock w-clampClock h-clampClock grid items-center justify-items-center rounded-full  bg-[linear-gradient(115deg,#14172e_20%,#161932_35%,#292c52_63%)] p-4 ${font[activeFont]} `}>
                <div className="relative w-clampClock-i h-clampClock-i bg-blue-950 rounded-full  flex  items-center justify-center ">
                    <svg viewBox="0 0 260 260" className={`w-clampClock-i h-clampClock-i transform -rotate-90 ${colorNames[color].text}`}>
                        <circle cx="130" cy="130" r="115" stroke="hsl(227, 100%, 92%, 0.05)" strokeWidth="10" fill="none" />
                        <circle cx="130" cy="130" r="115" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000 ease-linear" /></svg>

                    <div className={`absolute inset-0 text-time-1  text-white flex items-center justify-center ${activeFont === 'spaceMono' ? 'tracking-[-8px]' : 'tracking-[-1px]'}`}>
                        {formatTime(timeLeft)}
                    </div>

                    <button
                        onClick={handleToggleTimer}
                        className={`absolute inset-y-[74%] text-blue-100  text-base uppercase tracking-[0.938rem] font-bold text-center flex items-end justify-center  hover:scale-110 ${colorNames[color].hover} cursor-pointer`}
                    >{clockStart ? 'start' : isRunning ? 'pause' : 'restart'}</button>
                </div>
            </div>
            <div>
                <button type="button" className='' onClick={handleSettingOptions}><img src={iconSetting} alt="icon of Setting" className="w-7 h-7" /></button>
                {isSettingOption && <SettingsOptions onClose={() => setIsSettingOption(false)} />}
            </div>
        </div>
    );
}
export default ClockTime;
