interface EducationProps {
    university: string;
    courseName: string;
    startYear: string;
    endYear: string;
    weightedAverageMark: number;
  }
  
  export default function Education(props: EducationProps) {
    return (
      <div className="font-serif p-4">
        <h2 className="font-semibold">{props.courseName}</h2>
        <h3 className="">{props.university}</h3>
        <p className="">{props.startYear} - {props.endYear}</p>
        <p className="">
          {props.weightedAverageMark.toFixed(2)}
        </p>
      </div>
    );
  }
  