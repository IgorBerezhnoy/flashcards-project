import { ComponentPropsWithoutRef, forwardRef } from "react";

import s from "./card.module.scss";

export type CardProps = {} & ComponentPropsWithoutRef<"div">;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...restProps }) => {
    return (
      <div
        className={`${s.wrapperCard} ${className ? className : ""}`}
        {...restProps}
      ></div>
    );
  },
);
