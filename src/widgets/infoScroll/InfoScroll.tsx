"use client";
import Image from "next/image";
import { Characteristics } from "@/entities/сharacteristics/Characteristics";

import style from "./InfoScroll.module.css";
import { useState } from "react";
import { MailIcon } from "@/shared/ui/icons/MailIcon";
import { TelegramIcon } from "@/shared/ui/icons/TelegramIcon";

export const InfoScroll = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.infoScroll}>
      <div className={style.infoScroll_wrap}></div>
      <div className={style.wrapper}>
        <div className={style.wrap_scroll_body}>
          <Image
            className={`${style.scroll_body} ${isOpen && style.open}`}
            src="/images/scroll_body.webp"
            alt="old scroll"
            fill={true}
            sizes="100%"
            loading="eager"
          />
        </div>
        <div className={style.wrap_scroll_top}>
          <Image
            className={style.scroll_top}
            src="/images/scroll_top.png"
            alt="old scroll"
            fill={true}
            sizes="100%"
            loading="eager"
          />
        </div>
        <div className={style.content}>
          <div className={style.content_wrap}>
            <div className={`${style.wrap_content} ${isOpen && style.open}`}>
              <h1 className={style.name}>Mihail Krivdin</h1>
              <div className={style.class}>
                <h2 className={style.class_label}>Class:</h2>
                <h3 className={style.class_name}>Magic React Developer</h3>
              </div>
              <div className={style.lvl}>
                <h2 className={style.lvl_label}>Level:</h2>
                <h3 className={style.lvl_value}>99</h3>
              </div>
              <h3 className={style.characteristics_title}>Characteristics</h3>
              <Characteristics />
              <div className={style.socials}>
                <a className={style.social_link} href="mailto:krivdinm@ya.ru">
                  <MailIcon className={style.icon} />
                </a>
                <a
                  className={style.social_link}
                  href="https://t.me/loonlylokly"
                >
                  <TelegramIcon className={style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className={style.switch}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className={style.switch_wrap}>
            <Image
              className={style.switch_img}
              src="/images/stamp.png"
              alt="Button to open/close scroll info"
              fill={true}
              sizes="100%"
              loading="eager"
            />
            <p className={style.switch_text}>{isOpen ? "Open" : "Close"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};
