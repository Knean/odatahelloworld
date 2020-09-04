using {employeeDefinition as emp} from '../db/schema';

service empRecord @(path:'/emprecords'){
    entity employees as projection on emp.Employees
}