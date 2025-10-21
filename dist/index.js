"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const dbContext_1 = require("./db/dbContext");
async function main() {
    try {
        await dbContext_1.dbContext.initialize();
        console.log('Data Source has been initialized!');
        console.log('Connected to:', dbContext_1.dbContext.options.database);
        app_1.default.listen(3000);
        console.log('Server is running on http://localhost:3000 ✅');
    }
    catch (error) {
        console.error('Error during Data Source initialization', error);
    }
}
main();
