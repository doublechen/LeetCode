# The Employee table holds all employees. Every employee has an Id, and there is also a column for the department Id.
# 
# +----+-------+--------+--------------+
# | Id | Name  | Salary | DepartmentId |
# +----+-------+--------+--------------+
# | 1  | Joe   | 70000  | 1            |
# | 2  | Henry | 80000  | 2            |
# | 3  | Sam   | 60000  | 2            |
# | 4  | Max   | 90000  | 1            |
# | 5  | Janet | 69000  | 1            |
# | 6  | Randy | 85000  | 1            |
# +----+-------+--------+--------------+
# The Department table holds all departments of the company.
# 
# +----+----------+
# | Id | Name     |
# +----+----------+
# | 1  | IT       |
# | 2  | Sales    |
# +----+----------+
# Write a SQL query to find employees who earn the top three salaries in each of the department. For the above tables, your SQL query should return the following rows.
# 
# +------------+----------+--------+
# | Department | Employee | Salary |
# +------------+----------+--------+
# | IT         | Max      | 90000  |
# | IT         | Randy    | 85000  |
# | IT         | Joe      | 70000  |
# | Sales      | Henry    | 80000  |
# | Sales      | Sam      | 60000  |
# +------------+----------+--------+
# 
# 
# https://leetcode-cn.com/submissions/detail/8132433/

# Write your MySQL query statement below
select Department, Employee, Salary from (
    select (
        case
            when Department = @lastdepartment then 
                case when Salary = @lastsalary then @rank
                     else @rank := @rank + 1
                end  
            else @rank := 1
        end ) as Rank,(@lastdepartment := Department) as Department, Employee, (@lastsalary := Salary) as Salary from (
        select D.Name as Department, E.Name as Employee, E.Salary as Salary 
            from `Employee` E,`Department` D
            where E.`DepartmentId` = D.`Id` and D.Id is not null 
            order by Department,Salary desc
    ) b
) c,(select @rank := 0) d where Rank <= 3

