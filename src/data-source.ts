<<<<<<< HEAD
import { DataSource } from "typeorm";
import "dotenv/config";
import User from "./entities/user";
import Vehicle from "./entities/vehicle";
import Address from "./entities/address";
import Image from "./entities/image";
import Comment from "./entities/comments";
import { CreateTable1682608222499 } from "./migrations/1682608222499-create-table";
=======
import { DataSource } from 'typeorm';
import 'dotenv/config';
import User from './entities/user';
import Vehicle from './entities/vehicle';
import Address from './entities/address';
import Image from './entities/image';
import Comment from './entities/comments';
import { Initial1683048161799 } from './migrations/1683048161799-initial';
>>>>>>> 9d6eb71d51651c7037b12423c157186d140cf704

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
<<<<<<< HEAD
        entities: ["src/entities/*.ts"],
=======
        entities: ['src/entities/*.ts'],
>>>>>>> 9d6eb71d51651c7037b12423c157186d140cf704
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
<<<<<<< HEAD
        migrations: [CreateTable1682608222499],
=======
        migrations: [Initial1683048161799],
>>>>>>> 9d6eb71d51651c7037b12423c157186d140cf704
      }
);

export default AppDataSource;
