import { ComponentPropsWithoutRef, ElementType } from "react";

import s from "./typography.module.css";

export type TypographyType<T extends ElementType = "span"> = {
  as?: T;
  className?: string;
  fullWidth?: boolean;
  text: string;
  variant?:
    | "body1"
    | "body2"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "large"
    | "link1"
    | "link2"
    | "overline"
    | "subtitle1"
    | "subtitle2";
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "span">(
  props: TypographyType<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyType<T>>,
) => {
  const {
    as: Component = "span",
    className,
    text,
    variant = "body1",
    ...rest
  } = props;

  return (
    <Component className={`${s[variant]} ${className}`} {...rest}>
      {text}
    </Component>
  );
};
