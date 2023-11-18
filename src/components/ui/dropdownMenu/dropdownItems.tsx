import { DropDownItem } from '@/components/ui/dropdownMenu/dropDownItem'
import { DropDownItemType } from '@/components/ui/dropdownMenu/dropdownMenu'

type Type = {
  dropDownItems: DropDownItemType[]
}
export const DropdownItems = (props: Type) => {
  const { dropDownItems } = props

  return (
    <>
      {dropDownItems.map((el, index) => (
        <DropDownItem key={index} title={el.title}>
          {el.icon}
        </DropDownItem>
      ))}
    </>
  )
}
