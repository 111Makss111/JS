// console.log(null && false); 

// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
  
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));



// console.log(false || 0);

// function checkAccess(subType) {
 
//     if(subType === "pro" || subType === "vip"){
// return true
//     }else{
//         return false
//     }
// }
// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));
// const userName = "Anastasiia"
// console.log(userName.toUpperCase());
// console.log(userName.slice(4,7));

// function getSubstring(string, length) {
//     return string.slice(0,length);
//   }
//   console.log(getSubstring("Hello world", 3));
//   console.log(getSubstring("Hello world", 5));
//   console.log(getSubstring("Hello world", 8));
//   console.log(getSubstring("Hello world", 11));
//   console.log(getSubstring("Hello world", 0));
  
  

//     const userName = 'SAMSung'
//     const userInput = 'samsuNG'
//     const res = userName.toLowerCase() === userInput.toLowerCase()
 
//   console.log(res);
// function normalizeInput(input, to) {
//     if(to === 'upper'){
//       return input.toUpperCase()
//     }else{
//         return input.toLowerCase()
//     }
//   }
//   console.log(normalizeInput("This ISN'T SpaM", "lower"));
//  console.log(normalizeInput("This ISN'T SpaM", "upper"));
//  console.log(normalizeInput("Big SALE", "lower"));
//  console.log(normalizeInput("Big SALE", "upper"));
//  console.log(normalizeInput("Stay Awhile and Listen", "lower"));
//  console.log(normalizeInput("Stay Awhile and Listen", "upper"));
// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }
// function checkForName(fullName, firstName) {
//     if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
//         return true;
//     } else {
//         return false;
//     }
// }

//  console.log(checkForName("Jason Neis", "Jason"));
//  console.log(checkForName("Jason Neis", "jAsOn"));
//  console.log(checkForName("Jason Neis", "Jacob"));
//  console.log(checkForName("Caty Stars", "Caty"));
//  console.log(checkForName("Caty Stars", "cAtY"));
//  console.log(checkForName("Caty Stars", "Andromeda"));
 
// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext.toLowerCase())) {
//         return "File extension matches"
//     }else{
//        return "File extension does not match"
//     }
// }
//   console.log(checkFileExtension("styles.css", ".css"));
//   console.log(checkFileExtension("styles.css", ".js"));
//   console.log(checkFileExtension("app.js", ".js"));
//   console.log(checkFileExtension("app.js", ".html"));
//   console.log(checkFileExtension("index.html", ".html"));
//   console.log(checkFileExtension("index.html", ".css"));
//   console.log(checkFileExtension("index.html", ".js"));
  
// function getFileName(file) {
//     const dotIndex = file.indexOf('.');
//     if (dotIndex > 0) {
//         return file.slice(0, dotIndex);
//     }
//     return file;
// }
// console.log(getFileName("styles.css")); 
// console.log(getFileName("app.js")); 
// console.log(getFileName("app")); 
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html")); 
// console.log(getFileName("index.css")); 
// console.log(getFileName("index")); 

function createFileName(name, ext) {
 return `${name.trim()} , ${ext.trim()}`
}
console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
console.log(createFileName(" presentation", "xml"));
