export interface IFetchedData {
    next_page: string;
    page: number;
    per_page: number;
    photos: IPhotos[];
    total_results: number;
  }
  
  export interface IPhotos {
    alt: string;
    avg_color: string;
    height: number;
    id: number;
    liked: boolean;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
    src: IImageTypes;
    url: string;
    width: number;
  }
  
  interface IImageTypes {
    original: string;
    large: string;
    large2x: string;
    medium: string;
    small: string;
    landscape: string;
    portrait: string;
    tiny: string;
  }