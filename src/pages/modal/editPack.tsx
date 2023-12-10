import { ChangeEvent, useRef, useState } from 'react'

import { ImageOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { TextField } from '@/components/ui/textField'

import s from '@/components/ui/table/table.module.scss'

export const EditPack = () => {
  const [value, setValue] = useState('')
  const [selectedImage, setSelectedImage] = useState<null | string>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {}

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  return (
    <Modal title={'Edit Pack'} trigger={<Button variant={'primary'}>Edit Pack</Button>}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <div className={s.imageAddBody}>
            <img
              alt={'No image'}
              className={s.image}
              src={selectedImage || 'path/to/default/image'}
            />
            <div className={s.imageNav}>
              <div>Cover</div>
              <Button onClick={handleImageClick} variant={'secondary'}>
                <ImageOutline className={s.iconImage} />
                Change Cover
                <input
                  className={s.input}
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  type={'file'}
                />
              </Button>
            </div>
          </div>
          <TextField label={'Name Pack'} onValueChange={e => setValue(e)} value={value} />
          <Checkbox label={'Private pack'} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={onClick} variant={'primary'}>
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  )
}
