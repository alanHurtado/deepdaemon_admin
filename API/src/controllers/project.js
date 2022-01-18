
const { response } = require('express');
const mysqlConnection = require('../database');
const multer = require('multer');
const path = require('path');

// const diskstorage = multer.diskStorage({
//   destination: path.join(__dirname, '../images'),
//   filename: (req, front_img, cb) => {
//       cb(null, 'project' + Date.now() + front_img.originalname)
//   }
// })

// const fileUpload = multer({
//   storage: diskstorage
// }).single('frontImg')

//obtener todos los datos de todas las school
const viewAllProject = (req, res = response ) => {
    mysqlConnection.query('SELECT * FROM project', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
}


  //Insertar Career
const insertProject = (req, res = response ) => {
    // console.log(req.front_img);
    const {id, name, descr, impact, front_img, modal_media, modal_type, link, idTech} = req.body;
    console.log(id, name, descr, impact, front_img, modal_media, modal_type, link, idTech);
    const query = `
        CALL ProjectAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, descr, impact, 
                                    front_img, modal_media, modal_type, link, idTech],
                                    (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Project Saved'});
      } else {
        console.log(err);
      }
    });
  
  }
  //Editar Project
  const updateProject = (req, res) => {
    const {id, name, descr, impact, front_img, modal_media, modal_type, link, idTech} = req.body;
    console.log(id, name, descr, impact, front_img, modal_media, modal_type, link, idTech);
    const query = `
        CALL ProjectAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
      mysqlConnection.query(query, [id, name, descr, impact, 
                                    front_img, modal_media, modal_type, link, idTech],
                                    (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Project Edit Saved'});
      } else {
        console.log(err);
      }
    });
  
  }

  //Eliminar Project
  const deleteProject = (req, res=response) => {
    const { id } = req.body;
    mysqlConnection.query('DELETE FROM project WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Project Deleted'});
      } else {
        console.log(err);
      }
    });
  }




  



module.exports = {
    viewAllProject,
    insertProject,
    updateProject,
    deleteProject
}