export type TextProps = {
    text: string;
    muted?: boolean;
    className?: string;
}
export function Header({ text, muted, className }: TextProps) {
    return (
        <h1 className={`${className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${muted ? 'text-gray-300' : ''} `}>
            {text}
        </h1>
    )
}
