function run(cb) {
    cb();
  }
  
  
  
  function map(array, callback) {
    const results = [];
  
    for (let index = 0; index < array.length; index++) {
      console.log('inside loop');
      const data = callback(array[index], index);
      console.log('value',  data);
  
      results.push(data);
    }
  
    return results;
  }
  
  function add(num1, num2) {
    return num1 + num2;
  }
  
  const strArray = ['1', '2', '3', '4'];
 
  
  console.log('before name'); // 111

  function printName(name) {
    setTimeout(function() {
      console.log(`hello ${name}`);
    }, 2000);
  }
  
  
  function getThingsFromDB(query, callback) { //THIS FUNCTION GETS 'select *...' AND handleData function.
    return setTimeout(function() {
      const data = ['thing1', 'thing2',' thing3'];
  
      callback(data);
      console.log('inside db call'); //4444
  
      // return data;
  
    }, 2000);
  }
  
  
  getThingsFromDB('select * from things', handleData); ///RUNS THIS CALL AFTER ///111
  
  
  
  function handleData(data) {
    console.log('handling data', data); ///2
  
    for (const thing of data) {
      console.log('i have data', thing);///3,3,3
    }
  }