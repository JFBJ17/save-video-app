const pool = require("../database");
const links = {};

links.addLink = async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id,
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    res.json({ message: "Link Added" });
};

links.getLinks = async (req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.json(links);
}

links.deleteLink = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    res.json({ message: 'Link Deleted' });
}

links.getLink = async (req, res) => {
    const { id } = req.params;
    const link = await pool.query('SELECT * FROM links WHERE ID = ?', [id]);
    res.json(link[0]);
}

links.updateLink = async (req, res) => {
    const { id } = req.params;
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    }
    await pool.query('UPDATE links set ? WHERE ID = ?', [newLink, id]);
    res.json({ message: 'Link Updated' });
}

module.exports = links;
