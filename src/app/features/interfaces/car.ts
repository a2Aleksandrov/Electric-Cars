export interface ICar {
    _id: string;
    mark: string;
    model: string;
    img: string[];
    details: string;
    price: Number,
    mileage: {
        city: Number;
        highway: Number;
    },
    acceleration: Number;
    topSpeed: Number;
    battery: {
        kind: string;
        capacity: string;
    }
}