import React, {useCallback, useContext, useState} from 'react';

const initialValue = {
    categories: [],
    setCategories: () => {},
};

const CategoryContext = React.createContext(initialValue);

export const CategoryContextProvider = ({children}) => {
    const [categories, setCategories] = useState(initialValue.categories);

    return (
        <CategoryContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategoryContext = () => {
    return useContext(CategoryContext);
};
