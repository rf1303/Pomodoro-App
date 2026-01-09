
import React, { createContext, useContext, useState } from 'react';

const SettingsPomodoro = createContext();

export const SetOptions = ({ children }) => {
    const [isSettingOption, setIsSettingOption] = useState(false);
    const [font, setFont] = useState('robotoSlab');
    const [color, setColor] = useState('cyan400');
    const [mode, setMode] = useState('pomodoro');
    const [clockStart, setClockStart] = useState(true);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
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
            font, setFont,
            color, setColor,
            mode, setMode,
            duration, setDuration,
            isSettingOption, setIsSettingOption,
            clockStart, setClockStart,
            timeLeft, setTimeLeft,
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
