
module.exports = (req, res) => {
    // res.end('time to write the app!');
    const url = parseFloat(req.url, tru);
    const parts = url.pathname.split('/').slice(1);
    request.get('/api/penguins') {
        return client.query(`
            
        `)
    };

    selectOne('/api/penguins_id') {
        return client.query(`
           
        `,
        [id]
        ).then(({ rows }) => rows[0]);
    },
    update('/api/penguins._id') {
        return client.query(`
        UPDATE penguins SET
            
        `,
        ).then(({ rows }) => rows[0]);
    },

    request.delete('/api/penguins._id') {
        return client.query(`
            DELETE FROM penguins
            WHERE id = $1;
        `, 
        [id])
            .then(() => null);
    }
};