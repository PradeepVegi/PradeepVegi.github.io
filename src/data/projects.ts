export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        title: "SingleTake",
        description: "A mobile app that helps creators make better videos with real-time feedback",
        fullDescription: "SingleTake is a mobile app that helps creators make better videos by providing real-time feedback and guidance during recording.",
        tags: ["Mobile App", "UX Design", "AI", "Video Creation"]
    },
    {
        id: "2",
        title: "Healome",
        description: "A sustainable fashion brand combining eco-friendly materials with modern design",
        fullDescription: "Healome is a sustainable fashion brand that combines eco-friendly materials with modern design aesthetics, creating a new standard for conscious fashion.",
        tags: ["Branding", "Sustainability", "Fashion", "E-commerce"]
    },
    {
        id: "3",
        title: "Message Center",
        description: "Healthcare communication platform streamlining patient-provider interactions",
        fullDescription: "Message Center is a healthcare communication platform designed to streamline and secure patient-provider interactions.",
        tags: ["Healthcare", "UX Design", "Communication", "Security"]
    },
    {
        id: "4",
        title: "AViD",
        description: "Educational platform transforming learning through interactive content",
        fullDescription: "AViD is an educational platform that transforms traditional learning through interactive content and personalized learning paths.",
        tags: ["Education", "UX Design", "AI", "Interactive Learning"]
    }
];