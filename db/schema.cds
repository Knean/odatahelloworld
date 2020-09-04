using{cuid} from '@sap/cds/common';
namespace employeeDefinition;
entity Employees:cuid{
//key ID : Integer;
    name: String;
    al_salary:Integer;
    salary: Integer;
    al_srcop: Integer;
    al_paye_credits: Integer;
    al_pension_percent: Integer;
}
