import { UserDropdown } from '@/components/layout/header/user-dropdown/user-dropdown'

const user = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  photo: { alt: 'UserPhoto', src: 'public/img/userPhotoForTest.png' },
}

export function App() {
  return (
    <>
      <UserDropdown
        email={user.email}
        name={user.name}
        photo={user.photo.src}
        photoDesc={user.photo.alt}
        profilePageHref={'https://google.com'}
      />
    </>
  )
}
