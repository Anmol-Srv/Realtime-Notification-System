const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGM0MDM1NzdjMGU2YjI4NjRkZjc5MCIsImlhdCI6MTcyMDQ2NzU5OSwiZXhwIjoxNzIwNDcxMTk5fQ._6CTVCg5V66yovkWFJaa18zOYVqNXNoBDR_yQ5cEsx4';
const decoded = jwt.decode(token);

console.log(decoded.id); // This is your user ID
