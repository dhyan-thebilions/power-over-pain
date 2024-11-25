import React from "react";
import "../styles/MyStory.css";

const MyStory = () => {
    const rawData = [
        {
            id: 1,
            content:
                "At 13, I began my journey towards healing and self- discovery.My mom took me to physical therapy to address my hunched posture—a habit I’d developed as a tall, lanky kid trying to blend in with my classmates.When doctors suggested a back brace to wear over my school uniform, I felt a mix of hope and dread.The brace made me self- conscious; classmates would poke at it and remind me to sit up straight, making me feel more aware of my posture than ever.",
        },
        {
            id: 2,
            content:
                "But despite our hopes, the brace didn’t strengthen my back as intended. Instead, it left my muscles weaker. My mom was determined to help and took me from one doctor to another. Eventually, I was diagnosed with scoliosis for which surgery was recommended. However, my mom refused to do so.",
        },
        {
            id: 3,
            content:
                "As I grew older, chronic pain became a constant companion—my back, neck, hips, and shoulders all protested. My hips would pop audibly, drawing unwelcome attention, and my shoulders felt increasingly restricted. In my search for relief, I turned to Yoga and CrossFit, hoping that increased strength and mobility would ease the pain. But by the age of 28, my body was sending more intense distressed signals, including a pelvic floor dysfunction.I experienced electric shocks, numbness, and burning sensations in my a pelvic floor - a nightmare that seemed to have no end.",
        },
        {
            id: 4,
            content:
                "Frustrated and feeling dismissed by doctors who suggested my symptoms were “all in my head,” I took my health into my own hands. I knew something wasn’t right and wouldn’t let it go unaddressed. That’s when I discovered Neurokinetic Therapy and Immaculate Dissection. Under the care of Dr. Kathy Dooley, everything changed. She helped me uncover the root cause of my issues - a breathing dysfunction.",
        },
        {
            id: 5,
            content:
                "Through targeted assessments, I found relief I hadn’t thought was possible. My pelvic floor symptoms disappeared in just three sessions, and over the course of a year, I corrected my posture and finally began to heal the scoliosis that had affected me for so long.",
        },
        {
            id: 6,
            content:
                "This journey taught me the power of listening to my body and the value of finding the right support. “Healing”, I learned, isn’t a straight path; it’s filled with setbacks and surprises.But with perseverance, resilience, and the right guidance, real transformation is possible.",
        },
        {
            id: 7,
            content:
                "Today, I understand the importance of advocating for myself and trusting my instincts, even when others may doubt me. I share my story not only to reflect on my experiences but also to connect with anyone who has felt misunderstood in their struggles. We all have battles to face, and we don’t have to face them alone. Together, we can find strength in our journeys and inspire each other to keep moving forward.",
        },
    ];
    return (
        <React.Fragment>
            <div className="mystory_wrapper">
                <div className="mystory_container">
                    <div className="mystory_h1">
                        Healing from Within: My Personal Story
                    </div>

                    {rawData.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="mystory_p">{item?.content}</div>
                            {index === 0 && (
                                <img
                                    src="../assets/mystory_image.png"
                                    alt="mystory_image"
                                    className="mystory_image"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyStory;
