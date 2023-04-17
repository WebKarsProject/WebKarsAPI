import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1681757798816 implements MigrationInterface {
    name = 'CreateTable1681757798816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "year" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "year" character varying NOT NULL`);
    }

}
