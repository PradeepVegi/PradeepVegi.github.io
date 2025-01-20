import { heroImage as singletakeHero, problemImage as singletakeProblem, demoVideo as singletakeDemo, processImages as singletakeProcess } from './projectContent/singletake';
import { heroImage as healomeHero, problemImage as healomeProblem, demoVideo as healomeDemo, processImages as healomeProcess } from './projectContent/healome';
import { heroImage as messagecenterHero, problemImage as messagecenterProblem, demoVideo as messagecenterDemo, processImages as messagecenterProcess } from './projectContent/messagecenter';
import { heroImage as avidHero, problemImage as avidProblem, demoVideo as avidDemo, processImages as avidProcess } from './projectContent/avid';

export interface ProjectSection {
    id: string;
    title: string;
    content: string;
    media?: {
        type: 'image' | 'video';
        data: any;
    };
}

export const project1Sections: ProjectSection[] = [
    {
        id: "overview",
        title: "Overview",
        content: "SingleTake is a mobile app that helps creators make better videos by providing real-time feedback and guidance during recording. It uses AI to analyze video composition, lighting, and audio quality in real-time, helping creators improve their content quality.",
        media: {
            type: 'image',
            data: singletakeHero
        }
    },
    {
        id: "problem",
        title: "The Problem",
        content: "Creating high-quality video content is challenging. Creators often struggle with basic elements like framing, lighting, and audio quality. This leads to countless retakes, wasted time, and sometimes abandoned content altogether.",
        media: {
            type: 'image',
            data: singletakeProblem
        }
    },
    {
        id: "solution",
        title: "The Solution",
        content: "SingleTake provides real-time feedback during video recording, analyzing multiple aspects of video creation simultaneously. It guides creators through proper framing, lighting adjustments, and audio optimization, all while recording.",
        media: {
            type: 'video',
            data: singletakeDemo
        }
    },
    {
        id: "process",
        title: "Design Process",
        content: "Our design process involved extensive user research with content creators, from beginners to professionals. We identified key pain points and iteratively developed solutions through prototyping and testing.",
        media: {
            type: 'image',
            data: singletakeProcess[0]
        }
    },
    {
        id: "impact",
        title: "Impact & Results",
        content: "SingleTake has helped creators reduce recording time by 60% while improving overall video quality. User testing showed a 40% improvement in video composition and an 85% reduction in retakes.",
        media: {
            type: 'image',
            data: singletakeProcess[1]
        }
    }
];

export const project2Sections: ProjectSection[] = [
    {
        id: "overview",
        title: "Overview",
        content: "Healome is a sustainable fashion brand that combines eco-friendly materials with modern design aesthetics. The project involved creating a comprehensive brand identity that reflects their commitment to sustainability while maintaining a premium fashion appeal.",
        media: {
            type: 'image',
            data: healomeHero
        }
    },
    {
        id: "problem",
        title: "The Problem",
        content: "The fashion industry is one of the largest contributors to environmental pollution. Many sustainable fashion brands struggle to balance eco-friendliness with aesthetic appeal, often resulting in compromised design or unclear messaging.",
        media: {
            type: 'image',
            data: healomeProblem
        }
    },
    {
        id: "solution",
        title: "The Solution",
        content: "We developed a brand identity system that seamlessly integrates sustainability messaging with high-end fashion aesthetics. The visual language emphasizes natural elements while maintaining a contemporary, luxurious feel.",
        media: {
            type: 'video',
            data: healomeDemo
        }
    },
    {
        id: "process",
        title: "Design Process",
        content: "The design process began with extensive market research and competitor analysis. We worked closely with sustainable fashion experts to understand the unique selling points and developed a visual system that communicates these effectively.",
        media: {
            type: 'image',
            data: healomeProcess[0]
        }
    },
    {
        id: "impact",
        title: "Impact & Results",
        content: "The new brand identity helped Healome achieve a 45% increase in brand recognition and a 30% improvement in customer engagement. The clear sustainability messaging resulted in a 25% increase in customer trust scores.",
        media: {
            type: 'image',
            data: healomeProcess[1]
        }
    }
];

export const project3Sections: ProjectSection[] = [
    {
        id: "overview",
        title: "Overview",
        content: "Message Center is a healthcare communication platform designed to streamline patient-provider interactions. The mobile app simplifies appointment scheduling, prescription renewals, and secure messaging between healthcare providers and patients.",
        media: {
            type: 'image',
            data: messagecenterHero
        }
    },
    {
        id: "problem",
        title: "The Problem",
        content: "Healthcare providers struggle with managing patient communications efficiently. Traditional methods are time-consuming and often lead to delayed responses, missed messages, and frustrated patients.",
        media: {
            type: 'image',
            data: messagecenterProblem
        }
    },
    {
        id: "solution",
        title: "The Solution",
        content: "Message Center provides a unified platform for all patient communications, featuring priority inbox management, automated appointment reminders, and secure file sharing. The interface is designed for quick actions and clear organization.",
        media: {
            type: 'video',
            data: messagecenterDemo
        }
    },
    {
        id: "process",
        title: "Design Process",
        content: "We conducted extensive research in healthcare facilities, shadowing medical staff to understand their workflow. The design went through multiple iterations based on feedback from both healthcare providers and patients.",
        media: {
            type: 'image',
            data: messagecenterProcess[0]
        }
    },
    {
        id: "impact",
        title: "Impact & Results",
        content: "Healthcare providers reported a 50% reduction in communication management time. Patient satisfaction scores improved by 35%, and response times decreased by 60% on average.",
        media: {
            type: 'image',
            data: messagecenterProcess[1]
        }
    }
];

export const project4Sections: ProjectSection[] = [
    {
        id: "overview",
        title: "Overview",
        content: "AViD is an educational platform that transforms traditional learning through interactive content and personalized learning paths. The platform combines video lessons, interactive exercises, and progress tracking to create an engaging learning experience.",
        media: {
            type: 'image',
            data: avidHero
        }
    },
    {
        id: "problem",
        title: "The Problem",
        content: "Traditional online learning platforms often fail to engage students effectively. Many students struggle with one-size-fits-all approaches and lack of interactive elements in their learning experience.",
        media: {
            type: 'image',
            data: avidProblem
        }
    },
    {
        id: "solution",
        title: "The Solution",
        content: "AViD uses adaptive learning algorithms to create personalized learning paths. The platform features interactive video lessons, real-time feedback, and gamified elements to keep students engaged throughout their learning journey.",
        media: {
            type: 'video',
            data: avidDemo
        }
    },
    {
        id: "process",
        title: "Design Process",
        content: "The design process involved collaboration with educators, students, and learning specialists. We conducted extensive user testing across different age groups and learning styles to ensure the platform's effectiveness.",
        media: {
            type: 'image',
            data: avidProcess[0]
        }
    },
    {
        id: "impact",
        title: "Impact & Results",
        content: "Students using AViD showed a 40% improvement in subject comprehension. Engagement rates increased by 65%, and course completion rates improved by 45% compared to traditional online learning methods.",
        media: {
            type: 'image',
            data: avidProcess[1]
        }
    }
];