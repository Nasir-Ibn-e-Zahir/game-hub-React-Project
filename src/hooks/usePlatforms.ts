import platforms from '../data/platforms';

interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => platforms;

export default usePlatforms;