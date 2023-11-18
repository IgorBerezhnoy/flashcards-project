import DropdownMenuDemo from '@/components/ui/dropdown/dropdown'

export function App() {
  return (
    <div>
      <DropdownMenuDemo
        dropDownItems={[]}
        email={'j&johnson@gmail.com'}
        photo={'public/img/userPhotoForTest.png'}
        userName={'Ivan'}
      />
    </div>
  )
}
