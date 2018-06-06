# Given a Weather table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.
# 
# +---------+------------------+------------------+
# | Id(INT) | RecordDate(DATE) | Temperature(INT) |
# +---------+------------------+------------------+
# |       1 |       2015-01-01 |               10 |
# |       2 |       2015-01-02 |               25 |
# |       3 |       2015-01-03 |               20 |
# |       4 |       2015-01-04 |               30 |
# +---------+------------------+------------------+
# For example, return the following Ids for the above Weather table:
# 
# +----+
# | Id |
# +----+
# |  2 |
# |  4 |
# +----+
# 
# Write your MySQL query statement below

# https://leetcode-cn.com/submissions/detail/2958865/

select id from Weather left join (select Temperature as ltemp, date_add(RecordDate, interval 1 day) as ld from Weather ) as w on Weather.RecordDate = w.ld where Temperature > ltemp;
