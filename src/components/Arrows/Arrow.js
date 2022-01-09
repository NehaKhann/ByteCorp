import { Arrowstyle } from "./Arrowstyle";

export function Arrow({ color, LeftClick, RightClick }) {
  return (
    <Arrowstyle color={color}>
      <i onClick={LeftClick} className="bi bi-arrow-down-circle-fill"></i>
      <i onClick={RightClick} className="bi bi-arrow-down-circle-fill"></i>
    </Arrowstyle>
  );
}
