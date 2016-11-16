# GETTING STARTED

We use Ruby version 2.2.5, so you'll probably want that.

Then...

     bundle install

     npm install

     rails server

And visit [http://localhost:3000](http://localhost:3000/) to run the sample app.

## Frontend-only test requirements

Use the GitHub users api as a data source to execute the design found [here](https://projects.invisionapp.com/share/BK9D8C7RA#/screens/205900875_TestApp_1).

## Frontend and backend test requirements

Using the GitHub users api as a 3rd party integration, build your own api as a data source to execute the design found [here](https://projects.invisionapp.com/share/BK9D8C7RA#/screens/205900875_TestApp_1).

## Running tests

To run javascript/karma specs:

     npm test

To run ruby specs:

     bundle exec rspec spec/[directory]
