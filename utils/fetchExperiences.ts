import { Experience } from '../typings';

export const fetchExperiences = async () => {
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    
    const data = await res.json()
    console.log('res, data: ', data.experiences)
    const experiences: Experience[] = data.experiences;

    return experiences;
}