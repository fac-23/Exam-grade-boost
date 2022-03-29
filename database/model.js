import db from "../database/connection";

//adds new user to user table, returning user id, username and email
export function createUser(username, email, hashedPassword) {
  const INSERT_USER = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email`;
  return db
    .query(INSERT_USER, [username, email, hashedPassword])
    .then((result) => {
      return result.rows[0];
    });
}

//adds new session to sessions table and returns sid
export function createSession(sid, data) {
  const CREATE_SESSION = `INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid`;
  return db.query(CREATE_SESSION, [sid, data]).then((result) => {
    return result.rows[0].sid;
  });
}

//returns all data from user table including password
export function getUser(email) {
  const GET_USER = `SELECT * FROM users WHERE email = $1`;
  return db.query(GET_USER, [email]).then((result) => {
    return result.rows;
  });
}

//returns username and email stored for a specified user_id
export function getContactInfo(user_id) {
  const GET_USER = `SELECT username, email FROM users WHERE id = $1`;
  return db.query(GET_USER, [user_id]).then((result) => {
    return result.rows[0];
  });
}

//deletes a session from sessions table with correspinding sid
export function deleteCurrSession(sid) {
  const DELETE_SESSION = `
    DELETE FROM sessions WHERE sid = $1`;
  return db.query(DELETE_SESSION, [sid]);
}

//returns data saved in saveSession function
//in most basic form this an object shaped like this: {user_id: 1}
//used to obtain user id when only the sid is known on the client
export function getSessionInfo(sid) {
  const CURRENT_SESSION = `
    SELECT data FROM sessions WHERE sid = $1`;
  return db
    .query(CURRENT_SESSION, [sid])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => console.log(error));
}

export function storeResetToken(email, token) {
  const STORE_TOKEN = `
  INSERT INTO resetrecord (email, token) VALUES ($1,$2)
  `;
  return db
    .query(STORE_TOKEN, [email, token])
    .catch((error) => console.log(error));
}

export function retrieveResetToken(email) {
  const RESET_TOKEN = `
  SELECT token FROM resetrecord WHERE email = $1`;
  return db
    .query(RESET_TOKEN, [email])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => console.log(error));
}

export function clearResetTokens() {
  const CLEAR_TOKENS = `DELETE from resetrecord`;
  return db.query(CLEAR_TOKENS).then((result) => {
    return result.rows[0];
  });
}

export function updatePassword(hashedPassword, email) {
  const UPDATE_PASSWORD = `UPDATE users SET password = $1 WHERE email = $2 RETURNING id`;
  return db
    .query(UPDATE_PASSWORD, [hashedPassword, email])
    .then(() => {
      console.log("password updated");
      return true;
    })
    .catch((error) => console.log(error));
}

export function createNewEssay(user_id, question) {
  const INSERT_ESSAY = `INSERT INTO essays (user_id, question) VALUES ($1, $2) RETURNING id`;
  return db.query(INSERT_ESSAY, [user_id, question]).then((result) => {
    return result.rows[0];
  });
}

export function renameEssay(question, user_id) {
  const RENAME_ESSAY = `UPDATE essays SET question = $1 WHERE user_id = $2 RETURNING id`;
  return db
    .query(RENAME_ESSAY, [question, user_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => console.log(error));
}

export function getEssayInfo(essayId) {
  const GET_ESSAY = `SELECT * FROM essays WHERE id = $1`;
  return db.query(GET_ESSAY, [essayId]).then((result) => {
    return result.rows[0];
  });
}

export function getAllEssays(user_id) {
  const SELECT_ESSAY_INFO = `SELECT * FROM essays WHERE user_id = $1`;
  return db.query(SELECT_ESSAY_INFO, [user_id]).then((result) => {
    return result.rows;
  });
}

export function saveSpiderDiagram(planningText, essayId) {
  const UPDATE_SPIDER_DIAGRAM = `UPDATE essays SET spider_1 = $1 WHERE id = $2 RETURNING id`;
  return db
    .query(UPDATE_SPIDER_DIAGRAM, [planningText, essayId])
    .then((result) => {
      return result.rows[0];
    });
}

export function saveIntro(introText, essayId) {
  const UPDATE_INTRO = `UPDATE essays SET introduction = $1 WHERE id = $2 RETURNING id`;
  return db.query(UPDATE_INTRO, [introText, essayId]).then((result) => {
    return result.rows[0];
  });
}

export function saveBody1(body1Text, essayId) {
  const UPDATE_BODY1 = `UPDATE essays SET body_1 = $1 WHERE id = $2 RETURNING id`;
  return db.query(UPDATE_BODY1, [body1Text, essayId]).then((result) => {
    return result.rows[0];
  });
}

export function saveBody2(body1Text, essayId) {
  const UPDATE_BODY2 = `UPDATE essays SET body_2 = $1 WHERE id = $2 RETURNING id`;
  return db.query(UPDATE_BODY2, [body1Text, essayId]).then((result) => {
    return result.rows[0];
  });
}

export function saveBody3(body1Text, essayId) {
  const UPDATE_BODY3 = `UPDATE essays SET body_3 = $1 WHERE id = $2 RETURNING id`;
  return db.query(UPDATE_BODY3, [body1Text, essayId]).then((result) => {
    return result.rows[0];
  });
}

export function saveConclusion(conclusionText, essayId) {
  const UPDATE_CONCLUSION = `UPDATE essays SET conclusion = $1 WHERE id = $2 RETURNING id`;
  return db
    .query(UPDATE_CONCLUSION, [conclusionText, essayId])
    .then((result) => {
      return result.rows[0];
    });
}
