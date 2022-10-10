# Write your MySQL query statement below
SELECT FirstName, LastName, A.City, A.State
FROM Person P
LEFT JOIN Address A
ON P.PersonId = A.PersonId