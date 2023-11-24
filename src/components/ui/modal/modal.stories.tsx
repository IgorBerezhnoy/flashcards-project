import { ImageOutline } from '@/assets'
import Close from '@/assets/icons/close'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import s from './modal.module.scss'

import img from '../../../assets/image/Mask.jpg'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/UI/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {
    children: (
      <div className={s.containerHeader}>
        <Typography as={'div'} className={s.headerTitle}>
          Title
        </Typography>
        <DialogClose>
          <Close />
        </DialogClose>
      </div>
    ),
    trigger: <div>Open</div>,
  },
}

export const CardModal: Story = {
  args: {
    children: <Card className={s.card} />,
    trigger: <div>Open</div>,
  },
}

export const ContentText: Story = {
  args: {
    children: (
      <div className={s.containerContentText}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
        </Typography>
      </div>
    ),
    trigger: <div>Open</div>,
  },
}

export const ContentTextScroll: Story = {
  args: {
    children: (
      <div className={s.containerContentTextScroll}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa

        </Typography>
      </div>
    ),
    trigger: <div>Open</div>,
  },
}

export const ContentComponents: Story = {
  args: {
    children: (
      <div className={s.containerContentComponents}>
        <Select label={'Select-box'} placeholder={'Select-box'} />
        <TextField label={'Input'} value={'Input'} />
        <TextField label={'Input'} value={'Input'} />
        <Checkbox label={'Check-box'} onChange={() => {}} />
      </div>
    ),
    trigger: <div>Open</div>,
  },
}

export const ContentComponentsVariant2: Story = {
  args: {
    children: (
      <div className={s.containerContentComponents}>
        <Select label={'Select-box'} placeholder={'Select-box'} />
        <Typography variant={'body1'}>Question:</Typography>
        <div className={s.contentComponentsPicture}>
          <img alt={'image'} src={img} />
        </div>
        <Button className={s.buttoncontentComponent} fullWidth variant={'secondary'}>
          <ImageOutline />
          <div>Change Cover</div>
        </Button>
        <Typography variant={'body1'}>Answer:</Typography>
        <div className={s.contentComponentsPicture}>
          <img alt={'image'} src={img} />
        </div>
        <Button className={s.buttoncontentComponent} fullWidth variant={'secondary'}>
          <ImageOutline />
          <div>Change Cover</div>
        </Button>
        <TextField label={'Input'} value={'Input'} />
        <Checkbox label={'Check-box'} onChange={() => {}} />
      </div>
    ),
    trigger: <div>Open</div>,
  },
}

export const OneButton: Story = {
  args: {
    children: (
      <div className={s.oneButton}>
        <Button variant={'primary'}>Button primary</Button>
      </div>
    ),
    trigger: <div>Open</div>,
  },
}

export const TwoButton: Story = {
  args: {
    children: (
      <div className={s.twoButton}>
        <Button variant={'secondary'}>Button Secondary</Button>
        <Button variant={'primary'}>Button primary</Button>
      </div>
    ),
    trigger: <div>Open</div>,
  },
}
