import { DropdownMenu } from '@/components/ui/dropdownMenu/dropdownMenu'
import { LogOut, WhitePerson } from '@/icons'

export function App() {
  return (
    <div>
      <DropdownMenu
        dropDownItems={[
          {
            icon: <WhitePerson color={'white'} height={'16'} width={'16'} />,
            onClick: () => {},
            title: 'My Profile',
          },
          {
            icon: <LogOut color={'white'} height={'16'} width={'16'} />,
            onClick: () => {},
            title: 'Sign Out',
          },
        ]}
        isProfile
        user={{
          email: 'j&johnson@gmail.com',
          photo: { alt: 'UserPhoto', srs: 'public/img/userPhotoForTest.png' },
          userName: 'Ivan',
        }}
      />
    </div>
  )
}
