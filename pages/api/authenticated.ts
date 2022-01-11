import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";

const handle: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(400).json("Method not allowed");
  }
  const { login, password } = req.body;

  if (login == "" || password == "") {
    return res.status(400).json({ error: "Login ou senha invalidos" });
  }

  const token = uuid();

  return res.json({
    user: {
      login,
      date: new Date(),
    },
    token,
  });
};

export default handle;
