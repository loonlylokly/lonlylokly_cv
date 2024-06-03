import Image from "next/image";
import { CardTextPath } from "@/shared/ui/icons/CardTextPath";
import { Badge } from "@/shared/ui/badge/Badge";
import { GithubIcon } from "@/shared/ui/icons/GithubIcon";
import { DeployIcon } from "@/shared/ui/icons/DeployIcon";

import style from "./Card.module.css";

type TProps = {
  name: string;
  description: string;
  preview_img: string;
  colorHeart: string;
  preview_alt?: string;
  linkSource?: string;
  linkDeploy?: string;
};

export const Card = ({
  preview_alt = "",
  preview_img,
  name,
  description,
  colorHeart,
  linkSource = "",
  linkDeploy = "",
}: TProps) => {
  return (
    <div className={style.card}>
      <div className={style.wrap_img}>
        <div className={style.project_preview}>
          <Image
            className={style.project_preview_img}
            src={preview_img}
            alt={`${preview_alt || "Preview of a project"}`}
            fill={true}
            sizes="100%"
          />
        </div>
        <Image
          className={style.card_img}
          src="/images/card3.png"
          alt="Оформление карточки проекта"
          fill={true}
          sizes="100%"
        />
        <CardTextPath className={style.cardTextPath}>{name}</CardTextPath>
        <p className={style.desc}>{description}</p>
        <div className={style.heart_wrap}>
          <div className={style.heart} style={{ background: colorHeart }}></div>
        </div>
        {linkSource ? (
          <Badge.Default
            className={style.github}
            linkDeploy={linkSource}
            backImg={{ src: "/images/badgeSourceBack.png" }}
          >
            <GithubIcon />
          </Badge.Default>
        ) : null}
        {linkDeploy ? (
          <Badge.Default
            className={style.deploy}
            linkDeploy={linkDeploy}
            backImg={{ src: "/images/badgeDeployBack.png" }}
          >
            <DeployIcon />
          </Badge.Default>
        ) : null}
      </div>
    </div>
  );
};
