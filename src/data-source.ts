import { DataSource } from "typeorm";
import "dotenv/config";
import User from "./entities/user";
import Vehicle from "./entities/vehicle";
import Address from "./entities/address";
import Image from "./entities/image";
import Comment from "./entities/comments";
import { CreateTable1681519586570 } from "./migrations/1681519586570-createTable";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [User, Vehicle, Address, Image, Comment],
        migrations: [CreateTable1681519586570],
      }
);

export default AppDataSource;
