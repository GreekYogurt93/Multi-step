
import chekcImg from "../assets/images/icon-thank-you.svg"

export default function ThankYou()
{


    return(
    
    <div className="step-container">
    <div className="thankyou">
            <img src={chekcImg} />
            <h2>Thank you</h2>
            <p className="info-gray">Thank you for confirming your subscription! we hope you have fun using our platform.
                If you ever need support please feel free to email us.
            </p>
        </div>
        </div>
    )
}