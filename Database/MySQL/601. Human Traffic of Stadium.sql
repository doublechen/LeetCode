/**
    X city built a new stadium, each day many people visit it and the stats are saved as these columns: id, date, people

    Please write a query to display the records which have 3 or more consecutive rows and the amount of people more than 100(inclusive).

    For example, the table stadium:
    +------+------------+-----------+
    | id   | date       | people    |
    +------+------------+-----------+
    | 1    | 2017-01-01 | 10        |
    | 2    | 2017-01-02 | 109       |
    | 3    | 2017-01-03 | 150       |
    | 4    | 2017-01-04 | 99        |
    | 5    | 2017-01-05 | 145       |
    | 6    | 2017-01-06 | 1455      |
    | 7    | 2017-01-07 | 199       |
    | 8    | 2017-01-08 | 188       |
    +------+------------+-----------+
    For the sample data above, the output is:

    +------+------------+-----------+
    | id   | date       | people    |
    +------+------------+-----------+
    | 5    | 2017-01-05 | 145       |
    | 6    | 2017-01-06 | 1455      |
    | 7    | 2017-01-07 | 199       |
    | 8    | 2017-01-08 | 188       |
    +------+------------+-----------+
    Note:
    Each day only have one row record, and the dates are increasing with id increasing.

    https://leetcode-cn.com/submissions/detail/6130532/
 */

select id,date,people 
from(
    select *, 
        if( (lastdays >= 3 ) or (@yesterdayishot = 1 and lastdays > 0), @ishotday := 1, @ishotday := 0) as ishotday,
        (@yesterdayishot := @ishotday) as yesterdayishot
    from (
        select * 
        from (
            select stadium.*,
                if(people >= 100, @lastdays := @lastdays + 1, @lastdays := 0) as lastdays
            from 
                stadium,
                (select(@lastdays := 0)) b
            ) c
        order by date desc) d,
        (select(@ishotday := 0)) e,
        (select(@yesterdayishot := 0)) f
    ) g
where ishotday = 1 
order by id ;