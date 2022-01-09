import { Buttonstyle } from "./Buttonstyle";

export const Button = ({ color, text, ...props }) => {
  return (
    <Buttonstyle color={color} {...props}>
      {text}
    </Buttonstyle>
  );
};
