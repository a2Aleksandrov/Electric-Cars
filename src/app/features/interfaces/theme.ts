export interface ITheme {
    _id: string;
    title: string;
    comment: string;
    author: {
        id: string;
        username: string;
        email: string;
    };
    posts: {
        _id: string;
        comment: string;
        author: {
            _id: string;
            username: string;
            email: string;
        };
        createdAt: string;
        updatedAt: string;
    }[],
    createdAt: string;
    updatedAt: string;
}