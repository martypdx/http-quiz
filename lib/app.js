
module.exports = (req, res) => {
    // res.end('time to write the app!');
    const url = parseFloat(req.url, tru);
    const parts = url.pathname.split('/').slice(1);
    selectAll() {
        return client.query(`
            SELECT * FROM penguins
        `)
    };

    selectOne(id) {
        return client.query(`
            SELECT * FROM penguins
            WHERE id = $1;
        `,
        [id]
        ).then(({ rows }) => rows[0]);
    },

};