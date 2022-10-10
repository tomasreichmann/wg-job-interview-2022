import type { NextApiRequest, NextApiResponse } from "next";
import vehicles from "../../vehicles.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof vehicles>
) {
  setTimeout(() => {
    res.status(200).json(vehicles);
  }, 1000);
}
