import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { about } from '../data/portfolio';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Acerca de Mí
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {about.bio}
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={about.photo}
            alt="Foto de perfil"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
