const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODkxMDAxZTQ2ZDg5MGY4NTgyMmQ0NCIsImlhdCI6MTcyMDQ0MDg5NCwiZXhwIjoxNzIwNDQ0NDk0fQ.LkyaOTjdkV_tN3aMjudNq9gYvuc0bZXI-IKuayUL4oM';
const decoded = jwt.decode(token);

console.log(decoded.id); // This is your user ID
