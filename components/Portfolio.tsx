import { Genre, Video } from '@/typings';
import Row from './Row';

type Props = {
  videos: Video[];
  genres: Genre[];
};

function Portfolio({ videos, genres }: Props) {
  return (
    <>
      {genres
        .sort((a, b) => a.order - b.order)
        .map((genre) => (
          <section key={genre._id} className="snap-start">
            <Row title={genre.title} videos={genre.videos} />
          </section>
        ))}
    </>
  );
}

export default Portfolio;
