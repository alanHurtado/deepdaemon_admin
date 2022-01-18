USE deepdaem_web_admin;

DELIMITER $$
USE `deepdaem_web_admin`$$

CREATE PROCEDURE `memberAddOrEdit` (
  IN _idMember INT,
  IN _name VARCHAR(25),
  IN _lastname VARCHAR(25),
  IN _password VARCHAR(25),
  IN _token VARCHAR(100),
  IN _linkedin VARCHAR(100),
  IN _email VARCHAR(50),
  IN _short_desc VARCHAR(255),
  IN _long_desc TEXT,
  IN _status ENUM('current', 'graduate', 'leader', 'out'),
  IN _photo_filename varchar(50),
  IN _ss TINYINT(1),
  IN _idGrade INT,
  IN _idSchool INT,
  IN _idCareer INT,
  IN _type ENUM('bachelor', 'masters', 'phd', 'work'),
  IN _start DATE,
  IN _end DATE
)
BEGIN 
  IF _idMember = 0 THEN
    INSERT INTO member (name, lastname, password, token, linkedin, email, short_desc,
                          long_desc, status, photo_filename, ss)
    VALUES (_name, _lastname, _password, _token, _linkedin, _email, _short_desc,
             _long_desc, _status, _photo_filename, _ss );

    SET _idMember = LAST_INSERT_ID();
    
    INSERT INTO grade (id_member, id_school, id_career, type ,start, end)
    VALUES (_idMember, _idSchool, _idCareer, _type, _start, _end);

    SET _idGrade = LAST_INSERT_ID();


  ELSE
    UPDATE member
    SET
    name = _name,
    lastname = _lastname,
    password = _password,
    token = _token,
    linkedin = _linkedin,
    email = _email,
    short_desc = _short_desc,
    long_desc = _long_desc,
    status = _status,
    photo_filename = _photo_filename,
    ss = _ss
    WHERE id = _idMember;
  END IF;

  SELECT _idMember AS 'id';
END
