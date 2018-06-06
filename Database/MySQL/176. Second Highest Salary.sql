# Write a SQL query to get the second highest salary from the Employee table.
# 
# +----+--------+
# | Id | Salary |
# +----+--------+
# | 1  | 100    |
# | 2  | 200    |
# | 3  | 300    |
# +----+--------+
# For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.
# 
# +---------------------+
# | SecondHighestSalary |
# +---------------------+
# | 200                 |
# +---------------------+

# Write your MySQL query statement below
# 
# https://leetcode-cn.com/submissions/detail/2956947/
select max(Salary) as SecondHighestSalary from Employee where id not in (select id from Employee where Salary in  (select max(Salary) from Employee) )