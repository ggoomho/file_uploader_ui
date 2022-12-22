import { action, makeAutoObservable } from 'mobx';
import { FileInfo } from '../model/ModelDTO';
import axios, { AxiosResponse } from "axios";


export class FileInfoStore {
    constructor() {
        makeAutoObservable(this);
    }

    fileInfo: FileInfo = {
        id: 0,
        fileName: "",
        fileType: "",
        size: 0
    }
    
    posts = (formData: FormData) => {
        axios.post("http://localhost:8080/file/upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            this.fileInfo = response.data;
        });
    }
}
