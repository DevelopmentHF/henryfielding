interface Content {
    paragraph: string,
}

export default function Summary(props:Content) { 
    return (
        <div className="font-serif sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {props.paragraph}
        </div>
    );
}