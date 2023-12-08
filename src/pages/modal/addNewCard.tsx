import { ChangeEvent, useRef, useState } from 'react'

import { ImageOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'

import s from '@/components/ui/table/table.module.scss'

export const AddNewCard = () => {
  const [valueQuestion, setValueQuestion] = useState('')
  const [valueAnswer, setValueAnswer] = useState('')
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
    <Modal title={'Add New Card'} trigger={<Button variant={'primary'}>Add New Card</Button>}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField
            label={'Question'}
            onValueChange={e => setValueQuestion(e)}
            value={valueQuestion}
          />
          <TextField label={'Answer'} onValueChange={e => setValueAnswer(e)} value={valueAnswer} />
          <div className={s.imageAddBody}>
            <img
              alt={'No image'}
              className={s.image}
              src={selectedImage || 'path/to/default/image'}
            />
            <div className={s.imageNav}>
              <div>Image Question</div>
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
          <div className={s.imageAddBody}>
            <img
              alt={'No image'}
              className={s.image}
              src={selectedImage || 'path/to/default/image'}
            />
            <div className={s.imageNav}>
              <div>Image Answer</div>
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
          <div className={s.imageAddBody}>
            <img
              alt={'No image'}
              className={s.image}
              src={selectedImage || 'path/to/default/image'}
            />
            <div className={s.imageNav}>
              <div>Video Answer</div>
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
          <div className={s.imageAddBody}>
            <img
              alt={'No image'}
              className={s.image}
              src={selectedImage || 'path/to/default/image'}
            />
            <div className={s.imageNav}>
              <div>Video Answer</div>
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
          <div className={s.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button onClick={onClick} variant={'primary'}>
              Add New Card
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
