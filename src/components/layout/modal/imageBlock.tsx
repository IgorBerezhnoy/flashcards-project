import { ChangeEvent, useRef, useState } from 'react'

import { ImageOutline } from '@/assets'
import { Button } from '@/components/ui'

import s from '@/components/ui/table/table.module.scss'

type Props = {
  title: string
}

export const ImageBlock = ({ title }: Props) => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
    <div className={s.imageAddBody}>
      <img alt={'No image'} className={s.image} src={selectedImage || 'path/to/default/image'} />
      <div className={s.imageNav}>
        <div>{title}</div>
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
  )
}
