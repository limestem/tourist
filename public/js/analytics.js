$( document ).ready(function()//started page
 {

 /*-------------1.this api will get all the data available in assignstate-----------------------------------------*/

	$.ajax({
    url : "/ananlyticsState",
    type: "GET",
    cache: false,
    success: function(data)
    {
        //console.log( "assignstate for analytics:"+JSON.stringify(data) );
        var category_list='';

        for( var i=0;i<data.length;i++)
	        {    
	        	 category_list='';
	        	 category_list=data[i].category_list;
	        	 var addstate1='';
	        	 addstate1='<tr><td></td><td>'+data[i].assigned_to+'</td><td>'+data[i].state+'</td><td>'+data[i].country+'</td><td>'+data[i].assigned_date+'</td><td>';
                  

                  $.each($.parseJSON(category_list), function(k, v) {
                         addstate1+=' <span id="category">'+v+'</span>';
                      
	               });

                  addstate1+='</td> </tr>';

                  $('#addassignstate1').append(addstate1);
	        }
       
	        pagination("stateassign");
    }
    });	
 /*-------------1.this api will get all the data available in assignstate-----------------------------------------*/

 /*-------------2.this api will get all the data available in assigncity-----------------------------------------*/

  $.ajax({
    url : "/ananlyticsCity",
    type: "GET",
    cache: false,
    success: function(data)
    {
        //console.log( "assigncity for analytics:"+JSON.stringify(data) );
         var category_list='';

        for( var i=0;i<data.length;i++)
          {    
        //      category_list='';
              category_list=data[i].category_list;
             var addcity1='';
             addcity1='<tr><td></td><td>'+data[i].assigned_to+'</td><td>'+data[i].city+'</td><td>'+data[i].state+'</td><td>'+data[i].country+'</td><td>'+data[i].assigned_date+'</td><td>';
                  

                  $.each($.parseJSON(category_list), function(k, v) {
                         addcity1+=' <span id="category">'+v+'</span>';
                      
                 });

                  addcity1+='</td> </tr>';

                  //console.log( "assigncity for category:"+category_list );

                  $('#addassigncity1').append(addcity1);
          }
       
           pagination("cityassign");
    }
    }); 
 /*-------------2.this api will get all the data available in assigncity-----------------------------------------*/

 /*-------------3.this api will get all the data available in assignlocation-------------------------------------*/

  $.ajax({
    url : "/ananlyticsLoc",
    type: "GET",
    cache: false,
    success: function(data)
    {
       //console.log( "assignLoc for analytics:"+JSON.stringify(data) );
       var category_list='';

        for( var i=0;i<data.length;i++)
          {    
             category_list=data[i].category_list;
             var addloc1='';
             addloc1='<tr><td></td><td>'+data[i].assigned_to+'</td><td>'+data[i].location+'</td><td>'+data[i].city+'</td><td>'+data[i].state+'</td><td>'+data[i].country+'</td><td>'+data[i].assigned_date+'</td><td>';
                  

                  $.each($.parseJSON(category_list), function(k, v) {
                         addloc1+=' <span id="category">'+v+'</span>';
                      
                 });

                  addloc1+='</td> </tr>';
                  $('#addassignloc1').append(addloc1);
                 
          }
       
        pagination("locationassign");
    }
  });
 
 /*-------------3.this api will get all the data available in assignlocation-------------------------------------*/
/*-----------4.this api will get all the data available in siteseen for workstatus-------------------------------*/
   $.ajax({
    url : "/workStatus",
    type: "GET",
    cache: false,
    success: function(data)
    {
       //console.log( "workstatus for analytics:"+JSON.stringify(data) );
       

        for( var i=0;i<data.length;i++)
          {    
            var addStatus='';
             addStatus='<tr><td></td><td>'+data[i].editor_name+'</td><td>'+data[i].country+'</td><td>'+data[i].state+'</td><td>'+data[i].city+'</td><td>'+data[i].location+'</td><td>'+data[i].sitename+'</td><td>'+data[i].start_time+'</td><td>'+data[i].end_time+'</td><td>';

               if(data[i].status=="1")
               {
                      addStatus+=' <span id="category1">Progress</span>';
               }
               else if(data[i].status=="2")
               {
                      addStatus+=' <span id="category2">Finalized</span>';
               }

              addStatus+='</td> </tr>';
                  
                  $('#status').append(addStatus);
          }
          pagination("workstatus");
    }
  });

/*-----------4.this api will get all the data available in siteseen for workstatus-------------------------------*/

 $('#search').on('keyup', function() { 
  var value = $(this).val(); 
  var refer=$("#previewmodel").find(".active").attr("refer");
  var patt = new RegExp(value, "i"); 

  $('#'+refer+" .myTable").find('tr').each(function() { 
  
    if (!($(this).find('td').text().search(patt) >= 0)) { 
      $(this).not('.myHead').hide(); 
    } 
    if (($(this).find('td').text().search(patt) >= 0)) { 
      $(this).show(); 
    } 
  }); 

});

$('#search1').on('keyup', function() { 
  var value = $(this).val(); 
  //alert(value);
  var patt = new RegExp(value, "i"); 
  $('.myTable1').find('tr').each(function() { 
     // alert("hello");
      if (!($(this).find('td').text().search(patt) >= 0)) { 
      $(this).not('.myHead1').hide(); 
      } 
      if (($(this).find('td').text().search(patt) >= 0)) { 
        $(this).show(); 
      } 

  });

});

$('#search2').on('keyup', function() { 
  var value = $(this).val(); 
  //alert(value);
  var patt = new RegExp(value, "i"); 
  $('.myTable2').find('tr').each(function() { 
     // alert("hello");
      if (!($(this).find('td').text().search(patt) >= 0)) { 
      $(this).not('.myHead2').hide(); 
      } 
      if (($(this).find('td').text().search(patt) >= 0)) { 
        $(this).show(); 
      } 

  });

});


$('#search3').on('keyup', function() { 
  var value = $(this).val(); 
  //alert(value);
  var patt = new RegExp(value, "i"); 
  $('.myTable3').find('tr').each(function() { 
     // alert("hello");
      if (!($(this).find('td').text().search(patt) >= 0)) { 
      $(this).not('.myHead3').hide(); 
      } 
      if (($(this).find('td').text().search(patt) >= 0)) { 
        $(this).show(); 
      } 

  });

});

 
/*---------------------this function work with pagination for table-------------------------------------------*/
function pagination(refer)
{
  var maxRows = 5;
  //alert(refer);
$('#'+refer+' table').each(function() {
  var cTable = $(this);
  //alert(JSON.stringify(cTable));
  var cRows = cTable.find('tr:gt(0)');
  //alert("no of row:"+JSON.stringify(cRows));
  var cRowCount = cRows.length;
 
  
  if (cRowCount < maxRows) {
      cRows.each(function(i) {
      $(this).find('td:first').text(function(j, val) {
         return (i + 1);
      }); 
      $('#'+refer+'').find('.next').addClass('disabled');
  });

  }

  cRows.each(function(i) {
      $(this).find('td:first').text(function(j, val) {
         return (i + 1);
      }); 
  });

  cRows.filter(':gt(' + (maxRows - 1) + ')').hide();


  var cPrev = $('#'+refer+'').find('.prev');
  var cNext = $('#'+refer+'').find('.next');

  cPrev.addClass('disabled');

  cPrev.click(function() {
      var cFirstVisible = cRows.index(cRows.filter(':visible'));
      
      if (cPrev.hasClass('disabled')) {
          return false;
      }
      
      cRows.hide();
      if (cFirstVisible - maxRows - 1 > 0) {
          cRows.filter(':lt(' + cFirstVisible + '):gt(' + (cFirstVisible - maxRows - 1) + ')').show();
      } else {
          cRows.filter(':lt(' + cFirstVisible + ')').show();
      }

      if (cFirstVisible - maxRows <= 0) {
          cPrev.addClass('disabled');
      }
      
      cNext.removeClass('disabled');

      return false;
  });

  cNext.click(function() {
      var cFirstVisible = cRows.index(cRows.filter(':visible'));
      
      if (cNext.hasClass('disabled')) {
          return false;
      }
      
      cRows.hide();
      cRows.filter(':lt(' + (cFirstVisible +2 * maxRows) + '):gt(' + (cFirstVisible + maxRows - 1) + ')').show();

      if (cFirstVisible + 2 * maxRows >= cRows.length) {
          cNext.addClass('disabled');
      }
      
      cPrev.removeClass('disabled');

      return false;
  });
});//pagination
};
/*---------------------this function work with pagination for table-------------------------------------------*/

});//end page