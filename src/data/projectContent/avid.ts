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
    src: "https://framerusercontent.com/images/UIOHyh8fZ1pHW9W6mKHhMj3szio.jpg",
    alt: "AViD Platform Interface"
};

export const problemImage: ProjectImage = {
    src: "https://framerusercontent.com/images/POIHyh8fZ1pHW9W6mKHhMj3szio.png",
    alt: "Educational Platform Challenge",
    caption: "Traditional learning platforms struggle with engagement and accessibility"
};

export const demoVideo: ProjectVideo = {
    src: "https://framerusercontent.com/modules/assets/LKJHyh8fZ1pHW9W6mKHhMj3szio.mp4",
    type: "video/mp4"
};

export const processImages: ProjectImage[] = [
    {
        src: "https://framerusercontent.com/images/MNBHyh8fZ1pHW9W6mKHhMj3szio.png",
        alt: "Educational UX Research",
        caption: "Researching student and educator needs"
    },
    {
        src: "https://framerusercontent.com/images/VCXHyh8fZ1pHW9W6mKHhMj3szio.png",
        alt: "Platform Design Process",
        caption: "Creating an engaging learning experience"
    }
];