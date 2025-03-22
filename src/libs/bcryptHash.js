const bcrypt = require('bcrypt');

async function hashPasswords() {
    const passwords = Array(13).fill('password123');
    const saltRounds = 10;
    
    console.log('Начало хэширование пароля...');
    
    const results = await Promise.all(
        passwords.map(async (pwd, index) => {
            const start = Date.now();
            const hash = await bcrypt.hash(pwd, saltRounds);
            const time = Date.now() - start;
            return { index: index + 1, time };
        })
    );

    results.forEach(result => {
        console.log(`Пароль ${result.index} захэширован в ${result.time}ms`);
    });

    const avgTime = results.reduce((sum, r) => sum + r.time, 0) / results.length;
    console.log(`Среднее время хэширования: ${avgTime}ms`);
}

hashPasswords();