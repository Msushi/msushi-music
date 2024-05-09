export interface ReviewPreviewInfo {
    _id: string;
    name: string;
    artist: string;
    image: string;
}
export interface FeaturedReviewInfo {
    _id: string;
    name: string;
    artist: string;
    image: string;
    reviewHeader: string
}

export interface FullReviewInfo {
    _id: string;
    name: string;
    artist: string;
    image: string;
    genre: string;
    rating: Number;
    releaseYear: Number;
    reviewer: string;
    reviewHeader: string;
    reviewContent: string;
    visible: Boolean;
}
