import style from "./Characteristic.module.css";

type TProps = {
  label: string;
  max: number;
  value: number;
  color: string;
};

export const Characteristic = ({ label, max, value, color }: TProps) => {
  return (
    <div className={style.characteristic}>
      <label className={style.label} htmlFor="experience">
        {label}
      </label>
      <progress
        className={style.progress}
        id=""
        max={max}
        value={value}
        style={{ "--clr-fill": color } as React.CSSProperties}
      />
    </div>
  );
};
