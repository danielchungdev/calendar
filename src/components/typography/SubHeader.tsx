import { TextProps } from "./Header";

export function SubHeader({text, className} : TextProps) {
    return (
      <h2 className={`${className} scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0`}>
        {text}
      </h2>
    )
  }
  