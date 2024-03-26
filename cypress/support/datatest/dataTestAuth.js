function generateRandomName(){
	const number = Math.floor(Math.random() * 900) + 100;
	return "TOKO"+number;
}

const randomName = generateRandomName();

module.exports = {
    datatestPositive: {
        email: 'rangga@gmail.com',
        password: '12345',
        namatoko : randomName
    },

    datatestNegative: {
        email: 'test@gmail.com',
        password: '1'
    }
    
}