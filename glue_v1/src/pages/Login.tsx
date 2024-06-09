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
import { useEffect } from "react";
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
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: FormDataType) => {
    const isLoggedIn = await login(data);
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container size={420} my={80} className="text-sm">
      <Image radius="xs" src="/static/glue.png" w={100} className="mx-auto" />
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...register("email")}
            error={errors.email ? errors.email.message : null}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
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
          <Button fullWidth mt="xl" bg="black" type="submit">
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
