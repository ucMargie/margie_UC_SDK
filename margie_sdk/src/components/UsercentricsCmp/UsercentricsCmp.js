import React, {useEffect, useState} from "react";
import Usercentrics, { UI_LAYER, UI_VARIANT } from '@usercentrics/cmp-browser-sdk';
import {useSettingsContext} from "../../contexts/SettingsContext";
import {useCategoryContext} from "../../contexts/CategoryContext";
import Banner from "../Banner";
import PrivacyButton from "../PrivacyButton";

export const UsercentricsCmp = ({settingsId}) => {
    const {setSettings} = useSettingsContext();
    const {categories, setCategories} = useCategoryContext();
    const [view, setView] = useState(UI_LAYER.NONE);
    const UC = new Usercentrics(settingsId);
    
    useEffect(() => {
        UC.init().then((initialUIValues) => {
            // getSettings() returns all Usercentrics settings you need for your custom solution
            const settings = UC.getSettings();
            setSettings(settings);
            // getCategories() returns all categories' and data processing services' information
            const categories = UC.getCategoriesFullInfo();
            setCategories(categories)

            if (initialUIValues.variant === UI_VARIANT.DEFAULT) {
                if(initialUIValues.initialLayer === UI_LAYER.FIRST_LAYER){
                    setView(UI_LAYER.FIRST_LAYER);
                } else if (initialUIValues.initialLayer === UI_LAYER.UI_VARIANT.PRIVACY_BUTTON) {
                    setView(UI_LAYER.PRIVACY_BUTTON);
                } else {
                    setView(UI_LAYER.NONE);
                }
            }

        });
    }, [setCategories, setSettings]);

    const onAcceptAllHandler = () => {
        UC.acceptAllServices().then(() => {
        // Remember to fetch the now updated categories
        const categories = UC.getCategories();
        setCategories(categories);
        setView(UI_LAYER.PRIVACY_BUTTON);
        });
    };

    const onDenyAllHandler = () => {
        UC.denyAllServices().then(() => {
        // Remember to fetch the now updated categories
        const categories = UC.getCategories();
        setCategories(categories);
        setView(UI_LAYER.PRIVACY_BUTTON);
        });
    };

    const onSaveHandler = (userDecisions) => {
        // UserDecisions needs to include all the user choices for each service that were made in your UI
        UC.updateServices(userDecisions).then(() => {
        // Remember to fetch the now updated categories
        const categories = UC.getCategories();
        });
    };
    const onPrivacyButtonClick = () => {
        setView(UI_LAYER.BANNER);
    };
    switch (view) {
        case UI_LAYER.FIRST_LAYER:
            console.log("1st layer")
            return (
                <Banner
                    onAcceptAll={onAcceptAllHandler}
                    onDenyAll={onDenyAllHandler}
                />
            );
        case UI_LAYER.PRIVACY_BUTTON:
            console.log("button")
            // Show privacy button
            return <PrivacyButton onClick={onPrivacyButtonClick}/>;
        case UI_LAYER.NONE:
            console.log("None")
            return null;
        default:
            // Show nothing
            return <React.Fragment/>;
        }
    }