// components/FeatureCard.tsx
interface FeatureCardProps {
    title: string;
    description: string;
    icon?: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
    return (
        <div className="text-center p-8 group hover:transform hover:scale-105 transition-all duration-300">
            {icon && (
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
                {description}
            </p>
        </div>
    );
};