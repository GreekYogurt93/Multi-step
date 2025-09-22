import { useEffect, useState, type FC } from "react"


interface ToggleControlProps
{
    checked:boolean,
    onChange:(e:boolean)=>void,
}

export  const ToggleControl:FC<ToggleControlProps> = ({ ...props }) => {
    const [toggled,setToggled]=useState<boolean>(props.checked)

    useEffect(()=>
    {
        props.onChange(toggled)
    },[toggled])

    return (
        <div className="toggle"
        onClick={()=>{
            setToggled(!toggled)
        }}
        >
            <label>Monthly</label>
            <div className={"toggle-controll"+(props.checked?" on":"")}>
                <div className="toggle-thumb"></div>
            </div>
            <label>Yearly</label>
        </div>
    )

}