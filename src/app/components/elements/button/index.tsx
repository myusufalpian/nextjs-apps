import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    variant?: string;
    text?: string;
    classname?: string;
}

const Button = ({ 
    children = "Submit", 
    variant = "bg-neutral-700", 
    text = "text-white", 
    classname = "" 
}: Props) : JSX.Element => {
    return (
        <button 
            className={`h-10 px-6 rounded-md ${variant} ${text} drop-shadow-md ${classname}`} 
            type='submit'>
            {children}
        </button>
    );
}

export default Button;
