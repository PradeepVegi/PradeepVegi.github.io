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
    src: "https://framerusercontent.com/images/psdpJaKvZlvGtG1ZaieqQNvs.jpg",
    alt: "Healome Brand Identity"
};

export const problemImage: ProjectImage = {
    src: "https://framerusercontent.com/images/yQNFqWrLFxgVUB59e2JJFk5hs.png",
    alt: "Sustainable Fashion Challenge",
    caption: "Fast fashion's environmental impact requires innovative solutions"
};

export const demoVideo: ProjectVideo = {
    src: "https://framerusercontent.com/modules/assets/NpHyg8fZ1pHW9W6mKHhMj3szio.mp4",
    type: "video/mp4"
};

export const processImages: ProjectImage[] = [
    {
        src: "https://framerusercontent.com/images/Rk7kygWZVDWzrjYlZoVV6vKec.png",
        alt: "Brand Strategy Development",
        caption: "Developing a cohesive brand strategy for sustainable fashion"
    },
    {
        src: "https://framerusercontent.com/images/XcZXg43mKxfVUB59e2JJFk5hs.png",
        alt: "Visual Identity System",
        caption: "Creating a visual system that reflects sustainability"
    }
];