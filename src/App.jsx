import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Palette, Code2, Blocks, Database, Server,Menu, FileJson, Building2, Building, Briefcase, ExternalLink, Github, Linkedin, Instagram, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import  image  from '../src/assets/sai.jpeg';
import  patra  from '../src/assets/icons/patra.png';
import  react  from '../src/assets/icons/react.png';
import  css  from '../src/assets/icons/css.png';
import  expressjs  from '../src/assets/icons/expressjs.png';
import  talwind  from '../src/assets/icons/tailwind.png';
import  nodejs  from '../src/assets/icons/nodejs.png';
import  js  from '../src/assets/icons/js.png';
import  movies  from '../src/assets/projects/movies.png';
import  crypto  from '../src/assets/projects/crypto.png';
import  redbus  from '../src/assets/projects/redbus.png';
import  closeup  from '../src/assets/closeup.jpg';

function App() {
  // State and other variables remain the same
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectRefs = useRef({});
  const [showProfilePic, setShowProfilePic] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { icon: js, name: 'JavaScript' },
    { icon: react, name: 'React' },
    { icon: expressjs, name: 'Express' },
    { icon: patra, name: 'MongoDB' },
    { icon: css, name: 'CSS' },
    { icon: talwind, name: 'Tailwind' },
    { icon: nodejs, name: 'Node.js' },
  ];

  const projects = [
    {
      id: 'filmography site',
      title: 'Filmography site',
      subtitle: 'A React-Based Platform for Exploring Movies and Series.',
      description: 'Developed a movie and series information platform using React, React Query, Zustand, and TailwindCSS. Implemented efficient state management , integrated a search bar for seamless content discovery. Added dark/light mode options and real-time toast notifications to improve user experience. ',
      image:movies ,
      year: '2024',
      category: 'Website',
      sourceCode: 'https://github.com/sairampatra/IMDBCloneProject',
      liveDemo: 'https://imdbclone-project.netlify.app/'
    },
    {
      id: 'Crypto Tracker',
      title: 'Crypto Tracker',
      subtitle: '​Provides a detailed scope into the world of digital currencies.',
      description: 'A responsive cryptocurrency dashboard built with React, React Query, and Tailwind CSS. It fetches real-time data from the CoinGecko API, allowing users to search and view details of various cryptocurrencies. The application features interactive graphs for data visualization, efficient state management with React Query, and smooth routing using React Router DOM. Skeleton loaders enhance the user experience during data fetching.',
      image: crypto,
      year: '2023',
      category: 'Website',
      sourceCode: 'https://github.com/sairampatra/CryptoGod',
      liveDemo: 'https://crypto-god.vercel.app/'
    },
    {
      id: 'Red bus',
      title: 'Red bus',
      subtitle: '​A pixel-perfect replica ensuring seamless experience across all devices.',
      description: 'A pixel-perfect, fully responsive clone of the RedBus website built using HTML and CSS. This project replicates the core layout and design of the original platform, ensuring seamless usability across all devices—from desktops to smartphones. The standout feature is its adaptability, delivering a consistent and intuitive user experience regardless of screen size.',
      image: redbus,
      year: '2022',
      category: 'Website',
      sourceCode: 'https://github.com/sairampatra/redbus',
      liveDemo: 'https://sairampatra.github.io/redbus/'
    }
  ];

  const experience = [
    { 
      role: 'Bikiba-React Developer', 
      year: '2022',
      description: '• Developed an interactive admin dashboard using React.js that improved workflow efficiency by 25% , Integrated backend APIs and implemented authentication via google firebase, reducing security incidents by 100%'
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleContactClick = () => {
    window.location.href = 'mailto:saip01798@gmail.com';
  };
  const toggleProject = (projectId) => {
    // Set the selected project
    setSelectedProject(prevSelected => {
      const newSelected = prevSelected === projectId ? null : projectId;
      
      // If we're opening a project, scroll to it after a short delay
      if (newSelected) {
        setTimeout(() => {
          scrollToProjectDetails(projectId);
        }, 100);
      }
      
      return newSelected;
    });
  };
  
  const scrollToProjectDetails = (projectId) => {
    if (projectRefs.current[projectId]) {
      projectRefs.current[projectId].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const NavLinks = ({ onClick }) => (
    <>
      <Link
        to="about"
        smooth={true}
        className="cursor-pointer hover:text-primary transition-colors"
        onClick={onClick}
      >
        About
      </Link>
      <Link
        to="skills"
        smooth={true}
        className="cursor-pointer hover:text-primary transition-colors"
        onClick={onClick}
      >
        Skills
      </Link>
      <Link
        to="experience"
        smooth={true}
        className="cursor-pointer hover:text-primary transition-colors"
        onClick={onClick}
      >
        Experience
      </Link>
      <Link
        to="projects"
        smooth={true}
        className="cursor-pointer hover:text-primary transition-colors"
        onClick={onClick}
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        className="cursor-pointer hover:text-primary transition-colors"
        onClick={onClick}
      >
        Contact
      </Link>
    </>
  );
  return (
    <div className="min-h-screen bg-[#F5EFE5]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 md:px-8 lg:px-24 flex justify-between items-center">
          <Link to="home" smooth={true} className="font-serif text-2xl cursor-pointer">
            Astrid
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/90 backdrop-blur-md"
            >
              <div className="flex flex-col gap-4 px-4 py-6">
                <NavLinks onClick={closeMenu} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={image}
            alt="Hero"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              scrolled ? 'scale-100' : 'scale-125'
            }`}
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-screen flex items-center justify-center text-white ">
          <div className="text-center md:ml-[46%] md:mt-[8%] md:text-[#69586fe6] mt-[100%] text-white" data-aos="fade-up">
            <h1 className="font-serif text-6xl md:text-8xl mb-4">Sai Ram Patra</h1>
            <p className="text-3xl md:text-5xl text-white text-shadow-lg">Full Stack Dev</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F5EFE5]">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl">Hi, my name is</h2>
              <h1 className="font-serif text-6xl md:text-8xl">Sai Ram Patra</h1>
            </div>
            <div data-aos="fade-left" className="md:pt-16">
              <p className="text-lg leading-relaxed text-gray-700">
              I’m Sai Ram Patro, a full-stack web developer with hands-on experience in building and deploying end-to-end applications. I have developed a fully functional social media clone using the MERN stack (MongoDB, Express, React, Node.js), integrated with Redux for state management and styled with Tailwind CSS.

I specialize in developing scalable frontend interfaces and RESTful backend APIs. My workflow includes version control with Git, efficient debugging, and optimized deployment strategies. I focus on writing maintainable code and following best practices in both frontend and backend development.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#F5EFE5]">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="font-serif text-4xl mb-12 text-center" data-aos="fade-up">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-md rounded-lg flex flex-col items-center text-center shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* <skill.icon className="w-12 h-12 mb-4 text-gray-700" /> */}
                <img src={skill.icon} className="w-12 h-12 mb-4 text-gray-700 filter brightness-0" alt="" />
                <p className="text-gray-800 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 bg-[#F5EFE5]">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="font-serif text-4xl mb-8 text-center" data-aos="fade-up">Experience</h2>
          <div className="space-y-4">
            {experience.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start py-4 border-b border-black last:border-b-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-1">
                  <div className="text-xl font-light ">{item.role}</div>
                  {item.description && (
                    <p className="mt-2 text-sm text-gray-600 pr-8">{item.description}</p>
                  )}
                </div>
                <div className="text-xl font-light">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#F5EFE5]">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="mb-16">
            <h1 className="font-serif text-6xl md:text-7xl mb-4" data-aos="fade-up">Featured Projects</h1>
            <p className="text-xl max-w-2xl text-gray-700" data-aos="fade-up" data-aos-delay="100">
            Check out some of my recent work where I've built practical and user-friendly websites
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                <div 
                  className="relative aspect-[16/9] overflow-hidden cursor-pointer group"
                  onClick={() => toggleProject(project.id)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <h3 className="font-serif text-4xl md:text-7xl text-white">{project.title}</h3>
                    
                    <div className="absolute top-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white/60 text-6xl font-light md:text-8xl  px-8 py-3 rounded-lg">
                        Show
                      </span>
                    </div>
                  </div>
                </div>

                {selectedProject === project.id && (
                  <div 
                    ref={el => projectRefs.current[project.id] = el}
                    className="mt-8 space-y-8 bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-md" 
                    data-aos="fade-up"
                  >
                    <div className="max-w-4xl mx-auto">
                      <h2 className="font-serif text-4xl mb-2">{project.title}</h2>
                      <p className="text-xl mb-4 text-gray-700">{project.subtitle}</p>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>{project.year}</span>
                        <span>{project.category}</span>
                      </div>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover rounded-lg"
                      data-aos="fade-up"
                    />

                    <div className="max-w-4xl mx-auto">
                      <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>

                      <div className="flex gap-4 mt-8">
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          Source Code
                        </a>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 pb-6 bg-[#1A1A1A] text-[#F5EFE5] relative w-full overflow-hidden" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16">
            <div className="space-y-8">
              {/* "Want to" Line */}
              <div className="relative h-24 md:h-32 pl-[5%]">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
                <motion.h2
                  className="font-serif text-5xl md:text-8xl lg:text-9xl leading-none text-[#F5EFE5] absolute bottom-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Want to
                </motion.h2>
              </div>

              {/* "reach out?" Line */}
              <div className="relative h-24 md:h-32">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
                <motion.h2
                  className="font-serif text-5xl md:text-8xl lg:text-9xl leading-none text-[#F5EFE5] absolute bottom-6 right-0 pr-[5%]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  reach out?
                </motion.h2>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full md:w-auto">
                <div className="flex items-center gap-8">
                  <motion.a
                    href="https://www.linkedin.com/in/sairam-patra-542678275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5EFE5] hover:text-[#0077B5] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/sairampatra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5EFE5] hover:text-black transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/sai_ram_mtw/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5EFE5] hover:text-[#E1306C] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <Instagram size={24} />
                  </motion.a>
                </div>
                <a
                  href="mailto:saip01798@gmail.com"
                  className="text-[#F5EFE5] hover:text-gray-300 transition-colors text-base"
                >
                  saip01798@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Circle */}
          <div
            className="absolute top-4 md:top-8 right-4 md:right-8 w-24 md:w-32 h-24 md:h-32 cursor-pointer"
            onMouseEnter={() => setShowProfilePic(true)}
            onMouseLeave={() => setShowProfilePic(false)}
            onClick={handleContactClick}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 w-full h-full">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <defs>
                    <path id="textPath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  </defs>
                  <text className="text-[9px]" fill="#F5EFE5">
                    <textPath href="#textPath" className="uppercase tracking-[0.2em]">
                      Contact Me • Contact Me • Contact Me •
                    </textPath>
                  </text>
                </svg>
              </div>

              <div
                className={`absolute top-1/2 left-1/2 w-16 md:w-20 h-16 md:h-20 rounded-full overflow-hidden transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                  showProfilePic ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ zIndex: 20 }}
              >
                <img
                  src={closeup}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;