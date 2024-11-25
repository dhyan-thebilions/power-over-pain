import React from "react";
import "../styles/Welcome.css";

const welcome = () => {
    return (
        <React.Fragment>
            <div className="welcome_wrapper">
                <div className="welcome_container">
                    <div className="welcome_h1">
                        Welcome! I’m Payal Mehta, and I’m delighted you’re here.
                    </div>
                    <div className="welcome_p">
                        Originally from India and now calling Dallas, Texas home, I am
                        passionate about helping you achieve a pain-free, active lifestyle.
                        As a movement specialist, I focus on uncovering the root causes of
                        pain and dysfunction, guiding you towards long-term health and
                        happiness. I believe that instead of chasing pain, we should pursue
                        the root of dysfunction. Our bodies are remarkable communicators,
                        and through simple assessments, we can listen to what they’re
                        telling us. It’s amazing how much insight we can gain when we truly
                        pay attention.
                        <br />
                        My approach emphasizes enjoying physical activity
                        without fear—empowering you to move freely and confidently. Join me
                        on this journey to discover how to keep your body happy and healthy
                        for years to come!
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default welcome;
