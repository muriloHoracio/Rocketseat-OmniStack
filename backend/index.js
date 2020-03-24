const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        name: 'Murilo Horacio',
        surname: 'Pereira da Cruz'
    })
});

app.listen(3333);
