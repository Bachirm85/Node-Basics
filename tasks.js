
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

var list = ['Bachir', 'Mouawad']
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  console.log(text)
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  } else if (text === 'hello\n' || text.startsWith('hello ')){
    hello(text);

  } else if (text === 'help\n') {
    help();

  } else if (text.split(" ")[0] == "add" || text.trim() == "add") {
    add(text);

  // } else if(text.startsWith("add")){
  //     add(text);


  } else if (text.startsWith('remove')) {
    remove(text);

  } else if (text==('edit\n')) {
    edit(text);

  // } else if (text.startsWith('list')) {
  //   listPrint();

  } else if(text.startsWith("list")){
   tasks(list);

  } else {
    unknownCommand(text);
  }
  
}

function hello(text) {
  text = text.replace('\n', '');
  text = text.trim(' ');
  text = text.str.split(" ");
  console.log(text);
}


function add (text) {
  text=text.trim('');
  // text=text.str.slice[0];
  list.push(text.substring(4).trim());
}

// function add(text) {
//   if (text.trim()) {
//     console.log(arr.push(text));
//   } else console.log("can't add empty elements!");
// }


function remove (text) {
  text=text.trim();
  if(text.length == 6 || text.length === 2) {
    list.pop();
  } else if (text.substring(7) >=list.length){
    console.log("sorry that number it doesn't exist");
  } else {
    list.splice(text.substring(7),1);
    
  }
}

function edit(text) {
  if (text.match("edit") ){
    console.log('error');

  }
}

// function listPrint(){
//   for (var i=0; i<list.length; i++){
//     console.log(i + 1 + ')' + list[i]);
//     }
//  }


 function tasks(list){
  for(let i = 0 ; i < list.length ; i++){
    if(list[i]=="Bachir" || list[i]=="Mouawad" ){
    console.log(i + 1 + ") " + " [✓] " + list[i]);
  } else {
      console.log(i + 1 + ") " + " [] " + list[i]);
    }
  }
}


 function checkbox(){
   console.log(checkbox);
 }
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!');
function hello(value) {
  const newValue = value.replace(/ +/g," ");
  console.log( newValue.trim() +"!");
  }
}

/**asking for help */

function help () {
  console.log('help\nquit\nexit')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Bachir")
