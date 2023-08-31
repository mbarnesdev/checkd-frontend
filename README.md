# State Management

Due to the small scope of this demo I chose to prop drill the state from the server down into the data container of the header/main components. Usually I would have stored this externally in either the built-in context API or a state management solution such as Zustand/Redux.

# Proxying Requests

To inject the correct CORS headers I needed to create a simple backend to proxy the requests to the match API. This is hosted on the Railway platform.

Ideally with more time I would have liked to create a dockerfile that spun up the Node proxy server as well as the React application and pointed the latter at the former.

# Code Sanity

This application has my personal configs for linting and formatting via ESLint and Prettier.

Ideally given more time I would have liked to create pipelines for commit hooks, using Husky.

# File Structure

I chose to use the feature/shared structure for this application. As well as creating barrel exports so that multiple components (from separate files) can be imported in one import statement.

An argument could be made that the API request and corresponding custom hook could be moved outside of the feature folder into shared, as it's likely that API will be used in multiple places (if the application scope was bigger). But since it's one component I chose to leave it.

# Enums

I use the `const EnumName = {} as const` pattern multiple times within this codebase to produce readonly objects that act as enums. I do this due to the built-in TypeScript enums having some strange quirks that have tripped me up previously.

# Libraries

Since this application is client-side rendered I chose to use Tanstack Query as my state manager, it is in my opinion the best way to manage server state when using CSR.

I use the keyBy function from the lodash library, this library is tree-shakeable and battle-tested so I see no issue in acquiring it as a dependency.

# Known Bugs
