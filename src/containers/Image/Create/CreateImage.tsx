import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom';

import { ImageForm } from '../../../components/image/components/Form/Form'
import { useStoreImage } from '../../../components/image/hooks/crud';
import { TooltipedImage } from '../../../components/image/interfaces';
import { createSchema } from '../../../components/image/schemas/create.schema';

const defaultValues = {
    tooltip: {
        color: 'rgb(0, 0, 0)',
        position: 'top',
    }
};

export const CreateImage = () => {
    const history = useHistory();
    const handleCancel = useCallback(() => history.push('/'), [history]);
    const [storeImage] = useStoreImage({ onSuccess: () => history.push('/') });
    const handleSubmit = useCallback((data: TooltipedImage<FileList>) => {
        const image = data.image[0];
        storeImage({ ...data, image });
    }, [storeImage])

    return <div>
        <ImageForm schema={createSchema} onCancel={handleCancel} defaultValues={defaultValues} onSubmit={handleSubmit} />
    </div>;
}