import { ImageOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { RadioGroup } from '@/components/ui/radio'
import { OptionsValue, Select } from '@/components/ui/select'
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

const mockOptions: OptionsValue[] = [
  { title: 'test1', value: 'test1' },
  { title: 'test2', value: 'test2' },
  { title: 'test3', value: 'test3' },
]

export const AddNewPack: Story = {
  args: {
    children: (
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField
            disabled={false}
            label={'Name Pack'}
            placeholder={'placeholder'}
            type={'default'}
            value={'Name'}
          />
          <Checkbox label={'Private pack'} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Add New Pack</Button>
        </div>
      </div>
    ),
    title: 'Add New Pack',
    trigger: <div>Open</div>,
  },
}

export const EditPack: Story = {
  args: {
    children: (
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField
            disabled={false}
            label={'Name Pack'}
            placeholder={'placeholder'}
            type={'default'}
            value={'Name'}
          />
          <Checkbox label={'Private pack'} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Save Changes</Button>
        </div>
      </div>
    ),
    title: 'Edit Pack',
    trigger: <div>Open</div>,
  },
}

export const DeletePack: Story = {
  args: {
    children: (
      <div className={s.contentWrapper}>
        <div className={s.contentDeleteBody}>
          <Typography as={'div'}>
            Do you really want to remove <span>Pack Name</span>?
          </Typography>
          <Typography as={'div'}>All cards will be deleted.</Typography>
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Delete Pack</Button>
        </div>
      </div>
    ),
    title: 'Delete Pack',
    trigger: <div>Open</div>,
  },
}

export const AddNewCard: Story = {
  args: {
    children: (
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <Select label={'Choose a question format'} placeholder={'Text'} />
          <TextField
            disabled={false}
            label={'Question'}
            placeholder={'placeholder'}
            type={'default'}
            value={'How "This" works in JavaScript?'}
          />
          <TextField
            disabled={false}
            label={'Answer'}
            placeholder={'placeholder'}
            type={'default'}
            value={'This is how "This" works in JavaScript'}
          />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Add New Card</Button>
        </div>
      </div>
    ),
    title: 'Add New Card',
    trigger: <div>Open</div>,
  },
}

export const DeleteCard: Story = {
  args: {
    children: (
      <div className={s.contentWrapper}>
        <div className={s.contentDeleteBody}>
          <Typography as={'div'}>
            Do you really want to remove <span>Card Name</span>?
          </Typography>
          <Typography as={'div'}>All cards will be deleted.</Typography>
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Delete Card</Button>
        </div>
      </div>
    ),
    title: 'Delete Card',
    trigger: <div>Open</div>,
  },
}

export const LearnPackName: Story = {
  args: {
    children: (
      <div className={s.contentLearn}>
        <Typography className={s.contentLearnTitle}>Learn “Pack Name”</Typography>
        <div className={s.contentLearnBody}>
          <Typography className={s.contentLearnTextOne}>
            <span>Question</span>: How &quot;This&quot; works in JavaScript?
          </Typography>
          <Typography className={s.contentLearnTextTwo}>
            Количество попыток ответов на вопрос: <span>10</span>
          </Typography>
        </div>
        <Button fullWidth variant={'primary'}>
          Show Answer
        </Button>
      </div>
    ),
    showHeader: false,
    trigger: <div>Open</div>,
  },
}

export const LearnPackNameAndRadioButtons: Story = {
  args: {
    children: (
      <div className={s.contentLearnRadio}>
        <Typography className={s.contentLearnTitle}>Learn “Pack Name”</Typography>
        <div className={s.contentLearnBodyRadio}>
          <Typography className={s.contentLearnTextOne}>
            <span>Question</span>: How &quot;This&quot; works in JavaScript?
          </Typography>
          <Typography className={s.contentLearnTextTwo}>
            Количество попыток ответов на вопрос: <span>10</span>
          </Typography>
        </div>
        <Typography className={s.contentLearnSybText}>
          <span>Answer:</span> This is how &quot;This&quot; works in JavaScript
        </Typography>
        <div className={s.radioButtonModule}>
          <Typography className={s.radioButtonTitle}>Rate yourself:</Typography>
          <RadioGroup
            radioGroup={[
              { id: '1', label: 'Did not know', value: 'Did not know' },
              { id: '2', label: 'Forgot', value: 'Forgot' },
              { id: '3', label: 'A lot of thought', value: 'A lot of thought' },
              { id: '4', label: 'Сonfused', value: 'Сonfused' },
              { id: '5', label: 'Knew the answer', value: 'Knew the answer' },
            ]}
          />
        </div>
        <Button fullWidth variant={'primary'}>
          Next Question
        </Button>
      </div>
    ),
    showHeader: false,
    trigger: <div>Open</div>,
  },
}
export const Header: Story = {
  args: {
    title: 'Hello',
    trigger: <div>Open</div>,
  },
}
export const ContentComponentsVariant: Story = {
  args: {
    children: (
      <div>
        <div className={s.containerContentComponents}>
          <div className={s.contentComponentsPicture}>
            <img alt={'image'} src={img} />
          </div>
          <Button className={s.buttoncontentComponent} fullWidth variant={'secondary'}>
            <ImageOutline />
            <div>Change Cover</div>
          </Button>
          <TextField
            disabled={false}
            label={'Name Pack'}
            placeholder={'placeholder'}
            type={'default'}
            value={'Name'}
          />
          <Checkbox label={'Private pack'} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Add New Pack</Button>
        </div>
      </div>
    ),
    title: 'Add New Pack',
    trigger: <div>Open</div>,
  },
}

export const ContentComponentsVariant2: Story = {
  args: {
    children: (
      <div>
        <div className={s.containerContentComponents}>
          <Select
            label={'Choose a question format'}
            options={mockOptions}
            placeholder={'Picture'}
          />
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
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Add New Card</Button>
        </div>
      </div>
    ),
    title: 'Add New Card',
    trigger: <div>Open</div>,
  },
}
