import { CheckMarkIcon } from "@/components/ui/checkbox/checkMarkIcon";
import { Typography } from "@/components/ui/typography";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";

import s from "./checkbox.module.scss";

type CheckboxType = CheckboxProps & {
  checked?: CheckedState;
  className?: string;
  defaultChecked?: CheckedState;
  disabled?: boolean;
  label?: string | undefined;
  onCheckedChange?(checked: CheckedState): void;
};

export const CheckboxUI = (props: CheckboxType) => {
  const {
    checked = false,
    className,
    disabled = false,
    label,
    ...rest
  } = props;

  return (
    <div style={{ alignItems: "center", display: "flex", marginRight: "15px" }}>
      <div className={s.wrapper}>
        <div className={s.around}>
          <Checkbox.Root
            className={s.checkboxRoot}
            disabled={disabled}
            {...rest}
          >
            <Checkbox.Indicator className={s.checkboxIndicator}>
              <CheckMarkIcon color={disabled ? "#dad9df" : "black"} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
      </div>
      <Typography color={"white"}>
        <label
          className={`${s.label} ${disabled ? s.labelDisabled : ""}`}
          htmlFor={"c1"}
        >
          Accept terms and conditions.
        </label>
      </Typography>
    </div>
  );
};
