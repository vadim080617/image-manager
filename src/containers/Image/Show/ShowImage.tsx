import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { View } from '../../../components/image/components/VIew';
import { useShowImage } from '../../../components/image/hooks/crud';

export const ShowImage = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const { data } = useShowImage(Number(id));
    const handleUpdate = useCallback(() => history.push(`/images/${id}/update`), [history, id]);

    return data ? <View image={data} handleUpdate={handleUpdate} /> : null;
}