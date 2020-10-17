import * as yup from 'yup';

export const updateSchema = yup.object().shape({
    tooltip: yup.object().shape({
        text: yup.string().required(),
        color: yup.string().required(),
        position: yup.string().required(),
    }),
    image: yup.mixed().required()
        .test('fileType', 'Wrong file type, allowed: jpeg, jpg, png', value => {
            const file = value[0];
            if (!file) return true;
            const fileType = file.name.split('.').pop();

            return ['jpeg', 'jpg', 'png'].includes(fileType);
        })
        .test('fileSize', 'Image should be less then 5 mb', value => {
            const file = value[0];
            if (!file) return true;
            const mbs = Math.floor(file.size/1000000);

            return mbs < 5;
        }),
});
  