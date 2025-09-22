import { useEffect, useState, type FC, type InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    erroMessage?: { id: string, error: string }[]
    label:string|null

}


const TextInput: FC<TextInputProps> = ({...props}) => {

    const [hasError,setHasError]=useState<boolean>(false)

    useEffect(()=>
    {
        if(props.id!=null && props.erroMessage!=null)
        {
            if(props.erroMessage.findIndex(x=>x.id==props.id)>-1)
            {
                setHasError(true);
            }
            else
            {setHasError(false)}
        }
    },[props.erroMessage,props.id])

const renderValidation=()=>
{
    if(props.erroMessage!=undefined && props.id!=undefined)
    {
        
        if(props.erroMessage.findIndex(x=>x.id==props.id)>-1)
        {
            return(
            <span className="error-label">{props.erroMessage.filter(x=>x.id==props.id)[0].error}</span>)


        }
    }
}

    return (
        <div>
            <div className="input-labels">
                {props.label?
                <label htmlFor={props.id}>{props.label}</label>:null}
                {renderValidation()}
            </div>

            <input {...props} type='text' id={props.id} className={hasError?"error":""} ></input>
        </div>
    )

}

export default TextInput;