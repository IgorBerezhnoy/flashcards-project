import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

export const RadioGroup = () => (
  <form>
    <RadioGroupRadix.Root
      aria-label={'View density'}
      className={'RadioGroupRoot'}
      defaultValue={'default'}
    >
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupRadix.Item className={s.radioGroupItem} id={'r1'} value={'default'}>
          <RadioGroupRadix.Indicator className={s.radioGroupIndicator} />
        </RadioGroupRadix.Item>
        <label className={'Label'} htmlFor={'r1'}>
          Default
        </label>
      </div>
    </RadioGroupRadix.Root>
  </form>
)
