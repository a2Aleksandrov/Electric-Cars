export interface IPost {
    _id: string;
    content: string;
    theme: {
        _id: string;
        title: string;
        content: string;
        author: {
            _id: string;
            username: string;
            email: string;
        };
        posts: {
            _id: string;
            content: string;
            author: {
                _id: string;
                username: string;
                email: string;
            };
            createdAt: string;
            updatedAt: string;
        }[];
        createdAt: string;
        updatedAt: string;
    },
    createdAt: string;
    updatedAt: string;
}