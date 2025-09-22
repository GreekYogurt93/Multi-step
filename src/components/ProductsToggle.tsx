import type { FC } from "react";
import { BillingType } from "../models/BillingType";

export interface Product{
    id:string,
    description:string,
    monthlyAmount:number,
    anualAmount:number,
    icon:string,

}

interface ProductsToggleProps
{
    billingOption:BillingType,
    selectedItem:Product|null,
    availableItems:Product[],
    onSelect:(e:Product)=>void

}

export  const ProductsToggle:FC<ProductsToggleProps>=(props)=>{

    function renderProducts()
    {
        return(
            props.availableItems.map((item,index)=>
            {
                return(
                    <div key={index} className={"option"+(props.selectedItem?.id==item.id?" selected":"")}
                    onClick={()=>props.onSelect(item)}
                    >
                    <img src={item.icon}/>
                    <div className="option-info">
                        <span>{item.description}</span>
                        <p className="info-gray">{props.billingOption==BillingType.Monthly?`£${item.monthlyAmount}/mo`:`£${item.anualAmount}/year`}</p>
                     <span style={props.billingOption==BillingType.Monthly?{visibility:"hidden"}:{visibility:"visible"}}>2 months for free</span>
                    </div>
                    </div>
                )
            })
        )
    }

    return(
        <div className="options-group">
                {renderProducts()}
            </div>
    )
}