import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">About Me</h2>
          <div className="space-y-6 text-textSecondary">
            <p>
              I am a versatile Full Stack Developer with a strong foundation in both low-level and high-level programming. My journey in technology began with a deep dive into systems programming using C and C++, which has given me a solid understanding of computer architecture and performance optimization.
            </p>
            <p>
              My expertise spans across the entire development stack, from backend systems to modern web applications. I specialize in building robust, scalable applications using React.js, Node.js, and TypeScript, while maintaining a keen eye for performance and user experience.
            </p>
            <p>
              With experience in containerization using Docker and proficiency in various development tools and frameworks, I bring a comprehensive approach to software development. I'm particularly passionate about creating efficient, maintainable code and implementing best practices in software engineering.
            </p>
            <p>
              Beyond coding, I'm skilled in project management and team collaboration, with a strong command of both technical and business English. I thrive in dynamic environments where I can leverage my diverse skill set to deliver high-quality solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 