export interface IMark {
    img: string;
    name: string;
    cars: {
        _id: string;
        mark: string;
        model: string;
        details: string;
    }
}