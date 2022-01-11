import { Button, Flex, Text } from "@chakra-ui/react";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { api } from "../services/api";

export default function Dashboard() {
  async function handleResponse() {
    const response = await api.get("/api/users");
    console.log(response);
  }
  useEffect(() => {
    const cookie = parseCookies();
    if (cookie["fake_next_token"]) {
      api.defaults.headers[
        "Authorization"
      ] = `Bearer ${cookie["fake_next_token"]}`;
      console.log(cookie["fake_next_token"]);
    }
  }, []);

  return (
    <Flex>
      <Button onClick={handleResponse}>Call</Button>
    </Flex>
  );
}
