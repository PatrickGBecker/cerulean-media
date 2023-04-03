export interface Genre {
    id: number
    name: string
}

export interface Video {
    title: string
    media_type?: string
    id: number
    name: string
    description: string
}

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  description: string;
  title: string;
}

export interface PageInfo extends SanityBody {
   _type: "pageInfo";
  title: string;
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface SkillType extends SanityBody {
    _type: 'skill';
    image: Image;
    description: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: 'project';
    image: Image;
    summary: string;
    url: string;
}

export interface Experience extends SanityBody {
    _type: 'experience';
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}