// src/data/profile.ts

export interface Profile {
    name: string;
    alternateNames: string[];
    jobTitle: string;
    company: string;
    location: {
        city: string;
        country: string;
        display: string;
    };
    socials: {
        github: string;
        linkedin: string;
    };
    skills: string[];
}

export const profile: Profile = {
    name: "LaGrace Lehuni",
    alternateNames: ["llehuni", "llehunix", "LagraceLlehuni", "llehuni lagrace", "llehuni LaGrace", "LaGrace", "Lehuni"],
    jobTitle: "Software Engineer",
    company: "Haute Sel",
    location: {
        city: "Kinshasa",
        country: "CD",
        display: "Kinshasa, DRC"
    },
    socials: {
        github: "https://github.com/llehuni",
        linkedin: "https://www.linkedin.com/in/lagrace-lehuni-9366052a5"
    },
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "PHP", "Node.js", "Python", "SQL", "Git"]
};

/**
 * Générateur de Schema JSON-LD dynamique
 * Permet d'injecter dynamiquement l'URL de l'image générée par Astro
 */
export function generateProfileSchema(ogImageURL: string) {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": profile.name,
            "alternateName": profile.alternateNames,
            "image": ogImageURL,
            "jobTitle": profile.jobTitle,
            "worksFor": {
                "@type": "Organization",
                "name": profile.company
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": profile.location.city,
                "addressCountry": profile.location.country
            },
            "sameAs": [
                profile.socials.github,
                profile.socials.linkedin
            ],
            "knowsAbout": profile.skills
        }
    });
}