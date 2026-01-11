
import React, { createContext, useContext, useState } from 'react';

const SettingsPomodoro = createContext();

export const SetOptions = ({ children }) => {
    const [isSettingOption, setIsSettingOption] = useState(false);
    const [color, setColor] = useState('red');
    const [mode, setMode] = useState('pomodoro');
    const [clockStart, setClockStart] = useState(true);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [activeFont, setActiveFont] = useState('robotoSlab');
    const colorNames = {
       cyan: 'cyan-300',
       red: 'red-400',
       purple: 'purple-400',
    } 
    const font = {
        robotoSlab: 'font-robotoSlab',
        kumbhSans: 'font-kumbhSans',
        spaceMono: 'font-spaceMono',
    };
    const [duration, setDuration] = useState({
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15
    });
    const PomodoroOptions = {
        pomodoro: 'pomodoro',
        shortBreak: 'short break',
        longBreak: 'long break'
    }

    return (
        <SettingsPomodoro.Provider value={{
            font, colorNames,
            color, setColor,
            mode, setMode,
            duration, setDuration,
            isSettingOption, setIsSettingOption,
            clockStart, setClockStart,
            timeLeft, setTimeLeft,
            isRunning, setIsRunning,
            activeFont, setActiveFont,
            PomodoroOptions
        }}>
            {children}</SettingsPomodoro.Provider>
    );
}

export const useSettingsPerfil = () => {
    const context = useContext(SettingsPomodoro);
    if (!context) {
        throw new Error('useSettingsPerfil debe usarse dentro de SetOptions');
    }
    return context;
};
