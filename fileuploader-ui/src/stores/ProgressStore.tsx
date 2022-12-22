import axios from "axios";
import { makeAutoObservable } from "mobx";
import { FileUploadProgress } from "../model/ModelDTO";


export class FileUploadProgressStore {
    constructor() {
        makeAutoObservable(this);
    }

    fileUploadProgress: FileUploadProgress = {
        progress: 0,
        buffer: 0,
        isCompleted: false
    }

    fetch = (id) => {
        axios.get("http://localhost:8080/file/" + id + "/upload/progress")
        .then((response) => {
            this.fileUploadProgress.progress = response.data.progress;
            this.fileUploadProgress.buffer = response.data.buffer;
            this.fileUploadProgress.isCompleted = response.data.isCompleted;
        })
    }
}