import { DropZone } from "./DropZone"
import { Box, Image } from '@mantine/core';
import { useState, useCallback } from "react";
import { SimpleGrid } from "@mantine/core";
type ImageUploadContainerProps = {
    images: string[]
    setImages: React.Dispatch<React.SetStateAction<string[]>>
}

function removeAtIndex<T>(array: T[], index: number): T[] {
    // 配列をコピーすることで元の配列を変更せず、新しい配列を返す
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
  }
  
  

export function ImageUploadContainer ({images, setImages}: ImageUploadContainerProps) {
    // TODO replace it with Recoil later 

    const onChangeForm = useCallback((uploadedFile: Blob | MediaSource) => {
        const prevFiles = images
        const fileUrl = URL.createObjectURL(uploadedFile)
        const newFiles = prevFiles.concat([fileUrl])
        setImages(newFiles)
    }, [images, setImages])


    const deleteImage = useCallback((i: number) => {
        const newImages = removeAtIndex(images, i)
        setImages(newImages)
    }, [images, setImages])

    return (
        <div>
            <DropZone onChangeForm={onChangeForm} uploadedFiles={images}/>
            {images.map((image,i) => {
                return (
                <SimpleGrid>
                  <div>
                      <Image width={60} height ={60 }src={image}/>
                      <button onClick={() => deleteImage(i)}>delete</button>
                  </div>
                </SimpleGrid>)}
            )}
        </div>
    )
}