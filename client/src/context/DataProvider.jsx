import { createContext, useState,Fragment } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    
    return (
        <DataContext.Provider value={{ account, setAccount }}>
            <Fragment>{children}</Fragment>
        </DataContext.Provider>
    )
}

export default DataProvider;