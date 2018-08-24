# Write a SQL query to get the nth highest salary from the Employee table.
# 
# +----+--------+
# | Id | Salary |
# +----+--------+
# | 1  | 100    |
# | 2  | 200    |
# | 3  | 300    |
# +----+--------+
# For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.
# 
# +------------------------+
# | getNthHighestSalary(2) |
# +------------------------+
# | 200                    |
# +------------------------+
# https://leetcode-cn.com/submissions/detail/6019951/

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE m int;
  SET m = N - 1;
  RETURN (
      select Salary from (select distinct(Salary) from Employee order by Salary desc limit N) as topSalarys limit m,1
  );
END