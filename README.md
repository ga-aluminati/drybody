# drybody 
_version: (rc-v1.0)_

### Prerequisites

1. Install [Node.js](http://nodejs.org)
 - OSX use [homebrew](http://brew.sh) `brew install node` _recommended_
 - Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally
 - Run Node.js 4.0 or higher, currently running on v6.3.0
 - Update NPM to latest stable version for access to latest packages

    ```bash
    npm install -g bower gulp
    ```

### Quickstart

1. Clone with [HTTPS](https://help.github.com/articles/which-remote-url-should-i-use/#cloning-with-https-urls-recommended) _recommended_

2. Install NPM and Bower deps

    ```bash
    npm install 
    ```

3. Copy souce from /client to /build and start server with livereload

    ```bash
    gulp
    ```

 _note: gulp build task triggers a 'watch' task with livereload, html, css and javascript injection. Stream pipes through number of other task runners. For more info on the Build System see the next section._

4. Navigate to localhost:8000

5. Stop the server with _control+c_

6. Delete _dest_ 

    ```bash
    gulp clean
    ```
 _note: 'dest' in this case is in referance to the directory called /build_

7. Write your application to /client with on-save reload


### Build System Features

- Socket server with livereload, soucemap-filter and fallback url [gulp-webserver](https://www.npmjs.com/package/gulp-webserver)
- Custom scripts, css, and vendor files autosort on-inject per google spec ng1.0
- SCSS to CSS compilation
- CSS autoprefix and inject on build and reload
- Annotated Angular1.0 with a gulp wrapper on ng-annotate [gulp-ng-annotate](https://www.npmjs.com/package/gulp-ng-annotate)

_more on this and docs on other items coming soon..._