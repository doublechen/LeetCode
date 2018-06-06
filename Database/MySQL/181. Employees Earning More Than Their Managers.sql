# The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.
# 
# +----+-------+--------+-----------+
# | Id | Name  | Salary | ManagerId |
# +----+-------+--------+-----------+
# | 1  | Joe   | 70000  | 3         |
# | 2  | Henry | 80000  | 4         |
# | 3  | Sam   | 60000  | NULL      |
# | 4  | Max   | 90000  | NULL      |
# +----+-------+--------+-----------+
# Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.
# 
# +----------+
# | Employee |
# +----------+
# | Joe      |
# +----------+
# https://leetcode-cn.com/submissions/detail/2953474/

# Write your MySQL query statement below
select name as Employee from Employee left join ((select Salary as mSalary,id as mid from Employee) as m) on mid = ManagerId where Salary > mSalary;