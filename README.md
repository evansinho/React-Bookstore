## Milestone 3

In this milestone, we performed the following actions:

- Make the BooksForm component stateful
    - The component should store the title and the book category in its own state
    - The component should implement the handleChange method which reacts to the user typing to input a name or to changes in the category select
    - Each change to the form should modify the component’s state
    - The component should implement handleSubmit which will save the new book in the Redux store and resets the component’s state

- Connect the REMOVE_BOOK action to the component
    - Add a new table column to the BooksList component. It should render the “Remove Book” button next to each book
    - Implement the handleRemoveBook method which accepts a book as an argument and removes it from the Redux store


## Tools To Work With

- Node.js
- React
- React-DOM
- React-Create-App
- npm
- React
- Redux
- React-Redux
- Prop-Types
- Heroku

## Deployment

- ``` heroku create $APP_NAME --buildpack mars/create-react-app```
- ``` git push heroku milestone1:master ```
- ` heroku open `

## Live Demo

[Live Demo Link](https://shrouded-brushlands-72459.herokuapp.com/)



## Getting Started

To get a local copy up and running follow these simple example steps.

1. ``` git clone https://github.com/evansinho/React-Bookstore.git ```
2. ``` cd React-Bookstore ```
3. ``` git checkout  start```
4. ``` yarn i ```
5. ``` yarn start ```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Prerequisites

- A modern browser

## Authors

👤 **Evanson Igiri**

- Github: [@evansinho](https://github.com/evansinho)
- Twitter: [@iamevanson](https://twitter.com/iamevanson)
- Linkedin: [Evanson Igiri](https://linkedin.com/in/evanson-igiri)
- Email: (igiri.evanson@gmail.com)

👤 **Daniel Larbi Addo**

- Github: [@addod19](https://github.com/addod19)
- Twitter: [@DanielLarbiAdd1](https://twitter.com/DanielLarbiAdd1)
- Linkedin: [Daniel Larbi Addo](https://linkedin.com/in/daniel-larbi-addo/)
- Email: (addodaniellarbi@gmail.com)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/evansinho/React-Bookstore/issues).


1. Fork it (https://github.com/evansinho/React-Bookstore/fork)
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Show your support

Give us a ⭐️ if you like this project!

## Acknowledgments

- MIcroverse
- Microverse TSE's

## 📝 License

This project is [Apache](lic.url) licensed.
