let axios = require('axios');
let prompt = require('prompt-sync')();
let name = prompt('Please give your name: ');
let ageByName = async (name) => {
    try {
        let res = await axios.get(`https://api.agify.io/?name=${name}`);
        console.log('Your age according to your name is ' + res.data.age);
    } catch (error) {
        console.error('Error fetching age:', error.message);
    } finally {
        console.log('Async function execution completed.');
    }
};
ageByName(name);