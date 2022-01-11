import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const user = [
    { id: "1", name: "higor allan", password: "123" },
    { id: "2", name: "nath pink", password: "123" },
  ];

  res.json(user);
};

export default handler;
