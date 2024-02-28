//tengo que pasarlo despues en ingles
export const validation = (input) => {
    let errors = {};
     
    if (!input.name) {
        errors.name = "Debe ingresar un nombre";
    } else if (input.name.length > 10) {
        errors.name = "No puede tener más de 10 caracteres";
    } else if (!/^[a-zA-Z]+$/.test(input.name)) {
        errors.name = "Solo puede contener letras";
    }

    if (!input.image || !isValidURL(input.image)) {
        errors.image = "Debe de ingresar una URL de una imagen";
    }

    if (!input.life || isNaN(input.life) || input.life <= 0 || input.life > 255) {
        errors.life = "Debe ser un numero mayor a 0 y menor a 255";
    }

    if (!input.stroke || isNaN(input.stroke) || input.stroke <= 0 || input.stroke > 255) {
        errors.stroke = "Debe ser un numero  mayor a 0 y menor a 255";
    }

    if (!input.defending || isNaN(input.defending) || input.defending <= 0 || input.defending > 255) {
        errors.defending = "Debe ser un numero  mayor a 0 y menor a 255";
    }

    if (!input.speed  || isNaN(input.speed) || input.speed <= 0 || input.speed > 255) {
        errors.speed = "Debe ser un numero  mayor a 0 y menor a 255";
    }

    if (!input.height || isNaN(input.height) || input.height <= 0 || input.height > 3000) {
        errors.height = "Debe ser un numero  mayor a 0 y menor a 255";
    }   

    if (!input.weight || isNaN(input.weight) || input.weight <= 0 || input.weight > 3000) {
        errors.weight = "Debe ser un numero  mayor a 0 y menor a 255";
    }   
    console.log(input,"en vali")
    if (!input.type || input.type.length < 0) {
        errors.type = "Debes elegir al menos 1 tipo de Pokemon";
    }
    
    return errors;
};

    const isValidURL = (url) => {
        const urlPattern = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
        return urlPattern.test(url);
    };
      

export default validation;

