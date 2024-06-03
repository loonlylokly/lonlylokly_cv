import Image from "next/image";

import style from "./DnDLabel.module.css";

export const DnDLabel = () => {
  return (
    <div className={style.dndLabel}>
      <Image
        src="/images/dndLabel.png"
        alt='Label "Frontend and Dragons"'
        fill={true}
        sizes="100%"
      />
    </div>
  );
};
