export interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface ProjectVideo {
    src: string;
    poster?: string;
    type: string;
}

export const heroImage: ProjectImage = {
    src: "https://framerusercontent.com/images/3OBrqHJLRGcZBKJEBGWUPGUh0.jpg",
    alt: "SingleTake App Interface"
};

export const problemImage: ProjectImage = {
    src: "https://framerusercontent.com/images/AX9PukosNFJ0NvYSZwk5RfCU4.png",
    alt: "Problem Visualization",
    caption: "Most creators struggle with video creation, leading to low-quality content or abandoned attempts"
};

export const demoVideo: ProjectVideo = {
    src: "https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs~_6Vx5WDqJAH9fNyZCHzEQzWDlOGZN6DM_sOBzD9Rw.mp4",
    type: "video/mp4"
};

export const processImages: ProjectImage[] = [
    {
        src: "https://framerusercontent.com/images/N5zxXzSr6t2nfhsXPw0eRgJc.png",
        alt: "User Research Insights",
        caption: "User research revealed key pain points in video creation"
    },
    {
        src: "https://framerusercontent.com/images/NXqNvb8LFXg7oHBYUyzQVwu4mlc.png",
        alt: "Design Process",
        caption: "Iterative design process focusing on user feedback"
    }
];