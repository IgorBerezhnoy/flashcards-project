import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Logo } from "@/icons/logo";

import s from "./header.module.scss";

type HeaderType = {
  isLogin: boolean;
  onClick?: () => void;
};

export const Header = ({ isLogin, onClick }: HeaderType) => {
  return (
    <header className={s.header}>
      <Logo />
      {!isLogin ? (
        <Button onClick={onClick}>Sign In</Button>
      ) : (
        <div>
          <Typography variant={"h3"}>Ivan</Typography>
        </div>
      )}
    </header>
  );
};
