import React from 'react';
import DataManagerContext from '../../contexts/DataManagerContext';

export default function DataManagerProvider({ children }) {
    return <DataManagerContext.Provider value={{
        collectionLinks: [], curationLinks: [], synonymLinks: []
    }} >
        {children}
    </DataManagerContext.Provider>;
}
