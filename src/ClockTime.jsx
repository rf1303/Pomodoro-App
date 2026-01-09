
import { useState, useEffect, useRef } from 'react';
import iconSetting from '../assets/images/icon-settings.svg';
import SettingsOptions from './SettingsOptions.jsx';
import { useSettingsPerfil, SetOptions } from './SetOptions.jsx';



function ClockTime() {
    const { mode, duration, isSettingOption, setIsSettingOption, clockStart, setClockStart, timeLeft, setTimeLeft } = useSettingsPerfil();
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);

    const progress = ((duration[mode] * 60 - timeLeft) / (duration[mode] * 60)) * 100;
    const circumference = 2 * Math.PI * 115;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        if(isRunning && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if(prev <= 1){
                        setIsRunning(false);
                        return 0;
                    }
                    return prev -1
                });
            }, 1000); 
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning, timeLeft]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    }

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const seconds = secs % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}`;
    };

    const handleTimerBtn = () => {
        setIsRunning(!isRunning);
       return clockStart ? setClockStart(false) : '';  
        
    }

    const handleSettingOptions = () => {
        setIsSettingOption(true);
    }

    return (
        <div className="wrapper__clock w-clampClock h-clampClock grid items-center justify-items-center gap-20 rounded-full  bg-[linear-gradient(115deg,#14172e_20%,#161932_35%,#292c52_63%)] p-4 ">
            <div className="relative w-clampClock-i h-clampClock-i bg-blue-950 rounded-full  flex  items-center justify-center ">
                <svg  viewBox="0 0 260 260" className="w-clampClock-i h-clampClock-i transform -rotate-90">
                    <circle
                        cx="130"
                        cy="130"
                        r="115"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="10"
                        fill="none"
                    />
                    <circle
                        cx="130"
                        cy="130"
                        r="115"
                        stroke="url(#gradient)"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-linear"
                    />
                    {/* <defs> */}
                    {/*   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"> */}
                    {/*     <stop offset="0%" stopColor="#ec4899" /> */}
                    {/*     <stop offset="50%" stopColor="#a855f7" /> */}
                    {/*     <stop offset="100%" stopColor="#3b82f6" /> */}
                    {/*   </linearGradient> */}
                    {/* </defs> */}
                </svg>

                <div className="absolute inset-x-[11%] inset-y-[23%] text-time-2 font-medium text-white  ">
                    {formatTime(timeLeft)}
                </div>

                <button
                    onClick={handleTimerBtn}
                    className="absolute inset-x-[26%] inset-y-[65%] text-blue-100 font-semibold text-base uppercase tracking-[0.775rem] text-center hover:scale-105"
                >
                    {clockStart ? 'start' : isRunning ? 'pause' : 'restart'}
                </button>
            </div>
            <div className="">
                <button type="button" className='' onClick={handleSettingOptions}><img src={iconSetting} alt="icon of Setting" className="w-7 h-7" /></button>
                {isSettingOption && <SettingsOptions />}
            </div>
        </div>

    );
}
export default ClockTime;
