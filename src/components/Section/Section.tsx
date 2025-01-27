interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    heading: React.ReactNode;
}

export const Section = ({ children, heading, ...props }: SectionProps) => {
    return (
        <section {...props}>
            <h2 className="text-2xl md:text-3xl min-h-[2.5rem] text-gray-600 dark:text-gray-400 mb-8">
                {heading}
            </h2>

            {children}
        </section>
    );
};
