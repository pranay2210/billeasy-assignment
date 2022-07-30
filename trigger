CREATE OR REPLACE FUNCTION update_department() RETURNS TRIGGER AS $$
    BEGIN
	 IF (TG_OP = 'INSERT') THEN
		UPDATE employee.department SET total = total + 1 WHERE deptname = NEW.department;
		RETURN NEW;
	 ELSEIF (TG_OP = 'DELETE') THEN
		UPDATE employee.department SET total = total - 1 WHERE deptname = NEW.department;
		RETURN NEW;	
	 END IF;
	END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER emp_audit
AFTER INSERT OR DELETE ON employee.employee
    FOR EACH ROW EXECUTE FUNCTION update_department();