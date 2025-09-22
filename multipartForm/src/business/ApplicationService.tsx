import type Application from "../models/Application";

export default class ApplicationService {


    public static ValidateStep1(app: Application): { id: string, error: string }[] {

        const errors: { id: string, error: string }[] = [];

        if (app.name == null || app.name.trim() == "") {
            errors.push({ id: "name", error: "This field is required" })
        }

        if (app.email == null || app.email.trim() == "") {
            errors.push({ id: "email", error: "This field is required" })
        }

        if (app.phoneNumber == null || app.phoneNumber.trim() == "") {
            errors.push({ id: "tel", error: "This field is required" })
        }


        return errors;

    }

    public static ValidateStep2(app: Application): { id: string, error: string }[] {

        const errors: { id: string, error: string }[] = [];

        if (app.product==null)
        {
            errors.push({id:"none",error:"Please select a product"})
        }



        return errors;

    }
}