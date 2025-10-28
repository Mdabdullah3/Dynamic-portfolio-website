"use client";
import { useRef, useEffect } from 'react';

const SimpleTemplatePreview = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (videoElement) {
                            videoElement.play().catch(error => {
                                console.log('Auto-play failed:', error);
                            });
                        }
                    } else {
                        if (videoElement) {
                            videoElement.pause();
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <div className="template-preview ">
            <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="auto"
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    borderRadius: '4px',
                    display: 'block'
                }}
            >
                <source src="/assets/AI.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default SimpleTemplatePreview;