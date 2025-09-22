import ApplicationService from "../business/ApplicationService"
import type Application from "../models/Application"
import Button from "./Button"


export default function ActionBar(props: { application: Application, currentStep: number, setCurrentStep: (e: number) => void, setErrors: (e: { id: string, error: string }[]) => void, setComplete: (e: boolean) => void, complete: boolean }) {

    if (!props.complete) {
        return (
            <div className="actions-bar ">
                {(props.currentStep > 1 && props.currentStep != 5) ?
                    <a href="" className="secondary-link"
                        onClick={(e) => {
                            e.preventDefault()
                            props.setCurrentStep(props.currentStep - 1)
                        }
                        }>Go back</a> : <span></span>}

                <Button value={props.currentStep == 4 ? "Complete" : "Next Step"}

                    onClick={() => {


                        props.setErrors([])
                        let validationResults: { id: string, error: string }[] = []
                        switch (props.currentStep) {
                            case 1:
                                validationResults = ApplicationService.ValidateStep1(props.application)
                                break;
                            case 2:
                                {
                                    validationResults = ApplicationService.ValidateStep2(props.application)
                                    break;
                                }

                        }
                        if (validationResults.length > 0) {
                            props.setErrors(validationResults)
                        }
                        else {
                            props.setErrors([])
                            if (props.currentStep != 4) {
                                props.setCurrentStep(props.currentStep + 1)
                            }
                            else { props.setComplete(true) }

                        }
                    }
                    }
                />

            </div>
        )
    }
}