'use client'

/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Group, Text, useMantineTheme } from '@mantine/core'
import { Dropzone, DropzoneProps } from '@mantine/dropzone'
// import { IconPhoto, IconUpload, IconX } from '@tabler/icons'
// import { useLoader } from '@react-three/fiber'

type DropZoneProps = {
  onChangeForm: (file: any) => void
  uploadedFiles: string[]
}
export function DropZone({
  onChangeForm,
  uploadedFiles,
}: DropZoneProps & Partial<DropzoneProps>) {
  const theme = useMantineTheme()

  return (
    <>
      <Dropzone
        onDrop={(files: any[]) => {
          console.log(files, 'what happende')
          onChangeForm(files[0])
        }}
        onReject={(files: any) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        // {...props}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: 'none' }}
        >
          <Dropzone.Accept>
          </Dropzone.Accept>
          <Dropzone.Reject>
          </Dropzone.Reject>
          <Dropzone.Idle>
          </Dropzone.Idle>

          <div>
            {uploadedFiles ? (
              <>file is added</>
            ) : (
              <>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed
                  5mb
                </Text>
              </>
            )}
          </div>
        </Group>
      </Dropzone>
    </>
  )
}