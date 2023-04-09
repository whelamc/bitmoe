//notion接口太慢，弃用
import type { NextApiRequest, NextApiResponse } from "next";
import NotionServer from "@/lib/NotionServer";

type Data = any;

const notionServer = new NotionServer();

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await notionServer.query();
  return res.json({ data })
}
