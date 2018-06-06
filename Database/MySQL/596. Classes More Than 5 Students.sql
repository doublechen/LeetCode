# There is a table courses with columns: student and class
# 
# Please list out all classes which have more than or equal to 5 students.
# 
# For example, the table:
# 
# +---------+------------+
# | student | class      |
# +---------+------------+
# | A       | Math       |
# | B       | English    |
# | C       | Math       |
# | D       | Biology    |
# | E       | Math       |
# | F       | Computer   |
# | G       | Math       |
# | H       | Math       |
# | I       | Math       |
# +---------+------------+
# Should output:
# 
# +---------+
# | class   |
# +---------+
# | Math    |
# +---------+
# Note:
# The students should not be counted duplicate in each course.
# 
# Write your MySQL query statement below

# https://leetcode-cn.com/submissions/detail/2957700/
select class from (select count(*) as cnt,class from (select distinct student,class from courses) as dc group by class) as c where c.cnt >= 5