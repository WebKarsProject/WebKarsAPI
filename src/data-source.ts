import { DataSource } from 'typeorm'
import 'dotenv/config'
import User from './entities/user'
import Vehicle from './entities/vehicle'
import Address from './entities/address'
import Image from './entities/image'
import Comment from './entities/comments'
import { Initial1682600983342 } from './migrations/1682600983342-initial'
import 'reflect-metadata'

const AppDataSource = new DataSource(
  process.env.NODE_ENV === 'production'
    ? {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: false,
        entities: [User, Vehicle, Address, Image, Comment],
        migrations: [Initial1682600983342]
      }
    : {
        type: 'postgres',
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [User, Vehicle, Address, Image, Comment],
        migrations: [Initial1682600983342]
      }
)

export default AppDataSource
