import * as LucideIcons from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Habilidades
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Tecnologías y herramientas que domino
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => {
          const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
          return (
            <div key={skill.name} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {IconComponent && <IconComponent size={32} className="text-blue-600 dark:text-blue-400 mr-3" />}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{skill.level}%</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
