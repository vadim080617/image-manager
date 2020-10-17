import { useQuery, MutateConfig, useMutation, QueryConfig } from 'react-query';

import { TooltipedImage, TooltipedImageEntity } from "../interfaces";
import { ImageService } from "../services/FakeImageService";

const imageService = new ImageService();

// Substitute methods below for real api
const storeImage = (data: TooltipedImage<File>): Promise<TooltipedImageEntity<string>> => imageService.store(data);
const indexImage = (): Promise<TooltipedImageEntity<string>[]> => imageService.index();
const destroyImage = (id: number): Promise<void> => imageService.destroy(id);
const showImage = (key: string, id: number): Promise<TooltipedImageEntity<string>> => imageService.show(id);
const updateImage = (data: TooltipedImageEntity<File>): Promise<TooltipedImageEntity<string>> => imageService.update(data);

export const useStoreImage = (options?: MutateConfig<any>) => useMutation(storeImage, options)
export const useUpdateImage = (options?: MutateConfig<any>) => useMutation(updateImage, options)
export const useIndexImage = (options?: QueryConfig<any>) => useQuery('indexImage', indexImage, options)
export const useDestroyImage = (options?: MutateConfig<any>) => useMutation(destroyImage, options);
export const useShowImage = (id: number, options?: QueryConfig<any>) => useQuery(['showImage', id], showImage, options);

