import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { setCookie } from "nookies";
import { useForm } from "react-hook-form";
import { api } from "../services/api";
import Router from "next/router";

interface AxiosProps {
  user: {
    login: string;
    date: Date;
  };
  token: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm();

  async function handleSignIn(data) {
    const { login, password } = data;

    const {
      data: { user, token },
    } = await api.post<AxiosProps>("/api/authenticated", {
      login,
      password,
    });

    setCookie(null, "fake_next_token", token);

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    Router.push("/dashboard");
  }

  return (
    <Box d="grid" placeItems={"center"} w="100%" h="100vh">
      <FormControl
        as="form"
        w="300px"
        textAlign={"center"}
        boxShadow={"0 0 10px #333"}
        p="30px"
        borderRadius={"20px"}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Text fontSize={"24px"} mb="20px">
          Login
        </Text>
        <Input placeholder="Your login" {...register("login")} />
        <Input
          type="password"
          placeholder="Your password"
          {...register("password")}
        />
        <Button type="submit" mt="20px">
          Enter
        </Button>
      </FormControl>
    </Box>
  );
}
