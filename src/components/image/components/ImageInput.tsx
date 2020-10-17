import React, { useCallback, useState } from 'react';

import { Button, Grid, Typography } from "@material-ui/core";

interface Props {
    register: any;
    oldPreview?: string;
}

export const ImageInput = ({ register, oldPreview }: Props) => {
    const [preview, setPreview] = useState<string | undefined>();

    const handleUploadFile = useCallback((e) => {
        const file = e?.target?.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = e => {
                if (e && e.target) {
                    setPreview(e.target.result as string);
                }
            }

            reader.readAsDataURL(file); // convert to base64 string
        }
    }, [setPreview]);

    const imageForPreview = preview || oldPreview;

    return <>
        <Grid>
            {imageForPreview ? <img style={{ width: '100%' }} src={imageForPreview} alt="preview" /> : <Typography>There is no uploaded image.</Typography>}
        </Grid>
        <Grid>
            <Button
                color="primary"
                variant="outlined"
                component="label"
            >
                Upload File
        <input
                    ref={register}
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    style={{ display: "none" }}
                    name="image"
                    onChange={handleUploadFile}
                />
            </Button>
        </Grid>
    </>
}