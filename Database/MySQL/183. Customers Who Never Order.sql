# Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.
# 
# Table: Customers.
# 
# +----+-------+
# | Id | Name  |
# +----+-------+
# | 1  | Joe   |
# | 2  | Henry |
# | 3  | Sam   |
# | 4  | Max   |
# +----+-------+
# Table: Orders.
# 
# +----+------------+
# | Id | CustomerId |
# +----+------------+
# | 1  | 3          |
# | 2  | 1          |
# +----+------------+
# Using the above tables as example, return the following:
# 
# +-----------+
# | Customers |
# +-----------+
# | Henry     |
# | Max       |
# +-----------+
# 
# 
# Write your MySQL query statement below

# https://leetcode-cn.com/submissions/detail/2954252/
select Name as Customers from Customers left join Orders on Customers.Id = Orders.CustomerId where CustomerId is null

# https://leetcode-cn.com/submissions/detail/2954365/
select Name as Customers from Customers where Id not in (select distinct CustomerId from Orders)

