import React, { useState, useEffect } from 'react';
import StickyTitle from './components/sticktitle';
import Header from './components/Header';
import myPhoto from './components/franoll.jpg';
import revisePhoto from './components/revise.png';
import pongPhoto from './components/pong.png';
import fallPomodoro from './components/fallpomodoro.png';
import ErrorMessage from './components/ErrorMessage';
import HelpPopup from './components/HelpPopup'; // Import HelpPopup
import './App.css';

const DownloadButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = () => {
    setLoading(true);
    setProgress(0);
    setError(null); // Reset any previous error

    // Simulate download progress
    const downloadTime = 3000; // 3 seconds for simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100; // Ensure progress is 100% at the end
        }
        return prev + 10;
      });
    }, downloadTime / 10);

    // Simulate an error scenario (for demo purposes)
    setTimeout(() => {
      // Simulate an error occurring 2 seconds in
      if (Math.random() < 0.5) {
        setError('Download failed. Please Contact Me to Notify!');
        setLoading(false);
        clearInterval(interval);
        return;
      }

      // Trigger the actual file download (this should be your actual file URL)
      const link = document.createElement('a');
      link.href = 'src/components/Resume.pdf';
      link.download = 'FranollFantuResume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, downloadTime);
  };

  return (
    <div>
      <button onClick={handleDownload}>
        {loading ? 'Downloading...' : 'Download Resume'}
      </button>
      {loading && (
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

const App: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [showHelp, setShowHelp] = useState<boolean>(false); // State for help popup

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let newTitle = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
        newTitle = section.querySelector('h1')?.textContent || '';
      }
    });

    setCurrentTitle(newTitle);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header onHelpClick={() => setShowHelp(true)} /> {/* Pass the help click handler */}
      <StickyTitle title={currentTitle} />
      {showHelp && <HelpPopup onClose={() => setShowHelp(false)} />} {/* Render HelpPopup if showHelp is true */}
      <main>
        <img src={myPhoto} alt="Profile" className="profile-photo" />
        <section id="about-me">
          <h1 className="AboutMe">Franoll Fantu</h1>
          <p className="AboutMeP">Hi! I'm a Second Year Computing Science student at SFU,<br /></p>
          <p className="AboutMeL">
            <a href="https://www.linkedin.com/in/franollfantu/?originalSubdomain=ca">LinkedIn</a> | <a href="https://github.com/franollf">Github</a>
          </p>
        </section>

        <section id="bio">
          <h1>Bio</h1>
          <div className="bioparagraph">
            <p>
              Hi! I'm currently an SFU Student in Computing Sciences.<br />
              I am actively working on projects and seeking my first co-op term. All projects can be seen down below and on my Github as well. When I'm not doing projects or in school, you can find me outdoors. I love running and entering into races with friends as well as hiking and seeing all the amazing views British Columbia has for me. My smaller hobbies consist of listening to music; I feel that music is what really fuels my creativity. <br />
              I listen to all genres like indie, 80's-90's RnB, Japanese City Pop, Latin, and many more. This was just a short intro of who I am. Please go through the rest of the website to see more!
            </p>
          </div>
        </section>

        <section id="projects">
          <h1>Projects</h1>
          <div className="project-container">
            {/* First Project */}
            <div className="project-details">
              <h3><a href="https://github.com/franollf/Fall-Pomodoro" target="_blank">Fall Pomodoro</a></h3>
              <p>A Fall Inspired Pomodoro Timer<br />Uses HTML, CSS, & JavaScript</p>
              <img src={fallPomodoro} alt="Fall Pomodoro" className="project-image" />
            </div>

            {/* Second Project */}
            <div className="project-details">
              <h3><a href="https://github.com/franollf/Revise">Revise</a></h3>
              <p>FlashCard Web App<br />Uses HTML, CSS, & JavaScript</p>
              <img src={revisePhoto} alt="Revise Project Photo" className="project-image" />
            </div>

            {/* Third Project */}
            <div className="project-details">
              <h3><a href="https://github.com/franollf/Pong">Pong</a></h3>
              <p>Simple Pong Game<br />Uses Python (tkinter + turtle)</p>
              <img src={pongPhoto} alt="Pong Project Photo" className="project-image" />
            </div>
          </div>
        </section>

        {/* Volunteer Experience Section */}
        <section id="volunteer-experience">
          <h1>Volunteer Experience</h1>
          <div className="volunteer-container">
            {/* First Volunteer Experience */}
            <div className="volunteer-details">
              <h3>L.A. Matheson Secondary School</h3>
              <p>Role: Peer Tutor</p>
              <p>Every Tuesday and Thursday, I taught junior grades of math and science in an after-school program.</p>
            </div>

            {/* Second Volunteer Experience */}
            <div className="volunteer-details">
              <h3>Constituency Youth Council</h3>
              <p>Role: Youth Council Member</p>
              <p>Provided insight on political issues affecting Surrey’s youth to the Liberal party. Engaged in conversations with several members of Parliament to discuss potential solutions and policies that could address these issues.</p>
            </div>

            {/* Third Volunteer Experience */}
            <div className="volunteer-details">
              <h3>Prince Charles Elementary School</h3>
              <p>Role: Basketball Coach</p>
              <p>Description: Instructed and trained a team of elementary students, organizing scrimmages and games to provide them a basketball season that was lost due to COVID.</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h1>Education</h1>
          <div className="education-details">
            <h3><a href="https://www.sfu.ca/">Simon Fraser University</a></h3>
            <p>Degree: <strong><a href="https://www.sfu.ca/students/admission/programs/a-z/c/computing-science/overview.html">Bachelor of Science in Computing Science</a></strong></p>
            <p>Year: <strong>Expected: 2027</strong></p>
            <p>Relevant Courses: 
              <ul>
                <li>CMPT 276 Intro to Software Engineering</li>
                <li>CMPT 310 Intro to Artificial Intelligence</li>
                <li>CMPT 225 Data Structures and Programming</li>
              </ul>
            </p>
          </div>
        </section>

        <section id="experience">
          <h1>Experience</h1>
          <div className="experience-content">
            <p>
              🚧 No experience... *yet!* <br />
              I'm actively on the lookout for opportunities to gain some hands-on experience. 🙏 If you’re hiring or know of any cool projects, I’m all ears! 
            </p>
          </div>
        </section>

        <section id="resume">
              <h1>Resume</h1>
              <DownloadButton />
              <img src="src/components/resume.png" alt="Resume" id="resumepdf" />
            </section>

            <section id="contact" className="contact-section">
  <h3 className="contact-header">Contact</h3>
  <div className="contact-content">
    <p>If you have any questions or opportunities, feel free to reach out:</p>
    <p>Email: <a href="mailto:fantu.franoll1@gmail.com">fantu.franoll1@gmail.com</a></p>
  </div>
</section>

            </main>
    </div>
    
  );
};

export default App;
