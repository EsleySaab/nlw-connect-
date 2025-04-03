import { ReactNode } from "react"

interface ButtonProps {
  children?: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300">
      {children || "Enviar"}
    </button>
  )
}

export default Button
