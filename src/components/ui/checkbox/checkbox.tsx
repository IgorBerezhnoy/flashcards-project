import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import s from "./checkbox.module.scss";

type CheckboxType = CheckboxProps & {
  checked?: CheckedState;
  className?: string;
  defaultChecked?: CheckedState;
  onCheckedChange?(checked: CheckedState): void;
  required?: boolean;
  text?: string | undefined;
};

export const CheckboxUI = (props: CheckboxType) => {
  const { checked = false, className, text, ...rest } = props;

  return (
    <>
      <Checkbox.Root className={`${s.checkboxRoot} ${s.cla}`} {...rest}>
        <Checkbox.Indicator className={s.checkboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </>
  );
};
