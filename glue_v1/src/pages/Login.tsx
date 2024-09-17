import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Text,
  Container,
  Group,
  Button,
  Image,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuth from "../services/auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

type FormDataType = {
  email: string;
  password: string;
};

export default function Login() {
  const { loginWithAuth0, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: FormDataType) => {
    const isLoggedIn = await loginWithAuth0(data);
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  };

  if (isLoggedIn) {
    navigate("/", { replace: true });
    return null; // Prevent rendering of the form
  }

  return (
    <Container size={420} my={80} className="text-sm">
      <Image radius="xs" src="/static/glue.png" w={100} className="mx-auto" />
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <p className="font-bold text-lg mb-6">Login to your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email Address"
            placeholder="user@gmail.com"
            required
            {...register("email")}
            error={errors.email ? errors.email.message : null}
          />

          <PasswordInput
            label="Password"
            placeholder="password"
            required
            mt="md"
            {...register("password")}
            error={errors.password ? errors.password.message : null}
          />
          <Group justify="space-between" mt="lg">
            <Anchor
              component="button"
              size="sm"
              c="black"
              fw={600}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="lg" bg="black" type="submit">
            Sign in
          </Button>
          <Text c="dimmed" size="sm" ta="center" mt={20}>
            Do not have an account yet?{" "}
            <Anchor
              size="sm"
              component="button"
              c="black"
              fw={600}
              onClick={() => navigate("/signup")}
            >
              Create account
            </Anchor>
          </Text>
        </form>
      </Paper>
    </Container>
  );
}
