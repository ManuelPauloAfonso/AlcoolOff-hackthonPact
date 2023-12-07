import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, TextButton } from "./style";

type ButtonType = {
  text: string;
} & TouchableOpacityProps;

export function Button({ text, ...rest }: ButtonType) {
  return (
    <ButtonContainer {...rest}>
      <TextButton>{text}</TextButton>
    </ButtonContainer>
  );
}
