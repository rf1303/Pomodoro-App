
import { createContext, useContext, useState } from 'react';

const SettingsPomodoro = createContext();

export const SetOptions = ({ children }) => {
    const [isSettingOption, setIsSettingOption] = useState(false);
    const [color, setColor] = useState('cyan');
    const [mode, setMode] = useState('pomodoro');
    const [clockStart, setClockStart] = useState(true);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [activeFont, setActiveFont] = useState('robotoSlab');
    const colorNames = {
       cyan: {
            text: 'text-cyan-300',
            bg: 'bg-cyan-300',
            hover: 'hover:text-cyan-300',
        },
       red: {
            text: 'text-red-400',
            bg: 'bg-red-400',
            hover: 'hover:text-red-400',
        },
       purple: {
            text: 'text-purple-400',
            bg: 'bg-purple-400',
            hover: 'hover:text-purple-400',
        }
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
