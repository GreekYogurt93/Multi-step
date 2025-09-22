
import TextInput from "./TextInput"
import type Application from "../models/Application"

interface Step1Props {
    application: Application,
    setApplication: (e: Application) => void,
    errors: { id: string, error: string }[],
    setErrors: (e: { id: string, error: string }[]) => void,
    nextStep:()=>void


}

export default function Step1(props: Step1Props) {


    return (
        <div className='step-container'>
            <h2>Personal Info</h2>
            <p className='info-gray'> Please provide your name, email address, and phone number</p>
            <form>
                <TextInput label="Name" placeholder='e.g Stephen Spilberg' id='name'
                    value={props.application.name ?? ""}
                    onChange={(e) => props.setApplication({ ...props.application, name: e.target.value })}
                    erroMessage={props.errors}
                />

                <TextInput label="Email Address" placeholder='e.g stephenking@lorem.com' id='email'
                    value={props.application.email ?? ""}
                    onChange={(e) => {
                        props.setApplication({ ...props.application, email: e.target.value })
                    }
                    }
                    erroMessage={props.errors} />

                <TextInput label="Phone Number" placeholder='e.g +1 234 567 890' id='tel'
                    value={props.application.phoneNumber ?? ""}
                    onChange={(e) => {
                        props.setApplication({ ...props.application, phoneNumber: e.target.value })
                    }
                    }
                    erroMessage={props.errors}
                />

            </form>

            
        </div>
    )
}