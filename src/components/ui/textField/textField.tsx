import { ChangeEvent, useState } from "react";

import { ClouseEyes, Cross, OpenEyes, Search } from "@/icons";

import s from "./textField.module.scss";

export type TextFieldProps = {
  className?: string;
  clearText?: () => void;
  disabled: boolean;
  error?: null | string;
  label: string;
  onChange: (e: string) => void;
  placeholder?: string;
  type?: "default" | "password" | "search";
  value: string;
  withLoopIcon?: boolean;
};

export const TextField = (props: TextFieldProps) => {
  const {
    className,
    clearText,
    disabled,
    error = null,
    label,
    onChange,
    placeholder,
    type,
    value,
  } = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };
  const [isPassword, setIsPasword] = useState(type === "password");

  return (
    <>
      <div className={`${s.wrapper} `}>
        {label && <div className={s.label}>{label}</div>}
        <input
          className={`${s.defaultInput} ${className} ${
            error ? s.errorInput : ""
          }  ${type === "search" && s.searchInput}`}
          disabled={disabled}
          onChange={onChangeHandler}
          placeholder={placeholder}
          type={isPassword ? "password" : "text"}
          value={value}
        />
        {type === "search" && (
          <>
            <div className={s.searchIcon}>
              <Search />
            </div>
            <div
              className={s.crossIcon}
              onClick={() => (clearText ? clearText() : () => {})}
            >
              <Cross />
            </div>
          </>
        )}
        {isPassword && (
          <div className={s.eyesIcon} onClick={() => setIsPasword(false)}>
            <OpenEyes />
          </div>
        )}
        {type === "password" && !isPassword && (
          <div className={s.eyesIcon} onClick={() => setIsPasword(true)}>
            <ClouseEyes />
          </div>
        )}
      </div>
      {error && <div className={s.errorText}>{error}</div>}
    </>
  );
};
