// var mongojs=require('mongojs');
// var db;

var express = require( "express" );
var mysql  = require('mysql');

 var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'limestem',
    database : 'tourism'
  });
  connection.connect();

exports.login=function(data,callback){
	//console.log("data from login code:"+JSON.stringify(data));
	 q='SELECT * FROM `login` WHERE `username` = "'+data.username+'" AND `password` = "'+data.password+'" ';

	  connection.query(q, function(err, result) { 
	  	//console.log(result);
	 	callback(result);
	  });
	
};

exports.addCountry=function(data,callback){
	//console.log("countryToAdd:"+JSON.stringify(data));
	{q='insert into  country(country) values("'+ data.country+'")';}

	connection.query(q, function(err, result) { 
	  	connection.query('SELECT * FROM country where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	  });
};

exports.deleteCountry=function(data,callback){
	console.log("deleteCountry:"+JSON.stringify(data));
    connection.query('Update country set deleted=1 where id="'+data.id+'"', function(err, result) { 
	  	connection.query('SELECT * FROM country where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	  });
};

exports.addState=function(data,callback){
	console.log("stateToAdd:"+JSON.stringify(data));
	{q='insert into  state(countrycode,state) values("'+ data.countrycode+'","'+ data.state+'")';}
	connection.query(q, function(err, result) { 
	  	connection.query('SELECT * FROM state where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	 });
	
};

exports.deleteState=function(data,callback){
	console.log("deleteState:"+JSON.stringify(data));
    connection.query('Update state set deleted=1 where id="'+data.id+'"', function(err, result) { 
        connection.query('SELECT * FROM state where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	   
	  });
};

exports.addCity=function(data,callback){

	//console.log("cityToAdd:"+JSON.stringify(data));
	{q='insert into  city(statecode,city) values("'+ data.statecode+'","'+ data.city+'")';}
	connection.query(q, function(err, result) { 
	  	connection.query('SELECT * FROM city where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	 });
	
};

exports.deleteCity=function(data,callback){
	console.log("deleteCity:"+JSON.stringify(data));
    connection.query('Update city set deleted=1 where id="'+data.id+'"', function(err, result) { 
    connection.query('SELECT * FROM city where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	  });
};

exports.addLocation=function(data,callback){
	//console.log("locatioToAdd:"+JSON.stringify(data));
	{q='insert into  location(citycode,location) values("'+ data.citycode+'","'+ data.location+'")';}
	connection.query(q, function(err, result) { 
	  	console.log("addlocation response:"+JSON.stringify(result));
	  	connection.query('SELECT * FROM location where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	 });
	
};

exports.deleteLoc=function(data,callback){
	console.log("deleteCity:"+JSON.stringify(data));
    connection.query('Update location set deleted=1 where id="'+data.id+'"', function(err, result) { 
	  	connection.query('SELECT * FROM location where deleted=0 ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	  });
};

exports.getCountry=function(data,callback){
	// db=mongojs("tourism",["country"]);
	// db.country.find(data,function(err,val){
	// 	callback(val);
	// });

	 {q='SELECT * FROM country where deleted=0 ORDER BY id DESC ';}

	 connection.query(q, function(err, result) { 
	  	//console.log(result);
	 	callback(result);
	  });
};

exports.getState=function(data,callback){
	// db=mongojs("tourism",["state"]);
	// db.state.find(data,function(err,val){
	// 	callback(val);
	// });
	{q='SELECT * FROM state where deleted=0 ORDER BY id DESC';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
};

exports.getCity=function(data,callback){
	{q='SELECT * FROM city where deleted=0 ORDER BY id DESC';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
	
};

exports.getLocation=function(data,callback){
	{q='SELECT * FROM location where deleted=0 ORDER BY id DESC';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
	
};

exports.getCategory=function(data,callback){
	//console.log("editorname:"+data);
	 {q='SELECT * FROM  category ';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
	
};

exports.addcategory=function(data,callback){
	console.log("editorname:"+JSON.stringify(data));
	 connection.query('insert into  category(name) values("'+ data.category+'")', function(err, result) {
	 	connection.query('SELECT * FROM category ORDER BY id DESC', function(err, data) {
	 	    callback(data);
	     });
	  });
	
};

exports.getloginDetails=function(data,callback){
	//console.log("editorname:"+data);
	 {q='SELECT * FROM  login WHERE  role="editor"';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
	
};

exports.assignedState=function(data,callback){
	//console.log("assignededitor:"+JSON.stringify(data));
	//console.log("assignededitor:"+data.state);
// {q='UPDATE state SET (assigned_to,assigned_date) values("'+ data.assigned_to+'","'+ data.assigned_date+'") WHERE state="'+data.state+'"';}
{q='insert into  assignstate(state,assigned_to,assigned_date,country) values("'+ data.state+'","'+ data.assigned_to+'","'+ data.assigned_date+'","'+ data.country+'")';}

	connection.query(q, function(err, result) { 
	  	connection.query('SELECT * FROM assignstate', function(err, data) {
	 	    callback(data);
	     });
	 });
	
};

exports.updateassignState=function(data,callback){
	 console.log("categoryupdate:"+JSON.stringify(data));
	 //console.log("selectedcategory:"+data.category);
	 // console.log("selectedcategorylength:"+data.category.length);
	             var obj = {};
			    for ( var i=0;i<data.category.length;i++ )
			     {
				   
					obj[i] = data.category[i];
			      }

		    //  console.log("categoryupdateJSON:"+JSON.stringify(obj));
    		
			 connection.query('update assignstate set ? where state=? AND assigned_to=?',[{"category_list":JSON.stringify(obj)},data.state, data.assigned_to], function(err, result) {
			 	connection.query('SELECT * FROM assignstate', function(err, data) {
	 	              callback(data);
	             });
			  });
};
exports.updateassignCity=function(data,callback){
	 console.log("citycategoryupdate:"+JSON.stringify(data));
	 console.log("selectedcategory:"+data.category);
	 // console.log("selectedcategorylength:"+data.category.length);
	             var obj = {};
			    for ( var i=0;i<data.category.length;i++ )
			     {
				   
					obj[i] = data.category[i];
			      }

		      console.log("categoryupdateJSON:"+JSON.stringify(obj));
    		
			 connection.query('update assigncity set ? where city=? AND assigned_to=?',[{"category_list":JSON.stringify(obj)},data.city, data.assigned_to], function(err, result) {
			 	connection.query('SELECT * FROM assigncity', function(err, data) {
					 	    callback(data);
					     });
			  });
};
exports.updateassignLocation=function(data,callback){
	 console.log("locationcategoryupdate:"+JSON.stringify(data));
	 console.log("selectedcategory:"+data.category);
	 // console.log("selectedcategorylength:"+data.category.length);
	             var obj = {};
			    for ( var i=0;i<data.category.length;i++ )
			     {
				   
					obj[i] = data.category[i];
			      }

		      console.log("categoryupdateJSON:"+JSON.stringify(obj));
    		
			 connection.query('update assignlocation set ? where location=? AND assigned_to=?',[{"category_list":JSON.stringify(obj)},data.location, data.assigned_to], function(err, result) {
			 	connection.query('SELECT * FROM assignlocation', function(err, data) {
					 	    callback(data);
					     });
			  });
};


exports.assignedCity=function(data,callback){
	//console.log("assignededitor:"+JSON.stringify(data));
	//console.log("assignededitor:"+data.city);
// {q='UPDATE state SET (assigned_to,assigned_date) values("'+ data.assigned_to+'","'+ data.assigned_date+'") WHERE state="'+data.state+'"';}
{q='insert into  assigncity(city,assigned_to,assigned_date,country,state) values("'+ data.city+'","'+ data.assigned_to+'","'+ data.assigned_date+'","'+ data.country+'","'+ data.state+'")';}

	connection.query(q, function(err, result) { 
	  	connection.query('SELECT * FROM assigncity', function(err, data) {
	 	    callback(data);
	     });
	 });
	
};

exports.assignedLocation=function(data,callback){
	//console.log("assignededitor:"+JSON.stringify(data));
	//console.log("assignededitor:"+data.city);
// {q='UPDATE state SET (assigned_to,assigned_date) values("'+ data.assigned_to+'","'+ data.assigned_date+'") WHERE state="'+data.state+'"';}
{q='insert into  assignlocation(location,assigned_to,assigned_date,country,state,city) values("'+ data.location+'","'+ data.assigned_to+'","'+ data.assigned_date+'","'+ data.country+'","'+ data.state+'","'+ data.city+'")';}

	connection.query(q, function(err, result) { 
	  	connection.query('SELECT * FROM assignlocation', function(err, data) {
		 callback(data);
		});
	 });
	
};

/*---------------api for get assinged state,city,location and category------------------------------------------*/

exports.getassignState=function(data,callback){
	//console.log("editorname:"+data);
	 {q='SELECT * FROM assignstate WHERE assigned_to="'+data+'"';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
	
};

exports.getassignCity=function(data,callback){
	//console.log("editorname:"+data);
	 {q='SELECT * FROM assigncity WHERE assigned_to="'+data+'"';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
	
};

exports.getassignLocation=function(data,callback){
	//console.log("editorname:"+data);
	 {q='SELECT * FROM assignlocation WHERE assigned_to="'+data+'"';}

	 connection.query(q, function(err, result) {
	 	callback(result);
	  });
	
};
/*---------------api for get assinged state,city,location and category------------------------------------------*/


/*---------------ajax query from category.js to get assign item list for state,city and location----------------*/

exports.getstateitemlist=function(data,callback,req){
	  // console.log("filtereddata:"+JSON.stringify(data));
	  //  console.log("state:"+data.state);
	  //   console.log("assigned_to:"+data.assinged_to);

	 // q='SELECT * FROM assignstate WHERE state="'+data.state+'" AND assigned_to="'+data.assigned_to+'" ';

	 connection.query('select * from assignstate  where state=? AND assigned_to=?',[data.state, data.assinged_to], function(err, result) {
            //console.log(result);
            callback(result);
        });
	
};
exports.getcityitemlist=function(data,callback,req){
	  // console.log("filtereddata:"+JSON.stringify(data));
	  //  console.log("state:"+data.state);
	  //   console.log("assigned_to:"+data.assinged_to);

	 // q='SELECT * FROM assignstate WHERE state="'+data.state+'" AND assigned_to="'+data.assigned_to+'" ';

	 connection.query('select * from assigncity  where city=? AND assigned_to=?',[data.city, data.assinged_to], function(err, result) {
            //console.log(result);
            callback(result);
        });
	
};
exports.getlocationitemlist=function(data,callback,req){
	   //console.log("filtereddata:"+JSON.stringify(data));
	  //  console.log("state:"+data.state);
	  //   console.log("assigned_to:"+data.assinged_to);

	 // q='SELECT * FROM assignstate WHERE state="'+data.state+'" AND assigned_to="'+data.assigned_to+'" ';

	 connection.query('select * from assignlocation  where location=? AND assigned_to=?',[data.location, data.assinged_to], function(err, result) {
            //console.log(result);
            callback(result);
        });
	
};



/*----------------ajax query from category.js to get assign item list for state,city and location--------------*/

/*------------------------------------api to save the siteseen from category.js-----------------------------*/
exports.addSiteSeen=function(data,callback){
     //console.log("siteseen1:"+JSON.stringify(data));
	var input = JSON.parse(JSON.stringify(data));
	 var query = {
            country    : input.country,
            state      : input.state,
            city       : input.city,
            location   : input.location,
            sitename   : input.sitename,
            content    : input.editor1,
            keywords   : input.keywords,
            tags       : input.tags,
            start_time : input.start_time,
            end_time   : input.end_time,
            editor_name : input.editor_name,
            status     :  input.status
        };
 //console.log("query:"+JSON.stringify(query));
	connection.query("INSERT INTO siteseen set ? ",query,function(err, result) { 
	  	//console.log(result);
	  	//console.log(err);
	 	callback(result);
	 });

};

/*--------------------------------------------api to save the siteseen from category.js-----------------------------*/
/*------------------------------------api to get the siteseen from category.js-----------------------------*/
exports.getSiteseen=function(data,callback){
    // console.log("siteseen1:"+JSON.stringify(data));
	//  var input = JSON.parse(JSON.stringify(data));
	//   var query = {
 //            country    : input.country,
 //            state      : input.state,
 //            city       : input.city,
 //            location   : input.location,
 //            sitename   : input.sitename,
 //            editor_name : input.editor_name
        
 //        };
 // console.log("query:"+JSON.stringify(query));
	connection.query('select * from siteseen  where country=? AND state=? AND city=? AND location=? AND sitename=? AND editor_name=? ',[data.country, data.state,data.city, data.location,data.sitename, data.editor_name],function(err, result) { 
	  	//console.log(result);
	  	//console.log(err);
	 	callback(result);
	 });

};

/*--------------------------------------------api to get the siteseen from category.js-----------------------------*/
/*------------------------------------api to update the siteseen from category.js-----------------------------*/
exports.updateSiteSeen=function(data,callback){
     //console.log("siteseen1:"+JSON.stringify(data));
     var query = 'UPDATE siteseen SET content = ?, keywords =?, tags=?, end_time=?, status=? WHERE country=? AND state=? AND city=? AND location=? AND sitename=? AND editor_name=? ';
	connection.query(query,[data.editor1,data.keywords,data.tags,data.end_time,data.status,data.country,data.state,data.city,data.location,data.sitename,data.editor_name],function (err, result) {
	  	//console.log(result);
	  	console.log(err);
	 	callback(result);
	 });

};


/*------------------------------------api to update the siteseen from category.js-----------------------------*/


/* ------999999999999999999    registeration form for user and admin  -----------------------------------------------*/
exports.registration=function(data,callback){
	console.log("registration data:"+JSON.stringify(data));
	q='SELECT * FROM  login WHERE  role="editor"';
	var input = JSON.parse(JSON.stringify(data));
	 var query = {
            
            username   : input.username,
            password   : input.password,
            role       : input.role
        
        };

    connection.query("INSERT INTO login set ? ",query,function(err, result) { 
	  	 connection.query('SELECT * FROM  login WHERE  role="editor"',function(err, data) { 
	 	   callback(data);
	     });
	 });
};
/* ------999999999999999999    registeration form for user and admin  -----------------------------------*/

/* -------------######  here api is started for ananlytics page ######-----------------------------------*/

// 1111 get all the assigned state for analytics
exports.ananlyticsState=function(data,callback)
{
	q='SELECT * FROM assignstate';

	  connection.query(q, function(err, result) { 
	  	//console.log(result);
	 	callback(result);
	  });
};

// 2222 get all the assigned city for analytics
exports.ananlyticsCity=function(data,callback)
{
	q='SELECT * FROM assigncity';

	  connection.query(q, function(err, result) { 
	  	//console.log(result);
	 	callback(result);
	  });
};

// 333 get all the assigned location for analytics
exports.ananlyticsLoc=function(data,callback)
{
	q='SELECT * FROM assignlocation';

	  connection.query(q, function(err, result) { 
	  	
	 	callback(result);
	  });
};

// 444 get all the assigned location for analytics
exports.workStatus=function(data,callback)
{
	q='SELECT * FROM siteseen';

	  connection.query(q, function(err, result) { 
	  	
	 	callback(result);
	  });
};

/* --------------######  here api is ended for ananlytics page ######------------------------------------*/
/*-----------5.when clicked at auditor colmun in status tab this api will fire---------------------------*/
exports.gettotalinspector=function(data,callback)
{
	q='SELECT * FROM login where role="investigator"';

	  connection.query(q, function(err, result) { 
	  	
	 	callback(result);
	  });
};
exports.assignedInpector=function(data,callback)
{
	console.log("inspector:"+JSON.stringify(data));
	q='UPDATE siteseen SET auditor = ? WHERE id=? ';

	  connection.query(q,[data.inpectorname,data.id],function(err, result) { 
	  	connection.query('SELECT * FROM siteseen', function(err, data) { 
	 	callback(data);
	    });
	  });
};

/*----------6.this api will get all data from inpectorDb which is finalized by inpector------------------------*/
exports.inspectData=function(data,callback)//get data into verify tab
{
	q='SELECT * FROM inpectorDb where adminStatus=0';

	  connection.query(q, function(err, result) { 
	  	
	 	callback(result);
	  });
};
exports.getData=function(data,callback)//get data into editor
{
	q='SELECT * FROM inpectorDb where id='+data.id+'';

	  connection.query(q, function(err, result) { 
	  	
	 	callback(result);
	  });
};

/*-----7. this api update and save data into based at button click in  inpectordb $ finalDb-----*/
exports.UpdateinpectorDb=function(data,callback){
	 //console.log("inpectorDbUpdate:"+JSON.stringify(data));
    var query = 'UPDATE inpectorDb SET content = ?, keywords =?, tags=? WHERE id=? ';
	connection.query(query,[data.editor1,data.keywords,data.tags,data.id],function (err, result) {
	  	//console.log(result);
	  	//console.log(err);
	 	callback(result);
	 });
	
};

exports.insertIntoFinalDb=function(data,callback){
	 //console.log("finaldatabase:"+JSON.stringify(data));

	 var input = JSON.parse(JSON.stringify(data));
	 var query = {
            country    : input.country,
            state      : input.state,
            city       : input.city,
            location   : input.location,
            sitename   : input.sitename,
            content    : input.editor1,
            keywords   : input.keywords,
            tags       : input.tags,
        };

    q='SELECT id,country,state,city,location,sitename,auditor_name FROM inpectorDb WHERE adminStatus = 0';
 //console.log("query:"+JSON.stringify(query));
	connection.query("INSERT INTO finalDb set ? ",query,function(err, result) { 
	  	   connection.query('UPDATE inpectorDb SET adminStatus = 1 WHERE id=? ',[data.id],function (err, result1) {
			  	//console.log(result);
	             connection.query(q,function (err,data){

				  	//console.log(err);
				 	callback(data);
				   });

			});
	 });
	
};





