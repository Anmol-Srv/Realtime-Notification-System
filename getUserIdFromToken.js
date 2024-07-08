const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODkxMDAxZTQ2ZDg5MGY4NTgyMmQ0NCIsImlhdCI6MTcyMDQ2NTQ0OSwiZXhwIjoxNzIwNDY5MDQ5fQ.5LQ7EImtPi-lVuleudBhTdjWbhZM-hjZkhSQxGxwzkE';
const decoded = jwt.decode(token);

console.log(decoded.id); // This is your user ID
