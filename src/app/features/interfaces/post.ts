export interface IPost {
    _id: string;
    content: string;
    theme: {
        _id: string;
        title: string;
        content: string;
        author: string
        posts: {
            _id: string;
            content: string;
            author: string;
            createdAt: string;
            updatedAt: string;
        },
        createdAt: string;
        updatedAt: string;
    },
    createdAt: string;
    updatedAt: string;
}