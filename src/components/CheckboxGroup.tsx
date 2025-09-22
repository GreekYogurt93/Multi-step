import { useEffect, useState, type FC } from "react"
import { BillingType } from "../models/BillingType"
import checkmark from '../assets/images/icon-checkmark.svg'

export interface AddonProduct {
  id: string
  name: string
  desc: string
  anualAmount: number
  monthlyAmount: number
}

interface CheckboxGroupProps {
  options: AddonProduct[]
  onChange: (e: AddonProduct[]) => void
  billingType: BillingType
  initialItems:AddonProduct[]
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ options, onChange, billingType ,initialItems}) => {
  const [selected, setSelected] = useState<AddonProduct[]>(initialItems)

  useEffect(() => {
    onChange(selected)
  }, [selected, onChange])

  const toggleSelection = (item: AddonProduct) => {
    setSelected(prev =>
      prev.some(x => x.id === item.id)
        ? prev.filter(x => x.id !== item.id)
        : [...prev, item]
    )
  }

  return (
    <div className="checkbox-group">
      {options.map(item => {
        const isSelected = selected.some(x => x.id === item.id)
        return (
          <div
            key={item.id}
            onClick={() => toggleSelection(item)}
            className={`checkbox ${isSelected ? "checked" : ""}`}
          >
            <figure className="checkmark">
                {isSelected?<img src={checkmark} width={"80%"} height={"80%"} />:null}
            </figure>
            <div className="checkbox-labels">
              <span className="checkbox-label-primary">{item.name}</span>
              <span className="checkbox-label-secondary">{item.desc}</span>
            </div>
            <div className="checkbox-price">
              +£{billingType === BillingType.Monthly ? item.monthlyAmount : item.anualAmount}
              /{billingType === BillingType.Monthly ? "mo" : "year"}
            </div>
          </div>
        )
      })}
    </div>
  )
}