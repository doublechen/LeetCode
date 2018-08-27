/**
    Write a SQL query to find all numbers that appear at least three times consecutively.

    +----+-----+
    | Id | Num |
    +----+-----+
    | 1  |  1  |
    | 2  |  1  |
    | 3  |  1  |
    | 4  |  2  |
    | 5  |  1  |
    | 6  |  2  |
    | 7  |  2  |
    +----+-----+
    For example, given the above Logs table, 1 is the only number that appears consecutively for at least three times.

    +-----------------+
    | ConsecutiveNums |
    +-----------------+
    | 1               |
    +-----------------+

    https://leetcode-cn.com/submissions/detail/6126782/
 */

select Num as ConsecutiveNums from (select Num,(@rownum := @rownum + 1) as rownum,
    (if(@rownum = 1 or @lastNum != Num, @sumcount := 1, @sumcount := @sumcount + 1)) as sumcount,(@lastNum := Num) as lastNum,(@sumcount) as sc
from Logs,(select (@rownum := 0)) b,(select (@sumcount := 1)) c,(select (@lastNum := null)) d) e where sumcount >= 3 group by Num;