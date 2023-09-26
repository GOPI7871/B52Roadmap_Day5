// USING FOR IN and OF and EACH LOOP JSON OBJECTS

// USING FOR IN LOOP

    var request = new XMLHttpRequest();

  request.open ("GET","https://restcountries.com/v3.1/all");

  request.send();

    request.onload = function(){
        var result = JSON.parse(request.response);
        console.log(result);
        for(let val in result){
            console.log(`FLAGS:${result[val].flags.png}`)
        }
    }


// // USING FOR OF LOOP

var request = new XMLHttpRequest();

  request.open ("GET","https://restcountries.com/v3.1/all");

  request.send();

    request.onload = function(){
        var result = JSON.parse(request.response);
        console.log(result);
        for(let val of result){
            console.log(`FLAGS:${val.flags.png} REGION:${val.region} POPULATION:${val.population}`);
        }
    }


    // USUING FOR EACH LOOP

    var request = new XMLHttpRequest();

    request.open ("GET","https://restcountries.com/v3.1/all");
  
    request.send();
  
      request.onload = function(){
          var result = JSON.parse(request.response);
          console.log(result);
          result.forEach(flags => {
            console.log(flags);
          });
      }
  

