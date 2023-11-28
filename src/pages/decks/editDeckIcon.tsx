import { Edit2Outline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'

import s from '@/components/ui/table/table.module.scss'

export const EditDeckIcon = () => {
  return (
    <Modal title={'Edit Pack'} trigger={<Edit2Outline className={s.icon} />}>
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
    </Modal>
  )
}
