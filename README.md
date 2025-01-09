# odin-members-only

purpose:
an express app that uses passport.js and bcryptjs to register and log users in. database is postgres

what i learned:
how middleware works, sequelize, passport.js, authenticate, sessions

what i struggled with:
middleware (specifically why we have to call it directly in the router handler)
how to go from in memory session to sequelize session (so it can work without leaking memory in production)
weird letter casing bugs that i can fix with reload window

find it here: https://odin-members-only-production-7516.up.railway.app/
