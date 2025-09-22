
import { useEffect, useState } from "react"
import type Application from "../models/Application"
import { BillingType } from "../models/BillingType"
import ThankYou from "./ThankYou"


interface Step2Props {
    application: Application,
    setApplication: (e: Application) => void,
    errors: { id: string, error: string }[],
    setErrors: (e: { id: string, error: string }[]) => void,
    nextStep: () => void
    previousStep: () => void
    onChangeProduct: () => void
    completed:boolean


}

export default function Step4(props: Step2Props) {
    const [complete,setComplete]=useState<boolean>(props.completed)

    useEffect(()=>
    {
        setComplete(props.completed)

    },[props.completed])

    function calculateTotal() {
        switch (props.application.billingType) {
            case BillingType.Monthly:
                {
                    const base = props.application.product?.monthlyAmount ?? 0;
                    const addonsTotal = props.application.addons.reduce(
                        (prev, current) => prev + (current.monthlyAmount ?? 0),
                        0
                    );
                    return base + addonsTotal;
                }


            default:
                {
                    const base = props.application.product?.anualAmount ?? 0;
                    const addonsTotal = props.application.addons.reduce(
                        (prev, current) => prev + (current.anualAmount ?? 0),
                        0
                    );
                    return base + addonsTotal;
                }
        }
    }

    if(complete)
    {
        return <ThankYou/>
    }

    return (
        <div className='step-container'>
            <h2>Finishing up</h2>
            <p className='info-gray'> Double-check everything looks OK before continuing</p>

            <div className="summary-panel">
                <div>
                    <div className="panel-line emphasis"><span>{props.application.product?.description} ({props.application.billingType == BillingType.Monthly ? "Monthly" : "Yearly"})</span> <span>£{props.application.billingType == BillingType.Monthly ? props.application.product?.monthlyAmount : props.application.product?.anualAmount}/{props.application.billingType == BillingType.Monthly ? "month" : "yr"}</span></div>
                    <div className="panel-line "><a href="" className="secondary-link "
                        onClick={(e) => {
                            e.preventDefault();
                            props.onChangeProduct()
                        }
                        }

                    >Change</a></div>
                </div>

                <hr />
                <div>
                    {props.application.addons.length == 0 ? <label>No Addons selected</label> : null}
                    {props.application.addons.map((item, index) => {
                        return (
                            <div key={index} className="panel-line info-gray"><span>{item.name}</span> <label>+£{props.application.billingType == BillingType.Monthly ? item.monthlyAmount : item.anualAmount}/{props.application.billingType == BillingType.Monthly ? "month" : "yr"}</label></div>
                        )
                    })}
                </div>



            </div>
            <div className="total"><label className="total">Total ({props.application.billingType == BillingType.Monthly ? "Per month" : "Per year"})</label><label className="total">£{calculateTotal() }</label></div>









           
        </div>
    )
}