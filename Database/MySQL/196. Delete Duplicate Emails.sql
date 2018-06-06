# Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.
# 
# +----+------------------+
# | Id | Email            |
# +----+------------------+
# | 1  | john@example.com |
# | 2  | bob@example.com  |
# | 3  | john@example.com |
# +----+------------------+
# Id is the primary key column for this table.
# For example, after running your query, the above Person table should have the following rows:
# 
# +----+------------------+
# | Id | Email            |
# +----+------------------+
# | 1  | john@example.com |
# | 2  | bob@example.com  |
# +----+------------------+

# Write your MySQL query statement below

# https://leetcode-cn.com/submissions/detail/2955892/ 
delete from Person where Email in (select Email from ((select *,count(*) as cnt from Person group by Email) as e) where e.cnt > 1) and id not in (select Id from  ((select min(id) as id from Person group by Email ) as d)) 