function getCreateUserResponseDTO(user) {
    return {
        message: 'Success create user',
        name: user.name,
        email: user.email
    }
};

function getUpdateUserResponseDTO(user) {
    return {
        message: 'User succesfully updated',
        name: user.name,
        email: user.email
    }
};


module.exports = {
    getCreateUserResponseDTO,
    getUpdateUserResponseDTO
}