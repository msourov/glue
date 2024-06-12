import { Container, Title, Text, Group } from "@mantine/core";
// import { Navigate } from "react-router-dom";

const VerifyMail: React.FC = () => {
  return (
    <Container size="xs" style={{ textAlign: "center", marginTop: "10%" }}>
      <Group justify="column" gap="md" className="flex justify-center">
        {/* <Image
            src="/static/verification_mail.png"
            alt="Check your mail"
            width={150}
            style={{ marginBottom: 20 }}
          /> */}
        <Title order={2} style={{ marginBottom: 20 }}>
          Check Your Email
        </Title>
        <Text size="md" style={{ marginBottom: 20 }}>
          We have sent a verification link to your email address that will
          expire after two minutes. Please check your inbox and click on the
          link to verify your email and complete your signup process.
        </Text>
        {/* <Button
          variant="outline"
          color="blue"
          onClick={() => <Navigate to="/login" />}
        >
          Go back to login
        </Button> */}
      </Group>
    </Container>
  );
};

export default VerifyMail;
