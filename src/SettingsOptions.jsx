import { useState, useEffect } from 'react';
/* import iconSetting from '../assets/images/icon-settings.svg'; */
import {useSettingsPerfil, SetOptions} from './SetOptions.jsx'




function SettingsOptions() {
   const {font, color, mode, duration, PomodoroOptions } = useSettingsPerfil();
   console.log('mode:', mode) 
    return (
    <div className="">
       <p className="bg-cyan-500 text-amber-700 text-3xl">Settings: {font} {mode}</p> 
    </div>
    );
}
export default SettingsOptions;
