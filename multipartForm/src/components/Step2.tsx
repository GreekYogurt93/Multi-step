
import type Application from "../models/Application"
import { ProductsToggle } from "./ProductsToggle"
import { products } from "../fakeData/products"
import { BillingType } from "../models/BillingType"
import { ToggleControl } from "./Toggle"

interface Step3Props {
    application: Application,
    setApplication: (e: Application) => void,
    errors: { id: string, error: string }[],
    setErrors: (e: { id: string, error: string }[]) => void,
    nextStep:()=>void
    previousStep:()=>void


}

export default function Step2(props: Step3Props) {
    
   


    return (
        <div className='step-container'>
            <h2>Select your plan</h2>
            <p className='info-gray'> You have an option of a monthly or a yearly billing</p>
            <ProductsToggle
            availableItems={products}
            selectedItem={props.application.product}
            billingOption={props.application.billingType}
            onSelect={(e)=>
            {
                props.setApplication({...props.application,product:e})
            }
            }

            
            />

            <ToggleControl checked={props.application.billingType==BillingType.Monthly?false:true} onChange={(e)=>
                {
                    props.setApplication({...props.application,billingType:e==true?BillingType.Yearly:BillingType.Monthly})
                }
            }/>
            

            {props.errors.length>0?<span className="error-label">{props.errors[0].error}</span>:null}
            

            
        </div>
    )
}