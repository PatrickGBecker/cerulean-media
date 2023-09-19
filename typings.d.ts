declare global {
  interface ApiError {
    error: string;
  }
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
export interface Genre extends SanityBody {
  _type: 'genre';
  name: string;
  title: string;
  order: number;
  videos: Video[];
  banner: Image;
  slug: {
    _type: 'slug';
    current: string;
  };
}

export interface Audio extends SanityBody {
  _type: 'audio';
  title: string;
  url: string;
  description: string;
  order: number;
}
export interface Video extends SanityBody {
  _type: 'video';
  title: string;
  image: Image;
  url: string;
  genre: Genre[];
  description: string;
}
export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  description: string;
  title: string;
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
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
export interface Experience extends SanityBody {
  email: ReactNode;
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
