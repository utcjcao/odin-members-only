# odin-members-only

purpose:
an express app that uses passport.js and bcryptjs to register and log users in. database is postgres

what i learned:
how middleware works, sequelize, passport.js, authenticate, sessions

what i struggled with:
middleware (specifically why we have to call it directly in the router handler)
how to go from in memory session to sequelize session (so it can work without leaking memory in production)
weird letter casing bugs that i can fix with reload window

how to use it:
before login:

1. you can view messages but can't see when its created/ who created then
   you can register an account and then login.
   after login:
1. you can view messages along with who created them and when, and also add messages.
   you can enter secret passcodes "charmander" and "bulbasaur". bulbasaur gives you permissions to delete messages and charmander gives you a nice message :)

find it here: https://odin-members-only-production-7516.up.railway.app/
