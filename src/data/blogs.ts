export interface Blog {
    id: string;
    title: string;
    content: string;
}

export const blogs: Blog[] = [
    {
        id: "1",
        title: "Design Trends 2024",
        content: "In-depth analysis of emerging design trends that will shape the industry in 2024..."
    },
    {
        id: "2",
        title: "The Future of Web Design",
        content: "Exploring how artificial intelligence and machine learning are revolutionizing web design..."
    },
    {
        id: "3",
        title: "Sustainable Design Practices",
        content: "Guidelines and best practices for creating environmentally conscious digital experiences..."
    },
    {
        id: "4",
        title: "Typography in Modern Web",
        content: "A comprehensive guide to selecting and implementing typography in modern web design..."
    }
];