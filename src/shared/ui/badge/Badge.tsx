import Image from "next/image";

import style from "./Badge.module.css";
import { Fragment } from "react";
import { DeployIcon } from "@/shared/ui/icons/DeployIcon";

type TProps = {
  children: React.ReactNode;
  asChild?: boolean;
};

type TDefaultBadge = {
  backImg: TImg;
  children: React.ReactNode;
  linkDeploy: string;
  className?: string;
};

export const Badge = ({ children, asChild = false }: TProps) => {
  const Comp = asChild ? Fragment : "div";
  return <Comp className={style.badge}>{children}</Comp>;
};

Badge.Back = function BadgeBack({ children, asChild = false }: TProps) {
  const Comp = asChild ? Fragment : "div";
  return <Comp className={style.badgeBack}>{children}</Comp>;
};

Badge.Front = function BadgeFront({ children, asChild = false }: TProps) {
  const Comp = asChild ? Fragment : "div";
  return <Comp className={style.badgeFront}>{children}</Comp>;
};

Badge.Default = function BadgeDefault({
  linkDeploy,
  backImg,
  children,
  className = "",
}: TDefaultBadge) {
  return (
    <a
      className={`${style.defaultBadge} ${className}`}
      href={linkDeploy}
      target="_blank"
      rel="nofollow"
    >
      <Badge>
        <Badge.Back>
          <Image
            src={backImg.src}
            alt={backImg.alt || ""}
            fill={true}
            sizes="100%"
          />
        </Badge.Back>
        <Badge.Front>{children}</Badge.Front>
      </Badge>
    </a>
  );
};
