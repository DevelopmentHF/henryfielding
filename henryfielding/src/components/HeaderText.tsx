interface FullName {
    firstName: string,
    lastName: string,
}

export default function HeaderText(props:FullName) {
    const firstNameChars : string[] = props.firstName.split('');
    const lastNameChars : string[] = props.lastName.split('');

    return (
        <>
            {firstNameChars.map((char : string, index : number) => (
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text8xl" key={index}>{char}</span>
            ))}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text8xl">&nbsp;</span> {/* This is a space */}
            {lastNameChars.map((char : string, index : number) => (
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text8xl" key={index}>{char}</span>
            ))}
        </>
    );
}
