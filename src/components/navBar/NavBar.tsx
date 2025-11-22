import React, { useState } from "react";
import "./navBar.css";
import logoImg from "../../assets/slovakia.png"

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home-page");

    const handleClick = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
        });

        setActiveLink(sectionId);
    };

    return (
        <div className="animation-top-bottom outer-container pt-2 pb-2 pr-40 pl-40 bg-[#1A0B2E] shadow-xs flex justify-center items-center fixed top-0 right-0 left-0">
            <div className="inner-container w-full flex justify-between">
                <div className="logo-container w-12 ml-20 overflow-hidden rounded-full">
                    <img
                        src={logoImg}
                        alt="logo-img"
                        className="object-cover "
                    />
                </div>

                <div className="ml-200 mr-10 flex flex-1 justify-between items-center text-lg">
                    <div>
                        <a
                            href="#home-page"
                            className={`nav-link ${
                                activeLink === "home-page" ? "active" : ""
                            }`}
                            onClick={handleClick("home-page")}
                        >
                            HOME
                        </a>
                    </div>
                    <div>
                        <a
                            href="#about-section"
                            className={`nav-link ${
                                activeLink === "about-section" ? "active" : ""
                            }`}
                            onClick={handleClick("about-section")}
                        >
                            ABOUT
                        </a>
                    </div>
                    <div>
                        <a
                            href="#project-section"
                            className={`nav-link ${
                                activeLink === "project-section" ? "active" : ""
                            }`}
                            onClick={handleClick("project-section")}
                        >
                            LAB
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
