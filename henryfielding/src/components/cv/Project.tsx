interface ProjectProps {
    name: string;
    overview: string;
    tools: string[];
    finerDetails: string[];
  }
  
  export default function Project(props: ProjectProps) {
    return (
      <div className="font-serif p-4">
        <h2 className="font-semibold">{props.name}</h2>
        <p className="">{props.overview}</p>
        <ul className="list-disc pl-6">
                {props.tools.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
        </ul>
        <ul className="list-disc pl-6">
                {props.finerDetails.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
        </ul>
      </div>
    );
  }
  