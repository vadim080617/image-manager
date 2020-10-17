import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useShowImage, useUpdateImage } from '../../../components/image/hooks/crud';
import { TooltipedImage } from '../../../components/image/interfaces';
import { ImageForm } from '../../../components/image/components/Form';
import { updateSchema } from '../../../components/image/schemas/update.schema';

export const Update = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const { data } = useShowImage(Number(id));
    const handleCancel = useCallback(() => history.push(`/images/${id}`), [history, id]);
    const [updateImage] = useUpdateImage({ onSuccess: () => history.push('/') });
    const handleSubmit = useCallback((data: TooltipedImage<FileList>) => {
        const { image: fileList, ...rest } = data;
        const image = fileList[0];
        const updateBody = rest as TooltipedImage<File>;
        if (image) {
            updateBody.image = image
        }
        updateImage({ id: Number(id), ...updateBody });
    }, [updateImage, id])

    return <div>
        {data && <ImageForm schema={updateSchema} oldPreview={data.image} onCancel={handleCancel} onSubmit={handleSubmit} defaultValues={{ tooltip: data.tooltip }} />}
    </div>;
}