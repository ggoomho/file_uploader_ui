import internal from "stream"

export interface FileInfo {
    id: number,
    fileName: string,
    fileType: string,
    size: number
}

export interface FileUploadProgress {
    progress: number,
    buffer: number,
    isCompleted: boolean
}