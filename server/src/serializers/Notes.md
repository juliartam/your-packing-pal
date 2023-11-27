What is the purpose of a serializer?
https://learn.launchacademy.com/teams/boston-42/curricula/on-campus-boston-42/lesson_groups/week_6:_database_associations_in_monolith_apps/lessons/database-associations-overview

Answer!
The purpose of a serializer is to remove or add information from a piece of data before it is served back to the client (React in our case). This is used to remove any secure information so it is not exposed on the frontend unnecessarily. We can also use a serializer to add information (like related records) to a data set that will be provided in a response body. Often times it can be used to handle the querying for related records for the object that is to be returned. We use serializers to ensure we are only providing our React frontend with nothing more than it needs to render and work for our feature.

ideas: 
join table:

outfit season

join: weather type & clothing 

for: season clothing items table

