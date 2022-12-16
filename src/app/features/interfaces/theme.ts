export interface ITheme {
    _id: string;
    title: string;
    content: string;
    posts: {
        _id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
    },
    createdAt: string;
    updatedAt: string;
}