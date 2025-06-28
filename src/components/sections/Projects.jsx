import ProfileCardImg from '../../assets/ProfileCard.webp';
import MarioClubImg from "../../assets/MarioClub.webp";
import ImageClassificationImg from "../../assets/Image .png";
import PortfolioImg from "../../assets/Portfolio.png";

export const Projects = ()=>{
    return(
        <section className="min-h-screen flex items-center justify-center py-20" id="projects">
            <div className="max-2-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 ">
                        <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                        <div>
                            {["React", "Tailwindcss", "CSS"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover: shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <img className="h-100 w-100 rounded py-2" src={PortfolioImg} />
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 ">
                        <h3 className="text-xl font-bold mb-2">Image Classification</h3>
                        <div>
                            {["Pytorch", "Numpy", "Matplotlib"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover: shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <img className="h-100 w-100 rounded py-2" src={ImageClassificationImg} />
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 ">
                        <h3 className="text-xl font-bold mb-2">Profile Card</h3>
                        <div>
                            {["HTML", "CSS"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover: shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <img className="h-100 w-100 rounded py-2" src={ProfileCardImg} />
                    </div>

                </div>
            </div>
        </section>
    )
}