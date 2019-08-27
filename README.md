# Share-Thoughts

An app where we have users and they can add posts on the wall

# User Stories

1. As a user when I enter the site for the first time I can find a helpful landing page.

2. As a user if I already have an account I can easily login to my account.

3. As a user if I don't have an account I should find a link to create a new one.

4. If I had already logged in to the website the next time when I visit it, I should be logged in.

5. As a user in the website I should be able to see all the posts that other people have posted

6. As a user I can make my own posts and add them to the wall

7. As a user I need to have a profile page which contains my info and all of my posts

# The Main Look Of The WebApp

We wanted to have a bit of an overview about how the user experience might look like
![Figma Prototype](./public/images/main-look.jpg 'Figma Prototype')

# The Database Schema

We draw our schema to see how the tables would interact with each others and how our features will connect or work

![DB Schema](./public/images/db.png 'Database Schema')

## The Schema explained

### Users Table:

Here we store all the data associated with the user like his name, photo, email, etc

### Posts Table:

Here we have all the data for all the posts on the website, which contains the user who posted it using the user id(in this way we connect the users with their posts)

### Comments Table:

Here we have data about the comments, and people who wrote them using the user id and the post which contains the comment using the post id

## All the tools we used in our app

- HTML5
- CSS3
- JS
- Node JS
- Express JS
- Postgresql
- JWT
- Travis CI
- MVC
- TDD
