import React from "react";

const Button = ({
    children,
    variant = "primary",
    size = "md",
    icon,
    className = "",
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-black text-white hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black",
        secondary:
            "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
        outline:
            "border border-neutral-400 text-black hover:bg-neutral-100 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-800",
        danger:
            "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;