# cypressPoc

* Setup
brew install npm
npm install cypress save-dev
npm install D cypress-xpath
npm install --save-dev cypress-file-upload

* File Upload
Single File Upload: cy.get().attachFile('fileName')
Multiple File Uploads: cy.get().attachFile(['filename1', 'filename2'])
Rename file while upload: cy.get().attachFile({filePath: 'filename', fileName: 'newFileName'})
Upload in a shadow dom: cy.get('css selector', {includeShadowDom: true}).attachFile('fileName')
Drag and drop: cy.get('dragndropLocator').attachFile('fileName', {subjectType: 'drag-n-drop'})

* Hooks
before
after
beforeEach
afterEach

* Tags
only
skip
@tagname

* Page Object Model
Create folder named 'PageObjects' under cypress
Add a .js file with a class & export the class
Import the class in the test case file
Create a instance variable of that class before using in the test cases

* Handling tables
