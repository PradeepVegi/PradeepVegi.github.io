export interface Book {
    id: string;
    title: string;
    author: string;
    highlights: string;
}

export const books: Book[] = [
    {
        id: "1",
        title: "Don't Make Me Think",
        author: "Steve Krug",
        highlights: "A cornerstone of web usability that emphasizes simplicity and intuitive design. Key insights include:\n\n• Users don't read pages, they scan them\n• Make clickable elements obvious\n• Break pages up into clearly defined areas\n• Get rid of half the words on each page, then get rid of half of what's left\n\nThe book's practical approach and clear examples make it essential reading for anyone involved in digital design. Krug's emphasis on real-world testing and observation over theoretical principles has influenced countless designers."
    },
    {
        id: "2",
        title: "The Design of Everyday Things",
        author: "Don Norman",
        highlights: "A fundamental exploration of the psychology behind good design. Notable concepts include:\n\n• The importance of affordances and signifiers\n• The role of mapping and feedback in design\n• How to prevent user errors through constraints\n• The value of conceptual models\n\nNorman's insights about how humans interact with objects have become foundational principles in UX design, influencing everything from door handles to digital interfaces."
    },
    {
        id: "3",
        title: "100 Things Every Designer Needs to Know About People",
        author: "Susan Weinschenk",
        highlights: "A practical guide to applying psychology to design. Key learnings include:\n\n• How people read and process information\n• The impact of color on decision making\n• Memory patterns and cognitive load\n• Social influences on user behavior\n\nWeinschenk bridges the gap between research and practical application, providing actionable insights for designing better user experiences."
    },
    {
        id: "4",
        title: "Hooked: How to Build Habit-Forming Products",
        author: "Nir Eyal",
        highlights: "An exploration of the psychology behind habit-forming products. Core concepts include:\n\n• The Hook Model: trigger, action, variable reward, investment\n• Understanding user motivation and ability\n• Creating products that ethically shape user behavior\n• The role of variable rewards in engagement\n\nEyal's framework provides valuable insights for designers looking to create products that become part of users' daily routines."
    },
    {
        id: "5",
        title: "About Face: The Essentials of Interaction Design",
        author: "Alan Cooper",
        highlights: "A comprehensive guide to interaction design principles. Key topics include:\n\n• Goal-directed design methodology\n• Creating personas and scenarios\n• Digital product behavior and form\n• Interface design patterns\n\nCooper's systematic approach to design thinking has influenced how designers approach complex interaction challenges."
    },
    {
        id: "6",
        title: "Emotional Design",
        author: "Don Norman",
        highlights: "An exploration of how emotions influence design and user experience. Major themes include:\n\n• The three levels of design: visceral, behavioral, and reflective\n• How emotions affect decision-making\n• The relationship between aesthetics and usability\n• Creating meaningful product experiences\n\nNorman's insights help designers understand how emotional responses shape user interactions and product success."
    },
    {
        id: "7",
        title: "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
        author: "Jake Knapp",
        highlights: "A practical guide to running design sprints. Key takeaways include:\n\n• Structured approach to problem-solving\n• Rapid prototyping and testing methods\n• Decision-making frameworks\n• The importance of time constraints in innovation\n\nKnapp's methodology has become a standard tool for teams looking to quickly validate design solutions."
    },
    {
        id: "8",
        title: "Information Architecture for the World Wide Web",
        author: "Peter Morville & Louis Rosenfeld",
        highlights: "A comprehensive guide to organizing and structuring digital information. Essential concepts include:\n\n• Information architecture principles\n• Navigation systems design\n• Search strategies and systems\n• Metadata and classification\n\nThis book remains a fundamental resource for understanding how to make digital spaces more findable and usable."
    },
    {
        id: "9",
        title: "Lean UX",
        author: "Jeff Gothelf & Josh Seiden",
        highlights: "A guide to applying lean principles to user experience design. Key principles include:\n\n• Rapid experimentation and validation\n• Cross-functional collaboration\n• Measuring outcomes over outputs\n• Continuous learning and iteration\n\nThe authors present a practical framework for integrating user experience design with agile development practices."
    },
    {
        id: "10",
        title: "The User Experience Team of One",
        author: "Leah Buley",
        highlights: "A practical guide for solo UX practitioners. Essential insights include:\n\n• Methods for conducting research with limited resources\n• Techniques for building stakeholder buy-in\n• Tools for rapid prototyping and testing\n• Strategies for advocating for user needs\n\nBuley provides valuable strategies for designers working independently or in resource-constrained environments."
    }
];