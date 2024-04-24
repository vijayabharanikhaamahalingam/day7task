const API_URL="https://restcountries.com/v3.1/all"
function reqListener() {
    let response=JSON.parse(this.responseText);   
    let contriesFromAsia=[];
    let countriesWithPopulation=[];
    if(response.length>0){
      console.log("Getting countries from asia ") //Getting countries from asia 
      response.filter(value=>value.region=="Asia").forEach(value=>{
        contriesFromAsia.push(value.name.common)
      })
      console.log(contriesFromAsia);
      console.log("Getting country with population less than 2 lakhs ")//Getting country with population less than 2 lakhs 
      response.filter(value=>value.population<200000).forEach(value=>{
        countriesWithPopulation.push(value.name.common);
      })
      console.log(countriesWithPopulation);

      console.log("Getting all the contries name,flag,capital")//Getting all the contries name,flag,capital
      response.forEach(value=>{
        console.log("country name "+value.name.common)
        console.log("Flag "+value.flag)
        if(value.capital?.length>0)
        console.log("capital "+value["capital"][0])
      })
      console.log("Add all population")//Add all population
      const initValue=0;
      let result=response.map(value=>value.population).reduce((accum,value)=>accum+value,initValue)
      console.log(result);

      console.log("Printing countries with USD")//Printing countries with USD
      let countriesWithUSD=response.filter(value=>value.currencies?.USD).map(value=>value.name.common)
      console.log(countriesWithUSD);
      
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();