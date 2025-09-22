
import type Application from "../models/Application"
import { CheckboxGroup } from "./CheckboxGroup"


interface Step2Props {
    application: Application,
    setApplication: (e: Application) => void,
    errors: { id: string, error: string }[],
    setErrors: (e: { id: string, error: string }[]) => void,
    nextStep:()=>void
    previousStep:()=>void


}

export default function Step3(props: Step2Props) {
    
   


    return (
        <div className='step-container'>
            <h2>Pick add-ons</h2>
            <p className='info-gray'> Add-ons help enhance gaming experience</p>

            <CheckboxGroup 
            options={[{id:"1",name:"Online Service",desc:"Access to multiplayer games", anualAmount:10,monthlyAmount:1},
                {id:"2",name:"Larger Storage",desc:"Extra 1TB of cloud save", anualAmount:20,monthlyAmount:2},
                {id:"3",name:"Customizable profile",desc:"Custom theme on your profile", anualAmount:20,monthlyAmount:2}
            ]}
            initialItems={props.application.addons}

            onChange={(e)=>props.setApplication({...props.application,addons:e})}

            billingType={props.application.billingType}
            

            />
           
            


            

          
        </div>
    )
}