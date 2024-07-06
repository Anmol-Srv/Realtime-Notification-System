const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODkxMDAxZTQ2ZDg5MGY4NTgyMmQ0NCIsImlhdCI6MTcyMDMwMDMxOSwiZXhwIjoxNzIwMzAzOTE5fQ.IMwAQco-WaiOsI8f7KwrFYLUGmT8gftEQHBfRSomjRs';
const decoded = jwt.decode(token);

console.log(decoded.id); // This is your user ID
