import { Characteristic } from "./ui/Characteristic";
import style from "./Characteristics.module.css";

export const Characteristics = () => {
  return (
    <div className={style.characteristics}>
      <Characteristic
        label="TypeScript"
        max={100}
        value={85}
        color="radial-gradient(circle at 11% 62%, rgba(205, 205, 205,0.04) 0%, rgba(205, 205, 205,0.04) 50%,rgba(149, 149, 149,0.04) 50%, rgba(149, 149, 149,0.04) 100%),radial-gradient(circle at 78% 10%, rgba(49, 49, 49,0.04) 0%, rgba(49, 49, 49,0.04) 50%,rgba(254, 254, 254,0.04) 50%, rgba(254, 254, 254,0.04) 100%),radial-gradient(circle at 92% 43%, rgba(34, 34, 34,0.04) 0%, rgba(34, 34, 34,0.04) 50%,rgba(206, 206, 206,0.04) 50%, rgba(206, 206, 206,0.04) 100%),linear-gradient(329deg, rgb(241, 77, 33),rgb(218, 227, 61));"
      />
      <Characteristic
        label="Next.js"
        max={100}
        value={70}
        color="linear-gradient(67.5deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 40%,rgb(29, 29, 29) 40%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(90deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 6%,rgb(29, 29, 29) 6%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(135deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 6%,rgb(29, 29, 29) 6%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(0deg, rgb(6, 6, 6) 0%, rgb(6, 6, 6) 6%,rgb(29, 29, 29) 6%, rgb(29, 29, 29) 57%,rgb(52, 52, 52) 57%, rgb(52, 52, 52) 58%,rgb(75, 75, 75) 58%, rgb(75, 75, 75) 79%,rgb(97, 97, 97) 79%, rgb(97, 97, 97) 93%,rgb(120, 120, 120) 93%, rgb(120, 120, 120) 95%,rgb(143, 143, 143) 95%, rgb(143, 143, 143) 100%),linear-gradient(90deg, rgb(8, 8, 8),rgb(221, 221, 221)); background-blend-mode:overlay,overlay,overlay,overlay,normal;"
      />
      <Characteristic
        label="React"
        max={100}
        value={80}
        color="linear-gradient(52deg, rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%,rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%,rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%),linear-gradient(258deg, rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%,rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%,rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%),linear-gradient(129deg, rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%,rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%,rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%),linear-gradient(280deg, rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%,rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%,rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%),linear-gradient(85deg, rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%,rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%,rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%),linear-gradient(128deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%,rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%,rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.89999999999999%),linear-gradient(323deg, rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%,rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%,rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.89999999999999%),linear-gradient(61deg, rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%,rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%,rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%),linear-gradient(0deg, #2625e3,#0bbaef);"
      />
      <Characteristic
        label="Threejs"
        max={100}
        value={40}
        color="linear-gradient(45deg, rgb(20, 222, 124) 0%, rgb(20, 222, 124) 21%,rgb(25, 190, 119) 21%, rgb(25, 190, 119) 37%,rgb(30, 158, 113) 37%, rgb(30, 158, 113) 46%,rgb(35, 126, 108) 46%, rgb(35, 126, 108) 53%,rgb(39, 94, 103) 53%, rgb(39, 94, 103) 59%,rgb(44, 62, 97) 59%, rgb(44, 62, 97) 77%,rgb(49, 30, 92) 77%, rgb(49, 30, 92) 100%);"
      />
      <Characteristic
        label="React Native"
        max={100}
        value={30}
        color="linear-gradient(to right, #c33764, #1d26df);"
      />
    </div>
  );
};
