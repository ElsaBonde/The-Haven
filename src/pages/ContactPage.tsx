import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

const TextDiv = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
`;

const SiteTitle = styled.p`
  font-size: 40px;
  margin: 10px 0px;
`;

const SmallText = styled.p`
  font-size: 17px;
  margin: 5px 0px;
`;

const SecondTitle = styled.p`
  font-size: 25px;
  margin: 18px 0px 10px 0px;
`;

const Line = styled.div`
width: 2px;
height: 70%;
background-color: #183717;
margin: auto 80px;
`;

const FormDiv = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  margin: 80px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
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

const SendButton = styled.button`
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 900;
  color: #183717;
  margin-top: 25px;
  background: inherit;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #183717;
  width: 25%;
  cursor: pointer;

  &:hover {
    background-color: #6a8e68;
    color: white;
    transition: color 1.5s ease;
  }
`;

const ErrorMessage = styled.p`
margin: 0;
padding: 3px 0 0 0;
font-size: 10px;
color: #CE0E0E;
`;


export default function ContactPage() {
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

  type Message = z.infer<typeof MessageSchema>;

  const form = useForm<Message>({
    resolver: zodResolver(MessageSchema),
  });

  const sendMessage = () => {
    console.log("Message Sent")
    form.reset();
  };

  return (
    <>
      <TextDiv>
        <SiteTitle>Get in touch with us</SiteTitle>
        <SmallText>
          We're delighted to hear from you! Whether you have questions about our
          resort facilities, yoga classes, or would simply like to say hello,
          we're here to help. Feel free to reach out to us via the form or
          directly at our contact information provided. Our dedicated team is
          committed to providing you with a memorable experience.
        </SmallText>
        <SecondTitle>Contact Information:</SecondTitle>
        <SmallText>
          Address: Solgården 21, Alafors, 44951 Sweden<br></br>
          Phone: +46 73 893 94 75<br></br>
          Email: info@thehaven.com <br></br>
          <br></br>
          Thank you for considering The Haven for your wellness retreat!
        </SmallText>
      </TextDiv>
      <Line></Line>
      <FormDiv>
        <Form onSubmit={form.handleSubmit(sendMessage)}>
          <Label htmlFor="firstname">Firstname:</Label>
          <InputField id="firstname" placeholder="Example: John" {...form.register("name")}></InputField>
          <Label htmlFor="surname">Surname:</Label>
          <InputField id="surname" placeholder="Example: Doe" {...form.register("surname")}></InputField>
          <Label htmlFor="emailaddress">Email address:</Label>
          <InputField
            id="emailaddress"
            placeholder="Example: info@thehaven.com"
            {...form.register("email")}
            
          ></InputField>
          {form.formState.errors.email?.message && (
            <ErrorMessage>
              {form.formState.errors.email?.message}
            </ErrorMessage>
          )}
          <Label htmlFor="subject">Subject:</Label>
          <InputField id="subject" placeholder="Example: Booking" {...form.register("subject")}></InputField>
          <Label htmlFor="message">Message:</Label>
          <MessageArea
            id="message"
            placeholder="Example: Hello dear guest, you can write your message here."
            {...form.register("message")}
          ></MessageArea>
          {form.formState.errors.message?.message && (
            <ErrorMessage>
              {form.formState.errors.message?.message}
            </ErrorMessage>
          )}
          <SendButton>Send Message</SendButton>
        </Form>
      </FormDiv>
    </>
  );
}
