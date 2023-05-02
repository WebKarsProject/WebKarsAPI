import { DataSource, DataSourceOptions } from 'typeorm'
import 'dotenv/config'
import User from './entities/user'
import Vehicle from './entities/vehicle'
import Address from './entities/address'
import Image from './entities/image'
import Comment from './entities/comments'
import { Initial1682600983342 } from './migrations/1682600983342-initial'
import 'reflect-metadata'
import path from 'node:path'

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{js,ts}')
  const migrationsPath: string = path.join(__dirname, './migrations/**.{js,ts}')
  if (process.env.NODE_ENV === 'production') {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath]
    }
  }

  return {
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
}

const dataSourceConfig = setDataSourceConfig()

const AppDataSource = new DataSource(dataSourceConfig)

export default AppDataSource
