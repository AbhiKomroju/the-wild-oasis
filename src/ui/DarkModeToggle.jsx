import { HiMoon, HiSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {darkMode ? <HiSun /> : <HiMoon />}
    </ButtonIcon>
  );
}
