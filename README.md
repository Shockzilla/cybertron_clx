## Introduction
> For consistency between workflow, please fork this repository and send pull requests.

This project is managed with Bower and gulp, however it is constructed in a way to be viewed without the need of a web server or any command-line utilities. This repository serves as a basic outline for the front-end assets to be used in a completed project. It is important to note this project is not a standalone application, rather more like a proof-of-concept.

## Getting Started
### Using Bower and gulp
* This project utilizes Bower for package management and gulp for front-end building. Install dependencies normally by running `bower install` and `npm install`.
* You may edit files directly in the 'src' folder. Run `gulp watch` to automatically compile CSS as you edit.
* This project uses SASS to write CSS. Please keep everything within 'main.scss' and use partials to import files to this file.
* Before sending a pull request, please run `gulp` to reconstruct all files. This is important for users not using Bower or gulp.
* New images should be placed in 'src/images'.

### Alternative
* You may edit the files located in the 'web' folder. Please edit the non-minified versions of the files.
* Do not create new asset files. Any additions should be made to 'main.css' or 'main.js'.
* New images should be placed in 'web/assets/images'.

## Final Notes
* For the sake of consistency, we will use the [Code Guide](http://mdo.github.io/code-guide/) by @mdo for coding standards.
* New HTML files should be made for each page. Use folders to organize similar pages together. The filename for these new files should be relevant to what the page serves. Please do not create any additional index files.
