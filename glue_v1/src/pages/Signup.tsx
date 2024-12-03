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
import { useEffect, useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords do not match")
    .required("Confirm Password is required"),
});

type FormDataType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const [LSData, setLSData, clearLSData] = useLocalStorage<
    string | Record<string, unknown>
  >("userSignupData", null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const { signup, sendVerMail, isLoggedIn } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(validationSchema),
  });
  console.log(LSData);
  let interval: number;
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, []);

  const onSubmit = async (data: FormDataType) => {
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    setLSData(data);
    const verMailSuccess = await sendVerMail(data);

    if (verMailSuccess) {
      navigate("/verify-mail");

      const timer = setTimeout(async () => {
        if (!isVerified) {
          clearLSData();
          navigate("/signup");
          clearInterval(interval);
        }
      }, 300000);

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
            console.log("signup succcessful", response);
            setIsVerified(true);
            navigate("/login", { replace: true });
          }
        } else {
          navigate("/signup");
        }
      };

      checkVerificationStatus();
      interval = setInterval(checkVerificationStatus, 5000);
      return () => clearInterval(interval);
    } else {
      setIsSubmitting(false); // Reset the flag if there's an error
    }
  };

  return (
    <Container size={420} my={80} className="text-sm">
      <Image radius="xs" src="/static/glue.png" w={100} className="mx-auto" />
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <p className="font-bold text-lg">Create a new account</p>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <TextInput
            label="Full Name"
            placeholder="Your name"
            required
            mt="md"
            {...register("name")}
            error={errors.name ? errors.name.message : null}
          />
          <TextInput
            label="Email Address"
            placeholder="user@google.com"
            required
            mt="md"
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
          <PasswordInput
            label="Confirm Password"
            placeholder="password"
            required
            mt="md"
            {...register("confirmPassword")}
            error={
              errors.confirmPassword ? errors.confirmPassword.message : null
            }
          />
          <Group justify="space-between" mt="lg">
            By signing up you agree that Glue can send you marketing emails
          </Group>
          <Button fullWidth bg="black" mt="lg" type="submit">
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
