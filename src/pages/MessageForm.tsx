import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";
import { Button } from "../StyledElements";

const FormDiv = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  margin: 80px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    margin: 0px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 80px;

  @media (max-width: 600px) {
    margin: 10px;
    padding-top: 10px;
    border-top: 2px solid #183717;
  }
`;

const Label = styled.label`
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  color: #183717;
  padding-bottom: 3px;
  margin-top: 15px;
`;

const InputField = styled.input`
  padding: 7px 5px;
  font-family: "Ledger";
  color: #183717;
`;

const MessageArea = styled.textarea`
  padding: 7px 5px;
  font-family: "Ledger";
  color: #183717;
`;

const SendButton = styled(Button)`
  font-size: 12px;
  margin-top: 25px;
  padding: 15px;
  width: 25%;

  @media (max-width: 600px) {
    width: 40%;
    align-self: center;
  }
`;

const ErrorMessage = styled.p`
  margin: 0;
  padding: 3px 0 0 0;
  font-size: 10px;
  color: #ce0e0e;
`;

//typ för props till onMessageSent
type onMessageSent = () => void;

//interface för props
interface MessageFormProps {
  onMessageSent: onMessageSent;
}

export default function MessageForm({ onMessageSent }: MessageFormProps) {
  //zodschema för formuläret med felmeddelandet där det behövs
  const MessageSchema = z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string().email({
      message:
        "Please enter a valid email address in the following format: name@example.com",
    }),
    subject: z.string(),
    message: z
      .string()
      .max(300, { message: "Oops! Your message can't exceed 300 characters." }),
  });

  //typ för meddelandet
  type Message = z.infer<typeof MessageSchema>;

  //useForm hook för att hantera formuläret, resolver för att använda zodschema
  const form = useForm<Message>({
    resolver: zodResolver(MessageSchema),
  });

  //funktion för att skicka meddelandet som rensar formuläret och anropar onMessageSent
  const sendMessage = () => {
    form.reset();
    onMessageSent();
  };
  return (
    <FormDiv>
      <Form onSubmit={form.handleSubmit(sendMessage)}>
        <Label htmlFor="firstname">Firstname:</Label>
        <InputField
          id="firstname"
          placeholder="Example: John"
          {...form.register("name")}
        ></InputField>
        <Label htmlFor="surname">Surname:</Label>
        <InputField
          id="surname"
          placeholder="Example: Doe"
          {...form.register("surname")}
        ></InputField>
        <Label htmlFor="emailaddress">Email address:</Label>
        <InputField
          id="emailaddress"
          placeholder="Example: info@thehaven.com"
          {...form.register("email")}
        ></InputField>
        {form.formState.errors.email?.message && (
          <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
        )}
        <Label htmlFor="subject">Subject:</Label>
        <InputField
          id="subject"
          placeholder="Example: Booking"
          {...form.register("subject")}
        ></InputField>
        <Label htmlFor="message">Message:</Label>
        <MessageArea
          id="message"
          placeholder="Example: Hello dear guest, you can write your message here."
          {...form.register("message")}
        ></MessageArea>
        {form.formState.errors.message?.message && (
          <ErrorMessage>{form.formState.errors.message?.message}</ErrorMessage>
        )}
        <SendButton>Send Message</SendButton>
      </Form>
    </FormDiv>
  );
}
