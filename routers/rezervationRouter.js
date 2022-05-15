const connection = require("../database.js");
const mysql = require("mysql");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM rezervare", (err, results) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            messages: results,
        });
    });
});

router.post("/", (req, res) => {
    const { Name, TipMasa, NumarPersoane, DataRezervare, OraRezervare, CerinteSpeciale } = req.body;

    if (!Name || !TipMasa || !NumarPersoane || !DataRezervare || !OraRezervare || !CerinteSpeciale) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `INSERT INTO rezervare (Name, TipMasa, NumarPersoane, DataRezervare, OraRezervare, CerinteSpeciale ) VALUES (${mysql.escape(
        Name
        )}, ${mysql.escape(TipMasa)}, ${mysql.escape(NumarPersoane)}, ${mysql.escape(
        DataRezervare
        )},${mysql.escape(OraRezervare)}, ${mysql.escape(CerinteSpeciale)})`;

    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            data: results,
        });
    });
});


router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `SELECT * FROM rezervare WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Rezervation nu a fost gasita.");
        }
        return res.json({
            messages: results,
        });
    }
    );
}
);

// Add delete by id route
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `DELETE FROM rezervare WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Rezervarea nu a fost gasita.");
        }
        return res.json({
            results,
        });
    }
    );
}
);

// Add update by id route
router.put("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const { Name, TipMasa, NumarPersoane, DataRezervare, OraRezervare, CerinteSpeciale } = req.body;

    if (!Name || !TipMasa || !NumarPersoane || !DataRezervare || !OraRezervare || !CerinteSpeciale) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }

    const queryString = `UPDATE rezervare SET Name = ${mysql.escape(
        Name
        )}, TipMasa = ${mysql.escape(TipMasa)}, NumarPersoane = ${mysql.escape(NumarPersoane)}, DataRezervare = ${mysql.escape(
        DataRezervare
        )},OraRezervare = ${mysql.escape(OraRezervare)}, CerinteSpeciale = ${mysql.escape(CerinteSpeciale)} WHERE entryID = ${mysql.escape(id)}`;

    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            data: results,
        });
    });

}
);

module.exports = router;