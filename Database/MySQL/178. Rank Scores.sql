/**
    Write a SQL query to rank scores. If there is a tie between two scores, both should have the same ranking. Note that after a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no "holes" between ranks.

    +----+-------+
    | Id | Score |
    +----+-------+
    | 1  | 3.50  |
    | 2  | 3.65  |
    | 3  | 4.00  |
    | 4  | 3.85  |
    | 5  | 4.00  |
    | 6  | 3.65  |
    +----+-------+
    For example, given the above Scores table, your query should generate the following report (order by highest score):

    +-------+------+
    | Score | Rank |
    +-------+------+
    | 4.00  | 1    |
    | 4.00  | 1    |
    | 3.85  | 2    |
    | 3.65  | 3    |
    | 3.65  | 3    |
    | 3.50  | 4    |
    +-------+------+

    https://leetcode-cn.com/submissions/detail/6122446/
 */

select Scores.Score,Sc.Rank 
from Scores 
left join (
    select Score,(@rownum := @rownum + 1) as Rank 
    from (
        select distinct(Score) 
        from Scores 
        order by Score desc
    ) S,
    (select (@rownum := 0)) b) Sc 
on Scores.Score = Sc.Score 
order by Rank