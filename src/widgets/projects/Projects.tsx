import style from "./Projects.module.css";
import { Card } from "@/entities/card/Card";

export const Projects = () => {
  return (
    <div className={style.projects}>
      <h2 className={style.title}>Completed Dungeons (My Projects)</h2>
      <div className={style.wrapper}>
        <Card
          preview_img={"/images/marketnft.png"}
          name="NFT Marketplace"
          description="Учебный проект интернет магазина нфт товаров"
          colorHeart="linear-gradient(130deg, rgba(58,78,180,1) 0%, rgba(155,44,192,1) 25%, rgba(253,29,29,1) 50%, rgba(245,151,23,1) 78%, rgba(45,203,25,1) 100%);"
          linkSource="https://github.com/loonlylokly/marketplace_nft"
        />
        <Card
          preview_img={"/images/uristnn.png"}
          name="UristNN.ru"
          description="Сайт визитка для юридической компании находиться по адресу uristnn.ru"
          colorHeart="linear-gradient(200deg, rgba(255,0,0,1) 30%, rgba(224,134,134,1) 100%);"
          linkDeploy="https://uristnn.ru"
        />
        <Card
          preview_img={"/images/volonters.png"}
          name="Sport-Volonter.ru"
          description="Платформа для организации волонтеров на мероприятии"
          colorHeart="linear-gradient(45deg, rgba(212,0,255,1) 0%, rgba(54,86,233,1) 100%);"
          linkDeploy="https://sport-volonter.ru"
        />
        <Card
          preview_img={"/images/buhgalter.png"}
          name="Buhgalter-BS.ru"
          description="Сайт визитка для бухгалтерской компании находиться по адресу buhgalter-bs.ru"
          colorHeart="linear-gradient(to right, rgb(72, 184, 96), rgb(31, 109, 117));"
          linkDeploy="https://buhgalter-bs.ru"
        />
        <Card
          preview_img={"/images/ProjectPreview.png"}
          name="My CV"
          description="Мое резюме"
          colorHeart="linear-gradient(320deg, rgba(255,105,0,1) 0%, rgba(255,66,0,1) 50%, rgba(255,10,10,1) 100%);"
          linkDeploy="/"
          linkSource="https://github.com/loonlylokly/loonlylokly_cv"
        />
      </div>
    </div>
  );
};
