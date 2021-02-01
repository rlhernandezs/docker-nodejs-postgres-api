module.exports.select = function (parametro1) { 
  return `SELECT * FROM beneficiencia.agenda WHERE agenda_id = ${parametro1} ORDER BY agenda_id ASC`;
};
