function sayHello(){
    const d = new $.Deferred;
    setTimeout(function(){
      console.log('Hello!');
      d.resolve();
    }, 1000);
    return d.promise();
  }
  
  function sayGoodBye(){
    console.log('GoodBye!');
  }
  
  sayHello().done(sayGoodBye);