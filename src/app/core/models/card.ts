export interface Card {
    id: string;
    name: string;
    types: string[];
    images: {
        small: string;
        large: string;
    }
}
