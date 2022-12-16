export interface IPost {
    _id: string;
    content: string;
    theme: {
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
    },
    createdAt: string;
    updatedAt: string;
}