import { DropZone } from "./DropZone"
import { Box } from '@mantine/core';
import { useState, useCallback } from "react";

export function ImageUploadContainer () {

    const [files, setFiles] = useState<string[]>([])

    const onChangeForm = useCallback((uploadedFile: string) => {
        const prevFiles = files
        const newFiles = prevFiles.concat([uploadedFile])
        setFiles(newFiles)

    }, [])

      
    return (
        <Box maw={300} mx="auto">
            <DropZone onChangeForm={onChangeForm} uploadedFiles={files}/>
            {/* <>ideally, put upload file hrer</> */}
        </Box>
    )
}