import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type DropDownItem = { icon?: string; onClick: () => void; title: string }
type PropsType = {
  dropDownItems: DropDownItem[]
  email: string
  photo: string
  userName: string
}

const DropdownMenuDemo = (props: PropsType) => {
  const { dropDownItems, email, photo, userName } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <img
          alt={'usePhoto'}
          aria-label={'Customise options'}
          className={s.iconButton}
          src={photo}
        ></img>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.dropdownMenuItem}>
            New Tab <div className={s.rightSlot}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.dropdownMenuItem}>
            New Window <div className={s.rightSlot}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.dropdownMenuItem} disabled>
            New Private Window <div className={s.rightSlot}>⇧+⌘+N</div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={s.dropdownMenuSeparator} />

          <DropdownMenu.Arrow className={s.dropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
