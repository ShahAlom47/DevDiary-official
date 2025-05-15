'use client';

import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="w-full py-12 px-4 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        
        {/* Short Bio */}
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          I`m Shah Alom, a passionate Front-End Developer with a focus on building clean, user-friendly web interfaces.
          I enjoy turning complex problems into simple, beautiful designs. I love learning new technologies and sharing my journey through blogs and tutorials.
        </p>

        {/* Skills & Technologies */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              'HTML', 'CSS', 'JavaScript', "TypeScript", 'React.js', 'Next.js',
              'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB',
              'Firebase', 'JWT', 'Git', 'GitHub'
            ].map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Connect with Me</h3>
          <div className="flex gap-6 text-2xl text-gray-700 dark:text-gray-300">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.youtube.com/@your-channel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Project Overview */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">📝 Project Overview: devDiary</h3>
          <p className="text-gray-700 dark:text-gray-300">
            devDiary is a personal knowledge-sharing website built with <strong>Next.js</strong>, designed like a developer`s digital diary.
            It allows me to document and share my coding journey, YouTube tutorials, code snippets, and daily learnings in blog-style entries.
            The platform includes a clean blog UI, responsive design with Tailwind CSS, and secure user authentication using <strong>NextAuth.js</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
