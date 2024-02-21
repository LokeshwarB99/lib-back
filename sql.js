const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./empdb.db");

const emptable = `
    CREATE TABLE IF NOT EXISTS library (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        author TEXT,
        subject TEXT,
        published TEXT
    )
`;

// Execute the SQL query to create the table
db.run(emptable, (err) => {
  if (err) {
    console.error("Error creating courses table:", err.message);
  } else {
    console.log("success");
  }
});


db.run(
  `INSERT INTO library (name, author, subject, published) VALUES 
  ('The Catcher in the Rye', 'J.D. Salinger', 'Coming-of-Age', '06/02/2022'),
  ('Animal Farm', 'George Orwell', 'Political Satire', '07/02/2022'),
  ('Jane Eyre', 'Charlotte Bronte', 'Gothic Romance', '08/02/2022'),
  ('Lord of the Flies', 'William Golding', 'Adventure', '09/02/2022'),
  ('Wuthering Heights', 'Emily Bronte', 'Gothic Romance', '10/02/2022'),
  ('The Picture of Dorian Gray', 'Oscar Wilde', 'Gothic Fiction', '11/02/2022'),
  ('Frankenstein', 'Mary Shelley', 'Gothic Horror', '12/02/2022'),
  ('Brave New World', 'Aldous Huxley', 'Dystopian Fiction', '13/02/2022'),
  ('1984', 'George Orwell', 'Political Fiction', '14/02/2022'),
  ('Fahrenheit 451', 'Ray Bradbury', 'Science Fiction', '15/02/2022'),
  ('Catch-22', 'Joseph Heller', 'Satire', '16/02/2022'),
  ('The Grapes of Wrath', 'John Steinbeck', 'Social Commentary', '17/02/2022'),
  ('The Scarlet Letter', 'Nathaniel Hawthorne', 'Historical Fiction', '18/02/2022'),
  ('Moby-Dick', 'Herman Melville', 'Adventure', '19/02/2022'),
  ('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 'Magical Realism', '20/02/2022'),
  ('The Road', 'Cormac McCarthy', 'Post-Apocalyptic', '21/02/2022'),
  ('The Count of Monte Cristo', 'Alexandre Dumas', 'Adventure', '22/02/2022'),
  ('Don Quixote', 'Miguel de Cervantes', 'Adventure', '23/02/2022'),
  ('Crime and Punishment', 'Fyodor Dostoevsky', 'Psychological Fiction', '24/02/2022'),
  ('Anna Karenina', 'Leo Tolstoy', 'Historical Fiction', '25/02/2022')
  `,
  (err) => {
    if (err) {
      console.error("Error inserting rows:", err.message);
    } else {
      console.log("Rows inserted successfully.");
    }
  }
);

