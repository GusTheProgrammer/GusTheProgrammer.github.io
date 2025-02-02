export interface ResumeData {
    header: {
        email: string;
        phone: string;
        name: string;
        personalWebsite: string;
        github: string;
        linkedIn: string;
    };
    education: {
        location: string;
        institution: string;
        dateRange: string;
        details: string[];
    };
    workExperience: {
        role: string;
        employer: string;
        location: string;
        dateRange: string;
        points: string[];
    }[];
    projects: {
        name: string;
        url: string;
        points: string[];
    }[];
    technicalSkills: {
        category: string;
        items: string[];
    }[];
    achievements: string[];
    additional: {
        interests: string[];
        references: string;
    };
}