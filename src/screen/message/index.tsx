import { Text } from "react-native";
import {
  Container,
  Input,
  InputContainer,
  MessageContainer,
  MessageText,
  SendButton,
  SendButtonText,
} from "./style";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { generateResponse } from "../../service/ChatGPTService";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (!newMessage.trim()) {
      return;
    }

    const userMessage = { text: newMessage, isMe: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = await generateResponse(newMessage);
    const chatGPTMessage = { text: botResponse, isMe: false };
    setMessages((prevMessages) => [...prevMessages, chatGPTMessage]);

    setNewMessage("");
  };

  return (
    <Container>
      <ScrollView>
        {messages.map((msg, index) => (
          <MessageContainer key={index} isMe={msg.isMe}>
            <MessageText isMe={msg.isMe}>{msg.text}</MessageText>
          </MessageContainer>
        ))}
      </ScrollView>
      <InputContainer>
        <Input
          placeholder="Olá Precisa de Ajuda..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <SendButton onPress={handleSendMessage}>
          <SendButtonText>Enviar</SendButtonText>
        </SendButton>
      </InputContainer>
    </Container>
  );
}
