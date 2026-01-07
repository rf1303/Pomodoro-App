
import { useState, useEffect } from 'react';
import iconSetting from '../assets/images/icon-settings.svg';
import SettingsOptions from './SettingsOptions.jsx';
import { SetOptions } from './SetOptions.jsx';

// const circumference = 2 * Math.PI * 110;
// const strokeDashoffset = circumference - (progress / 100) * circumference;
// const circleBarClock = () => (<svg className="w-80 h-80 transform -rotate-90">
//     {/* Background circle */}
//     <circle
//         cx="160"
//         cy="160"
//         r="110"
//         stroke="rgba(255, 255, 255, 0.1)"
//         strokeWidth="8"
//         fill="none"
//     />
//     {/* Progress circle */}
//     <circle
//         cx="160"
//         cy="160"
//         r="110"
//         stroke="url(#gradient)"
//         strokeWidth="8"
//         fill="none"
//         strokeDasharray={circumference}
//         strokeDashoffset={strokeDashoffset}
//         strokeLinecap="round"
//         className="transition-all duration-1000 ease-linear"
//     />
//     {/* <defs> */}
//     {/*   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"> */}
//     {/*     <stop offset="0%" stopColor="#ec4899" /> */}
//     {/*     <stop offset="50%" stopColor="#a855f7" /> */}
//     {/*     <stop offset="100%" stopColor="#3b82f6" /> */}
//     {/*   </linearGradient> */}
//     {/* </defs> */}
// </svg>)

function ClockTime() {
    const [isRunning, setIsRunning] = useState(false);
    const [isSettingOption, setIsSettingOption] = useState(false);


    const handleSettingOptions = (isSet) => {
        setIsSettingOption(true);
    }

    return (
        <div className="wrapper__clock w-clampClock h-clampClock grid items-center justify-items-center gap-20 rounded-full  bg-[linear-gradient(115deg,#14172e_20%,#161932_35%,#292c52_63%)] p-4 ">
            <div className="w-clampClock-i h-clampClock-i bg-blue-950 rounded-full  flex flex-col items-center justify-center ">
                <div className="text-time font-medium text-white  ">
                    17:59
                </div>

                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="text-blue-100 font-semibold py-4 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-xl"
                >
                    {isRunning ? 'PAUSE' : 'START'}
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
