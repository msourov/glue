import { yupResolver } from "@hookform/resolvers/yup";
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
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useAuth from "../services/auth/useAuth";
import useLocalStorage from "../services/hooks/useLocalStorage";
import api from "../services/api";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^\+?0?\d{1,14}$/, "Phone number is not valid")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

const Signup = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setLSData, clearLSData] = useLocalStorage<
    string | Record<string, unknown>
  >("userSignupData", null);
  const { signup, sendVerMail, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(validationSchema),
  });

  let interval: number;
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, []);

  const onSubmit = async (data: FormDataType) => {
    setLSData(data);
    if (await sendVerMail(data)) {
      navigate("/verify-mail");
      let isVerified = false;

      const timer = setTimeout(async () => {
        if (!isVerified) {
          await clearLSData();
          navigate("/signup");
          clearInterval(interval);
        }
        clearInterval(interval);
      }, 120000);

      const checkVerificationStatus = async () => {
        const verStatusRes = await api().get(
          `margaret/v1/user/otp_check/${data?.email}`
        );
        console.log("verStatusRes", verStatusRes);

        if (verStatusRes.data.success) {
          clearTimeout(timer);
          clearInterval(interval);
          const response = await signup(data);
          if (response) {
            console.log("signup succcessful");
            isVerified = true;
            navigate("/login", { replace: true });
          }
          navigate("/login", { replace: true });
        } else {
          navigate("/signup");
        }
      };

      checkVerificationStatus();
      interval = setInterval(checkVerificationStatus, 5000);
      return () => clearInterval(interval);
    }
  };

  return (
    <Container size={420} my={80} className="text-sm">
      <Image radius="xs" src="/static/glue.png" w={100} className="mx-auto" />
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="name"
            placeholder="Your name"
            required
            {...register("name")}
            error={errors.name ? errors.name.message : null}
          />
          <TextInput
            label="phone"
            placeholder="123-45-678"
            required
            {...register("phone")}
            error={errors.phone ? errors.phone.message : null}
          />
          <TextInput
            label="Email"
            placeholder="user@google.com"
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
          <Group justify="space-between" mt="xs"></Group>
          <Button fullWidth mt="xl" bg="black" type="submit">
            Sign up
          </Button>
          <Text c="dimmed" size="sm" ta="center" mt={20}>
            Already have an account?{" "}
            <Anchor
              size="sm"
              component="button"
              c="black"
              fw={600}
              onClick={() => navigate("/login")}
            >
              Login
            </Anchor>
          </Text>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
