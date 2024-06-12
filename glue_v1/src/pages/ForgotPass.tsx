import {
  Group,
  Container,
  Button,
  TextInput,
  Title,
  Alert,
} from "@mantine/core";
import api from "../services/api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconInfoCircle } from "@tabler/icons-react";

interface UserEmail {
  email: string;
}

const ForgotPass = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<UserEmail>({
    // resolver: yupResolver(validationSchema),
  });

  const handleForgotPass = async ({ email }: UserEmail) => {
    console.log("values", email);
    try {
      await api().post("/margaret/v1/user/forget-send/link", { email: email });
      // navigate("/login", { replace: true });
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackToLogin = () => {
    setShowAlert(false);
    navigate("/login", { replace: true });
  };

  return (
    <Container size="xs" className="mt-40">
      {!showAlert ? (
        <>
          <Title order={2} mb="md" mt="xl" className="text-center">
            Forgot Pass
          </Title>
          <form onSubmit={handleSubmit(handleForgotPass)}>
            <TextInput
              label="Email"
              placeholder="Your email"
              {...register("email")}
            />
            <Group gap="md" mt="md">
              <Button variant="filled" type="submit" color="black">
                Submit
              </Button>
              {/* <Button color="red" onClick={() => form.reset()}>
              Reset
            </Button> */}
            </Group>
          </form>
        </>
      ) : (
        <>
          <Alert
            variant="filled"
            color="blue"
            radius="md"
            title="Check Email"
            icon={<IconInfoCircle />}
            className="my-6"
          >
            Please check your email for the password change link. The link will
            expire after five minutes. <br />
            <Button
              variant="outline"
              onClick={handleBackToLogin}
              color="black"
              className="my-4"
            >
              Go back to login
            </Button>
          </Alert>
        </>
      )}
    </Container>
  );
};

export default ForgotPass;
