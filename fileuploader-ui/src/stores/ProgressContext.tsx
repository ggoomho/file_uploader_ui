import React, {} from 'react';
import { FileUploadProgressStore } from './ProgressStore';

const FileUploadProgressContext = React.createContext({
    FileUploadProgressStore: new FileUploadProgressStore()
});

export const useFileUploadProgress = () => React.useContext(FileUploadProgressContext);