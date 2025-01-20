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
    src: "https://framerusercontent.com/images/bB7qeKKcl5dYg6APqEqAJ3nA.jpg",
    alt: "Message Center Interface"
};

export const problemImage: ProjectImage = {
    src: "https://framerusercontent.com/images/XQHyh8fZ1pHW9W6mKHhMj3szio.png",
    alt: "Healthcare Communication Challenge",
    caption: "Healthcare providers need efficient ways to manage patient communications"
};

export const demoVideo: ProjectVideo = {
    src: "https://framerusercontent.com/modules/assets/XyzHyg8fZ1pHW9W6mKHhMj3szio.mp4",
    type: "video/mp4"
};

export const processImages: ProjectImage[] = [
    {
        src: "https://framerusercontent.com/images/QWEHyh8fZ1pHW9W6mKHhMj3szio.png",
        alt: "User Research in Healthcare",
        caption: "Understanding healthcare provider communication needs"
    },
    {
        src: "https://framerusercontent.com/images/RTYHyh8fZ1pHW9W6mKHhMj3szio.png",
        alt: "Interface Design Process",
        caption: "Designing an intuitive communication interface"
    }
];