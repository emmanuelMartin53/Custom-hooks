const makeString = (length) => {
    let str = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for ( let index = 0; index < length; index++ ) {
      str += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return str;
}

const fakeUsersGenerator = () => {
    const users = [];

    for (let index = 0; index < 10000; index++) {
      users.push({
        id: `${index+1}`,
        name: `${makeString(5)} ${makeString(6)}`,
        username: `${makeString(5)}`,
        email: `${makeString(9)}@gmail.com`,
        address: {
            street: makeString(18),
            suite: makeString(8),
            city: makeString(8),
            zipcode: `${index+1}`
        }
      });
    }
    return users;
}

export default fakeUsersGenerator;
