import type { AddonProduct } from "../components/CheckboxGroup";
import type { Product } from "../components/ProductsToggle";
import type { BillingType } from "./BillingType";

export default interface Application
{
    name:string|null,
    email:string|null,
    phoneNumber:string|null,
    product:Product|null,
    billingType:BillingType,
    addons:AddonProduct[]
}