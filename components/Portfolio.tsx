import { Genre, Video } from '@/typings';
import Row from './Row';
import TileGrid from './TileGrid';

type Props = {
  videos: Video[];
  genres: Genre[];
};

const CAROUSEL_GENRES = ['spotlight'];

function Portfolio({ videos, genres }: Props) {
  const sorted = [...genres].sort((a, b) => a.order - b.order);
  const carouselGenres = sorted.filter((g) =>
    CAROUSEL_GENRES.includes(g.title.toLowerCase())
  );
  const tileGenres = sorted.filter(
    (g) => !CAROUSEL_GENRES.includes(g.title.toLowerCase())
  );

  return (
    <>
      {/* Carousel genres — each gets its own snap section */}
      {carouselGenres.map((genre, index) => (
        <section
          key={genre._id}
          id={index === 0 ? 'portfolio' : undefined}
          className="snap-start"
        >
          <Row title={genre.title} videos={genre.videos} />
        </section>
      ))}

      {/* Tile genres — all on one page */}
      {tileGenres.length > 0 && (
        <section className="snap-start">
          <div className="h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6 overflow-hidden">
            {tileGenres.map((genre) => (
              <TileGrid key={genre._id} title={genre.title} videos={genre.videos} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Portfolio;
