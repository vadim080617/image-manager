export interface TooltipedImage<ImageType = string> {
    tooltip: {
        text: string;
        color: string;
        position: 'top' | 'bottom' | 'right' | 'left';
    },
    image: ImageType
}

export interface TooltipedImageEntity<ImageType = string> extends TooltipedImage<ImageType> {
    id: number;
}