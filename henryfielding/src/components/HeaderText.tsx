interface FullName {
    content: string;
}

export default function HeaderText(props:FullName) {
    return (
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{props.content}</h1>
    );
}
