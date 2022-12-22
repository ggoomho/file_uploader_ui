import React, {} from 'react';
import {FileInfoStore} from './FileInfoStore';

const FileInfoContext = React.createContext({
    FileInfoStore: new FileInfoStore()
});

export const useFileInfo = () => React.useContext(FileInfoContext);