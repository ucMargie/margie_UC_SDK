import React, {useCallback, useContext, useState} from 'react';

const initialValue = {
    loading: true,
    settings: {},
    setSettings: () => { },
};

const SettingsContext = React.createContext(initialValue);

export const SettingsContextProvider = ({children}) => {
    const [loading, setLoading] = useState(initialValue.loading);
    const [settings, setSettings] = useState(initialValue.settings);
    console.log("test2")
    const setSettingsHandler = useCallback((givenSettings) => {
        console.log("test3")
        setSettings(givenSettings);
        setLoading(false);
    }, []);

    return (
        <SettingsContext.Provider value={{ loading, settings, setSettings: setSettingsHandler }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => {
    return useContext(SettingsContext);
};
