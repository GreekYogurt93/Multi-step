import type { ButtonHTMLAttributes, FC } from "react";



interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement>
{
    error?:boolean
}

const Button:FC<ButtonProps>=({...props})=>
{
    return(
        <input type="button" {...props}   />
    )
}

export default Button;