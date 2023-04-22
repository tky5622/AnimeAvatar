import { DropZone } from "./DropZone"
import { Box } from '@mantine/core';
import { useState, useCallback } from "react";

export function ImageUploadContainer () {

    const [files, setFiles] = useState<string[]>([])
    // for now, uploadable image is single 

    const onChangeForm = useCallback((uploadedFile: string) => {
        const prevFiles = files
        const newFiles = prevFiles.concat([uploadedFile])
        setFiles(newFiles)

    }, [])

      
    return (
        <div>
            <DropZone onChangeForm={onChangeForm} uploadedFiles={files}/>
            {/* <>ideally, put upload file hrer</> */}
        </div>
    )
}