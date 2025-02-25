interface ExperienceProps {
    jobTitle: string;
    company: string;
    jobStartYear: string;
    jobEndYear: string;
    jobBulletPoints: string[];
}

export default function Experience(props: ExperienceProps) {
    return (
        <div className="font-serif p-4">
            <h2 className="font-semibold">{props.jobTitle}</h2>
            <h3 className="">{props.company}</h3>
            <p className="">{props.jobStartYear} - {props.jobEndYear}</p>
            {/* <ul className="list-disc pl-6">
                {props.jobBulletPoints.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul> */}
        </div>
    );
}
