import NavBar from "../../components/navBar/NavBar";
import { Link } from "react-router-dom";
import "./HomePage.css";
import data from "../../assets/work_experience";
import Typewriter from "typewriter-effect";
import avatar from "../../assets/avatar.png";
import linkedIn from "../../assets/linkedin.png";
import githubImage from "../../assets/github-logo.png";
import instagramImage from "../../assets/instagram.png";

const HomePage = () => {
    return (
        <div>
            {/* navigation section */}
            <div className="mb-40 relative z-100">
                <NavBar />
            </div>

            {/* main container */}
            <div className="w-380 ml-auto mr-auto flex justify-center items-center flex-col mb-40 pb-10 ">
                {/* box 1 */}
                <div
                    id="home-page"
                    className=" box-1 p-10 realative flex w-max "
                >
                    <div className="floating-info">
                        <div className="arrow-floating-img"></div>
                        <div className="floating-name"></div>
                    </div>
                    <div className="normal-animation-left-right person-pic w-85 h-85 rounded-[50%]  overflow-hidden -ml-20 ">
                        <img
                            src={avatar}
                            alt="profile"
                            className="w-full h-full object-cover "
                        />
                    </div>
                    <div className="normal-animation-right-left w-120 h-54 ml-30 mt-10 relative">
                        <div className="text-[19px] tracking-wide underline mb-2 ">
                            A Designer who
                        </div>
                        <div className="normal-animation-right-left person-info text-[56px] leading-20 ">
                            Judge a book <br /> by its{" "}
                            <span className="text-[#7127BA] ">cover</span> ...
                        </div>
                        <div className="normal-animation-right-left float-oval w-45 h-25 border border-white rounded-[50%] -rotate-5 left-44 bottom-0.5 absolute"></div>
                        <div className="mt-5">
                            Because if the cover does not impress you what else
                            can?
                        </div>
                    </div>
                </div>
                <div className="box-2 normal-animation-left-right mt-20 w-230">
                    <div className="text-[50px]">
                        I'm a
                        <span className="text-red-300 inline-block ml-5">
                            <Typewriter
                                options={{
                                    strings: [
                                        " Web Developer.",
                                        " Software Developer.",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </div>
                    <div className="text-[20px]">
                        Currently Looking for job, 🏢
                    </div>

                    <div
                        id="about-section"
                        className="mt-10 flex items-center gap-5 cursor-pointer"
                    >
                        <div className="w-15 h-15 rounded-full overflow-hidden">
                            <Link
                                to={
                                    "https://www.linkedin.com/in/sahil-kumar-527189328/"
                                }
                                target="_blank"
                            >
                                <img
                                    src={linkedIn}
                                    alt="linkIn"
                                    className="object-cover w-full"
                                />
                            </Link>
                        </div>
                        <div className="w-15 h-15 rounded-full overflow-hidden">
                            <Link
                                to={"https://github.com/Sahilkumar121"}
                                target="_blank"
                            >
                                <img
                                    src={githubImage}
                                    alt="github"
                                    className="object-cover w-full"
                                />
                            </Link>
                        </div>
                        <div className="w-15 h-15 rounded-full overflow-hidden">
                            <Link
                                to={"https://www.instagram.com/_sahil_k_insta/"}
                                target="_blank"
                            >
                                <img
                                    src={instagramImage}
                                    alt="instagram"
                                    className="object-cover w-full"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="box-3 animation-bottom-top w-230 mt-30">
                    <div className="text-[22px] leading-12">
                        "A highly dedicated college student intensely focused on
                        mastering web development. I am actively building my
                        skills to create meaningful and delightful digital
                        products. My goal is to play a major, impactful role in
                        a company by delivering solutions that harmonize user
                        needs with critical business goals."
                    </div>
                </div>

                <div className="box-4 w-230 mt-40 relative">
                    <div className="animation-left-right text-[40px]">
                        Work Experience
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-10  w-280 ">
                        {data.workExperience.map((work) => {
                            return (
                                <div
                                    key={work.id}
                                    id="working-experience"
                                    className={`${
                                        work.id % 2 !== 0
                                            ? "animation-left-right"
                                            : "animation-right-left"
                                    } border-t-4 border-t-[#4F228D] rounded-lg flex p-10 cursor-pointer
                                    `}
                                >
                                    <div className="image w-44 overflow-auto">
                                        <img
                                            src={work.image}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="ml-5 flex flex-col gap-3">
                                        <div className="text-[24px] ">
                                            {work.heading}
                                        </div>
                                        <div className="text-[15px]">
                                            {work.about}
                                        </div>
                                        <div className="text-[15px] mt-5">
                                            <button className="border border-[#693B93] p-2 rounded-lg bg-[#2C1250] cursor-pointer ">
                                                Learn more
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="gradient-div absolute w-66 h-79 top-[15%] left-[45%] rounded-[50%] -z-10 "></div>
                </div>

                <div className="box-5 w-230 flex flex-col justify-center items-center mt-40  p-5">
                    <div className="animation-bottom-top header-title flex flex-col justify-center items-center gap-5">
                        <div className="text-3xl font-extrabold">
                            I'm currently looking to join a{" "}
                            <span className="text-[#A362FF]">
                                cross-functional{" "}
                            </span>{" "}
                            team{" "}
                        </div>
                        <div className="text-xl font-extrabold">
                            that value improving people's live through
                            asseccibile design
                        </div>
                    </div>
                    <div className="language-icon mt-40 relative overflow-hidden">
                        <div className="upper-icon-container flex justify-center items-center gap-5">
                            {data.upperLanguageIcon.map((icon) => {
                                return (
                                    <div
                                        key={icon.id}
                                        className="icon w-16 h-16 rounded-full bg-[#251C31] flex justify-center items-center overflow-hidden"
                                    >
                                        <img
                                            src={icon.image}
                                            alt={icon.name}
                                            className="object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="lower-icon-container flex justify-center items-center gap-5 mt-5 mb-60">
                            {data.lowwerLanguageIcon.map((icon) => {
                                return (
                                    <div
                                        key={icon.id}
                                        className="icon w-16 h-16 rounded-full bg-[#251C31] flex justify-center items-center overflow-hidden"
                                    >
                                        <img
                                            src={icon.image}
                                            alt={icon.name}
                                            className="object-cover"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* line for programming language */}
                        <div className="w-120 h-35 rounded-[50%] border-b-2 border-b-[#36155D] -rotate-113 absolute -bottom-8 -left-17 -z-1"></div>
                        <div className="w-120 h-35 rounded-[50%] border-b-2 border-b-[#36155D] rotate-109 absolute -bottom-8 left-40 -z-1"></div>
                        <div className="w-125  border-b-2 border-b-[#36155D] absolute rotate-90 left-9 -z-1 "></div>
                    </div>
                    <div className="ring-container w-full flex justify-center relative">
                        <div className="circle-design w-64 h-64 flex justify-center items-center relative  ">
                            𝔓𝔏
                            <div className="w-98 h-51 -bottom-5 rounded-[50%] absolute -z-1 bg-[#542986] filter: blur-[30px] shadow-[0px_0px_5px_6vb_#210D41] "></div>
                            <div className="w-88 h-78 border-b border-b-[#743AA9] rounded-[50%]  absolute"></div>
                            <div className="w-95 h-71 border-b border-b-[#743AA9] rounded-[50%]  absolute"></div>
                        </div>
                        <div className="ring-circle" id="ring-1-circle"></div>
                        <div className="ring-circle" id="ring-2-circle"></div>
                        <div className="ring-circle" id="ring-3-circle"></div>

                        {/* float icon  */}
                        {/* <div className="absolute w-12">
                            <img src="./src/assets/css.png" alt="css" className="" />
                        </div> */}
                    </div>
                </div>

                {/* project section */}

                <div
                    id="project-section"
                    className="box-6 w-full p-5 mt-80 flex relative "
                >
                    <div className="animation-left-right project-text absolute w-170 h-40  bottom-25 left-80 z-2 pt-5 pl-5 pb-5 pr-10 rounded-xl text-[18px] backdrop-blur-lg bg-white/10 ">
                        A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks, recently played
                        tracks, and detailed audio information about each track.
                        Create and save new playlists of recommended tracks
                        based on your existing playlists and more.
                    </div>
                    <div className="animation-left-right right-side w-150 h-85 ml-75 flex flex-col justify-between  ">
                        <div>
                            <div className="text-[18px] text-[#9857D3] ">
                                Featured Project
                            </div>
                            <div className="text-[34px]">Example Project</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-12 h-12  flex justify-center items-center ">
                                <img src="./src/assets/click.png" alt="click" />
                            </div>
                            <div className="w-12 h-12 ">
                                <img src="./src/assets/click.png" alt="click" />
                            </div>
                        </div>
                    </div>
                    <div className="animation-right-left left-side relative">
                        <div className="w-140 h-85 bg-[#2B0B3A]  rounded-xl flex justify-end items-end">
                            <div className="img-container w-130 h-70 bg-gray-600 rounded-tl-xl rounded-bl-xl rounded-tr-xl"></div>
                        </div>
                        <div className="gradient-div absolute w-65 h-85 rounded-[50%] border border-amber-200 bottom-2 -z-1 "></div>
                        <div className="gradient-div absolute w-65 h-85 rounded-[50%] border border-amber-200 bottom-2 left-45 -z-1 "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
