import { DropdownMenu } from '@/components/ui/dropdownMenu/dropdown'
import { WhitePerson } from '@/icons'

export function App() {
  return (
    <div>
      <DropdownMenu
        dropDownItems={[
          {
            icon: <WhitePerson color={'white'} height={'16'} width={'16'} />,
            onClick: () => {},
            title: 'sdf',
          },
        ]}
        email={'j&johnson@gmail.com'}
        isProfile
        photo={{ alt: 'UserPhoto', srs: 'public/img/userPhotoForTest.png' }}
        userName={'Ivan'}
      />
    </div>
  )
}
