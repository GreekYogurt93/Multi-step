import type Step from "../models/Step";

export default function NavBar(props: { steps: Step[],currentStep:number }) {

    return (
        <div className='form-nav'>

            {props.steps.map((item, index) => {
                return (
                    <div key={index.toString()} className={"form-nav-step " + (item.number==props.currentStep ? "current" : "")}>
                        <figure>{item.number}</figure>
                        <div className='nav-step '>
                            <span className='step-number'>STEP {item.number}</span>
                            <span className='step-info'>{item.desc}</span>
                        </div>

                    </div>
                );

            }
            )}




        </div>)

}