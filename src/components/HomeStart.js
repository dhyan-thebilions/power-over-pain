import React from "react";
import "../styles/HomeStart.css";

const HomeStart = () => {
    const rawData = [
        {
            id: 1,
            title: "Book a Free 30-min Video Consultation",
            body: "We will discuss all your symptoms and get a good understanding of why certain things are happening in your body.",
            btnName: "Book Your Free Consultation",
            url: "",
        },
        {
            id: 2,
            title: "Schedule Your Initial Evaluation",
            body: "We’ll dive deep into an assessment to understand where you are and the root cause of your symptoms",
            btnName: "Schedule Your Initial Evaluation",
            url: "",
        },
        {
            id: 3,
            title: "Book Follow-up Sessions",
            body: "Continue with simple exercises, tailored to your needs. The sessions are recorded for your reference.",
            btnName: "Book Your Follow-Up",
            url: "",
        },
    ];
    return (
        <React.Fragment>
            <div className="home_start_wrapper">
                <div className="home_start_container">
                    <div className="home_start_h1">Here’s How You Can Start</div>
                    {rawData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="home_start_h5">{item?.title}</div>
                            <div className="home_start_h6">{item?.body}</div>
                            <button className="home_start_btn">{item?.btnName}</button>
                        </React.Fragment>
                    ))}
                    <div className="home_start_h6">The exercises we’ll learn are simple but may take time to master, as they're different from typical routines and include breathwork. The session will be recorded so you can review and practice on your own. If you learn them well, seeing me once a week or once every two weeks should be sufficient, depending on your pain level.</div>
                    <div className="home_start_txt">The sessions will last for 45 mins to 1 hour.</div>
                    <div className="home_start_txt mt-3 mb-3">Price - $70 per session</div>
                    <ul className="home_start_txt">
                        <li>3 sessions - $180</li>
                        <li>5 sessions - $280</li>
                        <li>7 sessions - $380</li>
                        <li>10 sessions - $530</li>
                    </ul>
                    <div className="home_start_h6">Things you will need:- a mat, good wifi and some space for you to move around freely.</div>
                    <div className="home_start_h6">Time needed to be invested everyday to do the exercises – 10-15 mins – twice a day. </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomeStart;
