//notion接口太慢，弃用
import { Client } from "@notionhq/client";

const auth = process.env.NOTION_ACCESS_TOKEN;

const database = process.env.NOTION_DATABASE_QUESTION_ID ?? "";

type Products = any;

export default class NotionService {
  client: Client;

  constructor() {
    this.client = new Client({ auth });
  }

  async query(): Promise<Products[]> {
    const response = await this.client.databases.query({
      database_id: database,
    });

    return response.results;
  }
}