export interface SideProject {
    id: string;
    title: string;
    description: string;
    content: string;
}

export const sideProjects: SideProject[] = [
    {
        id: "1",
        title: "Extracting Highlights and underlines from a book",
        description: "A tool to digitize and organize book annotations",
        content: "A tool that helps readers extract and organize highlights and underlines from physical books, making it easier to review and reference important passages."
    },
    {
        id: "2",
        title: "Automating slot booking to access squash courts",
        description: "Automated booking system for squash court reservations",
        content: "An automation solution that simplifies the process of booking squash courts by monitoring availability and securing slots automatically."
    },
    {
        id: "3",
        title: "Mimbaport - experience X like how your favorite people would",
        description: "Platform for sharing and experiencing perspectives",
        content: "A unique platform that allows users to experience content through the lens of their favorite people's perspectives and preferences."
    },
    {
        id: "4",
        title: "Day productivity quantifier",
        description: "Tool for measuring and analyzing daily productivity",
        content: "A productivity tracking tool that helps quantify daily activities and provides insights into personal productivity patterns."
    },
    {
        id: "5",
        title: "Analyzing movies through scene thumbnails",
        description: "Visual analysis tool for movie scene composition",
        content: "A tool that extracts key frames from movies and arranges them as thumbnails, enabling visual analysis of cinematography, color grading, and scene composition patterns throughout the film."
    }
];