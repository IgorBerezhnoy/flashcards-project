import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'18'}
    ref={ref}
    viewBox={'0 0 18 18'}
    width={'18'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={'9'} cy={'9'} r={'8.5'} stroke={'black'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
