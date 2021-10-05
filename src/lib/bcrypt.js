const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt); // el objeto hash yo contiene la contraseña ya encriptada
    return hash;
};

helpers.matchPassword = async (password, savedPassword) => { //contiene la contraseña que da el usuario y la que se encuentra en la base de datos para compararlas
    try {
        return await bcrypt.compare(password, savedPassword); // aqui es donde se compara la contraseña
    } catch (error) {
        console.log(error);
    };
};

module.exports = helpers;