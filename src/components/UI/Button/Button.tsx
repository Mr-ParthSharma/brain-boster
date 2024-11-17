import React from 'react';
import { IconProps } from '../../../assets/Icons';
import { PlusIcon } from '../../../assets/Icons/PlusIcon';

export interface ButtonProps {
    variant: 'primary' | 'secondary';
    size: IconProps["size"];
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button = ({ variant, size, text, startIcon, endIcon, onClick, className }: ButtonProps) => {
    const buttonVariants = {
        primary: 'bg-purple-500 hover:bg-purple-700 text-white',
        secondary: 'bg-purple-300 hover:bg-gray-300 text-purple-700'
    };

    const buttonSizes = {
        sm: 'text-sm py-1 px-2',
        md: 'text-base py-2 px-4',
        lg: 'text-lg py-3 px-6',
    };

    const defaultStyles = 'text-center flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out rounded-md p-4';

    const applyIconSize = (icon: React.ReactNode) => {
        if (React.isValidElement<IconProps>(icon) && icon.type === PlusIcon) {
            return React.cloneElement(icon, { size });
        }
        return icon;
    };

    return (
        <div>
            <button
                onClick={onClick}
                className={`${buttonVariants[variant]} ${buttonSizes[size]} ${defaultStyles} font-bold rounded m-1 ${className}`}
            >
                {startIcon && <span className="mr-2">{applyIconSize(startIcon)}</span>}
                {text}
                {endIcon && <span className="ml-2">{applyIconSize(endIcon)}</span>}
            </button>
        </div>
    );
};

export default Button;