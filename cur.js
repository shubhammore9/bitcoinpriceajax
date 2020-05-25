var f= document.getElementById('showf');
var xhr= document.querySelector('#xhr');
var fet= document.querySelector('#fet');
var axi= document.querySelector('#axi');
var codebox = document.querySelector('#codebox');
//AJAX Implementation USING XMLHTTPRequest

xhr.addEventListener("click",function(){
    var XHR= new XMLHttpRequest();
    XHR.onreadystatechange= function(){
        if(XHR.readyState ==  4 && XHR.status == 200){
          var res= JSON.parse(XHR.responseText);
          var usdprice= Math.ceil( 75.98* parseFloat((res.bpi.USD.rate).replace(/,/g, '')));
          f.innerHTML=" " + new String(usdprice) + " Rs.";
          var xhrcode = new String('//AJAX Implementation USING XMLHTTPRequest'+ '<br>'
         + 'xhr.addEventListener("click",function(){' + '<br>'
           + 'var XHR= new XMLHttpRequest();' + '<br>'
           + 'XHR.onreadystatechange= function(){' + '<br>'
            +    'if(XHR.readyState ==  4 && XHR.status == 200){' + '<br>'
             +    'var res= JSON.parse(XHR.responseText););'+ '<br>'
            + 'xhr.addEventListener("click",function(){'+ '<br>'
             + 'var XHR= new XMLHttpRequest();'+ '<br>'
              +'XHR.onreadystatechange= function(){'+ '<br>'
                  +'if(XHR.readyState ==  4 && XHR.status == 200){'+ '<br>'
                    +'var res= JSON.parse(XHR.responseText);'+ '<br>'
                    +'var usdprice= Math.ceil( 75.98* parseFloat((res.bpi.USD.rate).replace(/,/g, "")));' +'<br>'
                    +'f.innerHTML=" " + new String(usdprice) + " Rs.";'+'<br>'
                    +'var xhrcode = new String("")'+'<br>'
                    +'console.log(res.bpi.USD)'+'<br>'
                  +'}'
                +'}'
                +'XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json")'+'<br>'
                +'XHR.send(); '+'<br>'
        + ' });'+'<br>'
                    
                    );
           codebox.innerHTML=xhrcode;
          console.log(res.bpi.USD)
        }
      }
      XHR.open('GET',"https://api.coindesk.com/v1/bpi/currentprice.json")
      XHR.send(); 
});

//AJAX Implementaion Using FETCH API
 
fet.addEventListener('click',function(){
  url ='https://api.coindesk.com/v1/bpi/currentprice.json';
  fetch(url)
  .then(function(res){
    if(!res.ok){
      throw Error(res.status);
    }
    //console.log(res)
    return res;
  })
  .then(function(res){
    console.log(res)
    return res.json();     
  })
  .then(function(data){
    console.log(data)
    var usdprice= Math.ceil( 75.98* parseFloat((data.bpi.USD.rate).replace(/,/g, '')));
    f.innerHTML=" " + new String(usdprice) + " Rs.";
    var fetchAPICode= new String('//AJAX Implementaion Using FETCH API' + '<br>'
 
      +'fet.addEventListener("click",function(){' + '<br>'
        +'url ="https://api.coindesk.com/v1/bpi/currentprice.json";' + '<br>'
       +' fetch(url)' + '<br>'
        +'.then(function(res){'+ '<br>'
          +'if(!res.ok){'+ '<br>'
            +'throw Error(res.status);'
          +'}'+ '<br>'
          +'return res;'
        +'})'+ '<br>'
        +'.then(function(res){'+ '<br>'
          +'console.log(res)'+ '<br>'
          +'return res.json();'     
        +'})'+ '<br>'
       +' .then(function(data){'+ '<br>'
          +'console.log(data)'+ '<br>'
          +'var usdprice= Math.ceil( 75.98* parseFloat((data.bpi.USD.rate).replace(/,/g, "")));'+ '<br>'
          +'f.innerHTML=" " + new String(usdprice) + " Rs.";'+ '<br>'
          +'console.log(data.bpi.USD);'
       + '})'+ '<br>'
        +'.catch(function(error){'+ '<br>'
          +'console.log("ERROR: " + error);'
        +'})'+ '<br>'
      +'})' );

    codebox.innerHTML = fetchAPICode;
    console.log(data.bpi.USD);
  })
  .catch(function(error){
    console.log("ERROR: " + error);
  })
}) 

//jQuery For AJAX

//$.ajax()
/*
$('#jq').click(function(){
  url ='https://api.coindesk.com/v1/bpi/currentprice.json';
  $.ajax({
    method:'GET',
    url:url,
    dataType:'json'
  })
  .done(function(data){
    var usdprice= Math.ceil( 75.98* parseFloat((data.bpi.USD.rate).replace(/,/g, '')));
    f.innerHTML=" " + new String(usdprice) + " Rs.";
    console.log(data.bpi.USD);
  })
  .fail(function(err){
    console.log(err);
  })
})*/

//$.getJSON()
$('#jq').click(function(){
  url ='https://api.coindesk.com/v1/bpi/currentprice.json';
  $.getJSON(url)
  .done(function(data){
    var usdprice= Math.ceil( 75.98* parseFloat((data.bpi.USD.rate).replace(/,/g, '')));
      f.innerHTML=" " + new String(usdprice) + " Rs.";
      var jqcode = new String('//jQuery AJAX using $.getJSON()'+'<br>'
+'$("#abc").click(function(){+'+'<br>'
 + 'url ="https://api.coindesk.com/v1/bpi/currentprice.json";'+'<br>'
 + '$.getJSON(url)'+'<br>'
  +'.done(function(data){'+'<br>'
    +'var usdprice= Math.ceil( 75.98* parseFloat((data.bpi.USD.rate).replace(/,/g, "")));'+'<br>'
      +'f.innerHTML=" " + new String(usdprice) + " Rs.";'
  +'})'+'<br>'
  +'.fail(function(err){'+'<br>'
    +'console.log(err);'
  +'})  '+'<br>'
+'})' );
    codebox.innerHTML = jqcode;
      console.log(data.bpi.USD);
  })
  .fail(function(err){
    console.log(err);
  })  

})

//Axios for AJAX
$('#axi').click(function(){
url ='https://api.coindesk.com/v1/bpi/currentprice.json';
axios.get(url)
.then(function(data){
  var usdprice= Math.ceil( 75.98* parseFloat((data.data.bpi.USD.rate).replace(/,/g, '')));
      f.innerHTML=" " + new String(usdprice) + " Rs.";
      var axiomcode = new String('//Axios for AJAX'+'<br>'
+'$("#axi").click(function(){'+'<br>'
+'url ="https://api.coindesk.com/v1/bpi/currentprice.json";'+'<br>'
+'axios.get(url)'+'<br>'
+'.then(function(data){'+'<br>'
  +'var usdprice= Math.ceil( 75.98* parseFloat((data.data.bpi.USD.rate).replace(/,/g, "")));'+'<br>'
      +'f.innerHTML=" " + new String(usdprice) + " Rs.";'+'<br>'
      +'console.log(data.data.bpi.USD); '
+'})'+'<br>'
+'.catch(function(err){'+'<br>'
  +'console.log(err);'
+'})'+'<br>'
+'});'
);
  codebox.innerHTML=axiomcode;
      console.log(data.data.bpi.USD); 
})
.catch(function(err){
  console.log(err);
})
});