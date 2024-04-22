const http = require('http');
const server = http.createServer((req, res) => {
// Handle incoming HTTP request 
if (req.url === '/') {
// If the request is for the root URL, send a basic response 
res.writeHead(200, { 'Content-Type': 'text/plain' }); 
res.end('Hello, world!');
} else if (req.url === '/execute') {
// If the request is for /execute, execute some JavaScript code and send the result as the response
const result = executeCode();
res.writeHead(200, { 'Content-Type': 'text/plain' }); 
res.end(result);
} 
else 
{
// For any other request, send a 404 Not Found response 
res.writeHead(404, { 'Content-Type': 'text/plain' }); 
res.end('Not found');
}
});

function executeCode() {
// Define some JavaScript code to execute 
const code = `function add(a, b) 
{ 
    return a + b;
}
const result = add(2, 3); 
return 'The result is ' + result;
`;
// Use the eval() function to execute the code 
const result = eval(code);
return result;
}
const port = 3000; 
server.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});