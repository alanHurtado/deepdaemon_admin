USE deepdaem_web_admin;

DELIMITER $$
USE `deepdaem_web_admin`$$

CREATE PROCEDURE `careerAddOrEdit` (
  IN _id INT,
  IN _short_name VARCHAR(10),
  IN _name VARCHAR(100)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO career (short_name, name)
    VALUES (_short_name, _name);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE career
    SET
    short_name = _short_name,
    name = _name    
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
