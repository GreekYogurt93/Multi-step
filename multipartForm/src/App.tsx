
import { useState } from 'react'
import "./App.css"

import NavBar from './components/NavBar'
import type Application from './models/Application'

import Step1 from './components/Step1'
import Step2 from './components/Step2'
import { BillingType } from './models/BillingType'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import ActionBar from './components/ActionBar'

function App() {

  const [application, setApplication] = useState<Application>({
    name: null,
    email: null,
    phoneNumber: null,
    billingType: BillingType.Yearly,
    product: null,
    addons: []
  })
  const [errors, setErrors] = useState<{ id: string, error: string }[]>([])
  const [steps] = useState<{ number: number, desc: string, current: boolean }[]>([{ number: 1, desc: "YOUR INFO", current: true }, { number: 2, desc: "SELECT PLAN", current: false }, { number: 3, desc: "ADD-ONS", current: false }, { number: 4, desc: "SUMMARY", current: false }])
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [complete, setComplete] = useState<boolean>(false)


  const renderStep = () => {
    switch (currentStep) {
      case 1:
        {

          return (<Step1
            application={application}
            setApplication={setApplication}
            errors={errors}
            setErrors={setErrors}
            nextStep={() => setCurrentStep(currentStep + 1)}
          />)

        }
      case 2:
        {
          return (<Step2

            application={application}
            setApplication={setApplication}
            errors={errors}
            setErrors={setErrors}
            nextStep={() => setCurrentStep(currentStep + 1)}
            previousStep={() => setCurrentStep(currentStep - 1)}

          />)
        }
      case 3:
        {
          return (<Step3

            application={application}
            setApplication={setApplication}
            errors={errors}
            setErrors={setErrors}
            nextStep={() => setCurrentStep(currentStep + 1)}
            previousStep={() => setCurrentStep(currentStep - 1)}

          />)
        }

      case 4:
        {
          return (<Step4

            application={application}
            setApplication={setApplication}
            errors={errors}
            setErrors={setErrors}
            nextStep={() => setCurrentStep(currentStep + 1)}
            previousStep={() => setCurrentStep(currentStep - 1)}
            onChangeProduct={() => setCurrentStep(2)}
            completed={complete}

          />)
        }

      default:
        break;
    }

  }

  return (
    <div className='form-container'>
      <NavBar steps={steps} currentStep={currentStep} />
      <div className='form-content'>
        {renderStep()}

        <ActionBar
          complete={complete}
          application={application}
          setComplete={setComplete}
          setErrors={setErrors}
          setCurrentStep={setCurrentStep} 
          currentStep={currentStep}        

        />
      </div>





    </div>
  )
}

export default App
