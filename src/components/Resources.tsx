import { FileText, Code, Grid3x3, MessageCircleQuestion, ArrowRight } from "lucide-react";

interface ResourceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkText: string;
    bg?: string;
}

const ResourceCard = ({ icon, title, bg, description, linkText }: ResourceCardProps) => {
    return (
        <div className="rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow" style={{
            background: bg ? bg : 'transparent'
        }}>
            <div className="mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                {description}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-foreground font-semibold text-md hover:gap-3 transition-all">
                {linkText}
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    );
};

export const Resources = () => {
    const resources = [
        {
            icon: <FileText className="w-8 h-8 text-foreground" />,
            title: "Blog",
            description: "Stay sharp with expert tips, tricks and the latest Elementor news that keep you on the cutting edge of web creation.",
            linkText: "Learn More",
            bg: "#FAEADA"
        },
        {
            icon: <Code className="w-8 h-8 text-foreground" />,
            title: "Developer Hub",
            description: "Find the missing pieces to build your website with Elementor's extensive library of developer resources.",
            linkText: "Browse Resources",
            bg: "#DBD6F5"
        },
        {
            icon: <Grid3x3 className="w-8 h-8 text-foreground" />,
            title: "Tutorials & Courses",
            description: "Watch hundreds of video tutorials and courses that will help you master all things web creation.",
            linkText: "Watch Videos",
            bg: "#EAEDD2"
        },
        {
            icon: <MessageCircleQuestion className="w-8 h-8 text-foreground" />,
            title: "Help Center",
            description: "Get the answers you need fast with step-by-step guides that walk you through using Elementor like a pro.",
            linkText: "Get Answers",
            bg: "#CAE5E2"
        }
    ];

    return (
        <section className="pb-10 px-6">
            <div className="w-11/12 mx-auto">
                <h2 className="text-5xl font-bold text-foreground mb-3 text-center">
                    Helpful Articles, <em className="font-normal italic font-serif">Tutorials</em> & More
                </h2>
                <p className="text-foreground text-lg mb-12 max-w-2xl text-center mx-auto">
                    Learn, grow, and develop your skills at any level with our vast library of resources and tools that will take your web creation skills to the next level.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource, index) => (
                        <ResourceCard key={index} {...resource} />
                    ))}
                </div>
            </div>
        </section>
    );
};
