const dotenv = require('dotenv');
const path = require('path');

const env = process.argv[2] || '.env.development';
dotenv.config({ path: path.resolve(__dirname, '../../', env) });

console.log(`Текущий режим приложения: ${process.env.MODE}`);