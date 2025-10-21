"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenamePrecioToPrice1697890000000 = void 0;
class RenamePrecioToPrice1697890000000 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "moto" RENAME COLUMN "precio" TO "price"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "moto" RENAME COLUMN "price" TO "precio"`);
    }
}
exports.RenamePrecioToPrice1697890000000 = RenamePrecioToPrice1697890000000;
