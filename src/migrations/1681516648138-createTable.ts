import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1681516648138 implements MigrationInterface {
    name = 'CreateTable1681516648138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying(15) NOT NULL`);
    }

}
