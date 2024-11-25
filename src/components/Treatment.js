import React from "react";
import "../styles/Treatment.css";

const Treatment = () => {
    const rawData = [
        {
            id: 1,
            content:
                "My approach to physical therapy is shaped by both my personal journey and extensive professional training. Through years of practice, particularly in NeuroKinetic Therapy and Immaculate Dissection, I’ve moved beyond surface-level treatments that only provide temporary relief. Instead, I focus on addressing the core root cause that impact movement and function at a foundational level.",
        },
        {
            id: 2,
            content:
                "True strength and mobility begin with stability—stability in our joints and spine. This solid foundation supports sustainable strength and flexibility, reducing the risk of future injury. Interestingly, this stability is something we naturally developed as infants.The process of moving from lying down to standing and walking required us to build core and joint stability, and that capability is stored in our body’s memory.",
        },
        {
            id: 3,
            content:
                "By reconnecting with this innate ability, we “re-train” the body without the need for extensive time or effort. I see this process as “updating the software” - our muscular system - so that it works harmoniously with the “hardware” - our skeleton. Even if surgeries have altered our original structure, we retain the ability to restore this balance.Remarkably, dedicating just 15 minutes twice a day can unlock this potential and rebuild stability.",
        },
        {
            id: 4,
            content:
                "No matter where you are on your journey, it’s always possible to start again and build a stronger, more resilient body.",
        },
    ];
    return (
        <React.Fragment>
            <div className="treatment_wrapper">
                <div className="treatment_container">
                    <div className="treatment_h1">
                        My Treatment Philosophy: Rebuilding from the Ground Up
                    </div>
                    {rawData.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="treatment_p">{item?.content}</div>
                        </React.Fragment>
                    ))}
                    <img
                        src="../assets/treatment_image.png"
                        alt="treatment_image"
                        className="treatment_image"
                    />
                </div>
            </div>
        </React.Fragment>
    )
};

export default Treatment;
