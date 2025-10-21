import type { MigrationInterface, QueryRunner } from "typeorm";

export class RenamePrecioToPrice1697890000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "moto" RENAME COLUMN "precio" TO "price"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "moto" RENAME COLUMN "price" TO "precio"`);
    }
}