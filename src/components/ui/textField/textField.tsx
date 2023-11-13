import { ChangeEvent, useState } from "react";

import { ClouseEyes, Cross, OpenEyes, Search } from "@/icons";

import s from "./textField.module.scss";

export type TextFieldProps = {
  className?: string;
  disabled: boolean;
  error?: null | string;
  label: string;
  onChange: (e: string) => void;
  type?: "default" | "password" | "search";
  value: string;
  withLoopIcon?: boolean;
};

export const TextField = (props: TextFieldProps) => {
  const {
    className,
    disabled,
    error = null,
    label,
    onChange,
    type,
    value,
  } = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };
  const [isPassword, setIsPasword] = useState(type === "password");

  const onClick = () => {
    debugger;
    setIsPasword(false);
  };

  return (
    <>
      {label && <div className={s.label}>{label}</div>}
      <div className={`${s.wrapper} `}>
        <input
          className={`${s.defaultInput} ${className} ${
            error ? s.errorInput : ""
          }  ${type === "search" && s.searchInput}`}
          disabled={disabled}
          onChange={onChangeHandler}
          type={isPassword ? "password" : "text"}
          value={value}
        />
        {type === "search" && (
          <>
            <div className={s.searchIcon}>
              <Search />
            </div>
            <div className={s.crossIcon}>
              <Cross />
            </div>
          </>
        )}
      </div>
      {error && <div className={s.errorText}>{error}</div>}
      {isPassword && (
        <div onClick={onClick}>
          <OpenEyes />
        </div>
      )}

      {type === "password" && !isPassword && (
        <div>
          <ClouseEyes />
        </div>
      )}
    </>
  );
};
