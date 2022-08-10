import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?:boolean
}

export function Button({ title, leftIcon, rightIcon, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      disabled={isLoading}
      className="flex items-center w-full justify-center p-4 bg-blue-800 text-white font-bold border rounded-md hover:bg-blue-900 disabled:bg-blue-300"
      {...rest}
    >
      <div className="mr-2">
        {leftIcon}
      </div>
      { 
        isLoading
        ? (
          <div 
            style={{ borderTopColor: "transparent" }}
            className="w-5 h-5 border-2 border-gray-200 border-solid rounded-full animate-spin"
          />
        )
        : (
          <span className="font-semibold uppercase text-sm">
            {title}
          </span>
        )
      }
      <div className="ml-2">
        {rightIcon}
      </div>
    </button>
  )
}