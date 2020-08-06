import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Michel Telóoo"
          date="21/06/1999"
          isBot
          hasMention
          content={
            <>
              <Mention>@LMichel Telóoo</Mention>, aloura
            </>
          }
        />
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Hoje é meu aniversário!"
        />{" "}
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Hoje é meu aniversário!"
        />{" "}
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
        />{" "}
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Hoje é meu aniversário!"
        />{" "}
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
        <ChannelMessage
          author="Lucas Felinto"
          date="21/06/1999"
          content="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
        />{" "}
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
