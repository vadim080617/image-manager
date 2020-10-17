import * as yup from 'yup';

export const createSchema = yup.object().shape({
    tooltip: yup.object().shape({
        text: yup.string().required(),
        color: yup.string().required(),
        position: yup.string().required(),
    }),
    image: yup.mixed().required()
        .test('fileType', 'File is Required. Allowed file types: jpeg, jpg, png; allowed file size < 5mb', value => {
            const file = value[0];
            if (!file) return false;
            const fileType = file.name.split('.').pop();

            if(!['jpeg', 'jpg', 'png'].includes(fileType)) return false;

            const mbs = Math.floor(file.size/1000000);

            return mbs < 5;
        })
});
  