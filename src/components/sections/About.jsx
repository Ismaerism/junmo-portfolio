export const About = () =>{
    const frontendSkills = ["React", "Tailwindcss", "Bootstrap", "HTML", "CSS"]
    const backendSkills = ["Node.js", "Python", "C++"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover: shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ">
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>


                     <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover: shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ">
                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul>
                        <li>
                            <strong>
                                BEng in Computer Science 
                            </strong>
                            - Hong Kong University of Science and Technology (2023 - Present)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
                    <div className="space-y-4 text-gray-300">

                        <div>
                            <h3> <strong> Web Developer at ForeSee (Feb 2025 - Jun 2025)</strong></h3>
                            <p>• Assisted in building and maintaing front-end components of the website using React</p>
                        </div>

                        <div>
                            <h3> <strong> Data Scientist Intern at Synergy Marketing Technology Limited (Feb 2025 - Jun 2025)</strong></h3>
                            <p>
                                • Developed a real estate price index and automated valuation model using pandas, scikit-learn and statistical methods including time series analysis, linear regression, etc.
                            </p>
                        </div>

                        <div>
                            <h3> <strong> Web/Mobile Application Developer Intern at ActiviKid (Dec 2024 - Jan 2025)</strong></h3>
                            <p>
                                • Designed, developed, and deployed a landing page to using Bootstrap and CSS.</p>
                        </div>

                        <div>
                            <h3> <strong> Project Manager at Calico (Sep 2023 - Dec 2023)</strong></h3>
                            <p>
                                • Monitored project timelines, diagnosed progress toward app release schedules, and facilitated smooth app deployment and distribution3.</p>
                        </div>
                            
                    </div>
                </div>

            </div>
        </div>
    </section>
}