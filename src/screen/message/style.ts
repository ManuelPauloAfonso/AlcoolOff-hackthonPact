import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffff;
`;

export const MessageContainer = styled.View<{ isMe: boolean }>`
  padding: 10px;
  margin-bottom: 10px;
  max-width: 80%;
  border-radius: 8px;
  background-color: ${(props) => (props.isMe ? "#199a8e" : "#ddd")};
  align-self: ${(props) => (props.isMe ? "flex-end" : "flex-start")};
`;

export const MessageText = styled.Text<{ isMe: boolean }>`
  color: ${(props) => (props.isMe ? "white" : "black")};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #199a8e;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const SendButtonText = styled.Text`
  color: white;
`;
