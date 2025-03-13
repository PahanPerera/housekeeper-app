import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRegister } from "./useRegister";

export function Register() {
  const { call: register } = useRegister();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  return (
    <Container size={420} my={30}>
      <Title ta="center">Welcome!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{" "}
        <Anchor size="sm" component="button">
          Login
        </Anchor>
      </Text>
      <form onSubmit={form.onSubmit((values) => register(values))}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Name"
            placeholder="john"
            required
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="john@app.dev"
            required
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Your password"
            required
            mt="md"
            key={form.key("passwordConfirm")}
            {...form.getInputProps("passwordConfirm")}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign up
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
