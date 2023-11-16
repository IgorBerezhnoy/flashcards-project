import { Checkbox } from '@/components/ui/checkbox/checkbox'
import {Slider} from "@/components/ui/slider";

export function App() {
  return (
    <div>
      <Checkbox label={'asaa'} />
      <Checkbox disabled label={'asaa'} />
        <Slider value={[10, 50]}/>
    </div>
  )
}
