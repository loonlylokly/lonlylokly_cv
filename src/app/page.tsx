import { InfoScroll } from "@/widgets/infoScroll/InfoScroll";
import { MainScene } from "@/widgets/mainScene/MainScene";
import { Projects } from "@/widgets/projects/Projects";
import { DnDLabel } from "@/entities/dndLabel/DnDLabel";

import style from "./page.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <section className={style.section}>
        <MainScene />
        <InfoScroll />
        <div className={style.label}>
          <DnDLabel />
        </div>
      </section>
      <section className={style.section}>
        <Projects />
      </section>
    </main>
  );
}
