# Express Template

Custom Express template for NodeJS servers.

## Features

- **Pug** template engine to render HTML
- Environment settings loaded with **dotenv**
- Hot reload with **nodemon**
- **Postman** HTTP request collection
- Custom error handling with support for async/await
- Documentation on why/how each piece works
- Select middleware:
  - **morgan** HTTP requests logger
  - **helmet** to set response headers securely
  - **serve-static** to serve public files
  - **cors** for Cross Origin Resource Sharing
  - **body-parser** to process request bodies
  - **timeout** to signal timeout in HTTP requests
  - Listing of optional middleware in the docs

## Future development

- Implement more detailed error handling (see GDPR project)
- Add healthchecks for readiness and liveness
- Add a better stack tracer
- Create a private HTTP API for registered users only, with **jsonwebtoken**
- Experiment with **passport**
- Caching mechanisms
- Performance tuning

## Contributions

Any comments and contributions are much welcome!

## License

[Do What The F*ck You Want To Public License](https://github.com/sindelio/express-template/blob/master/LICENSE)
