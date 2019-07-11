$(document).ready(function () {
   var  calendar = $('#calendar').fullCalendar({
      editable:true,
      header:{
            left: 'prev,next,today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
      } ,
       events:'/api/calendar/all',
       selectable:true,
       selectHelper:true,
       select: function (start,end,allDay) {
          var title = prompt("Enter event title");
           if (title){
               var start = $.fullCalendar.formatDate(start,"Y-MM-DD HH:mm:ss");
               var end = $.fullCalendar.formatDate(end,"Y-MM-DD HH:mm:ss");
               $.ajax({
                   url:"/api/calendar/add",
                   type:"POST",
                   data:{title:title,start:start,end:end},
                   success:function (data) {
                    if (data == "success"){
                        calendar.fullCalendar('refetchEvents');
                        alert("Add successfully");
                    }
                    else if(data == "error"){
                        alert("add error");
                    }
                    else if(data="notaddpast"){
                        alert("You must not add events in the past");
                    }
                   }
               })
           }
       },
       edittable:true,
       eventResize:function (event) {
           var start = $.fullCalendar.formatDate(event.start,"Y-MM-DD HH:mm:ss");
           var end = $.fullCalendar.formatDate(event.end,"Y-MM-DD HH:mm:ss");
           var title = event.title;
           var id = event.id;
           $.ajax({
               url:"/api/calendar/update",
               type:"POST",
               data:{id:id,title:title,start:start,end:end},
               success:function (data) {
                   if (data == "success"){
                       calendar.fullCalendar('refetchEvents');
                       alert("update successfully");
                   }
                   else if(data == "error")
                       alert("add error");
               }
           })
       },
       eventDrop:function(event){
           var start = $.fullCalendar.formatDate(event.start,"Y-MM-DD HH:mm:ss");
           var end = $.fullCalendar.formatDate(event.end,"Y-MM-DD HH:mm:ss");
           var title = event.title;
           var id = event.id;
           $.ajax({
               url:"/api/calendar/update",
               type:"POST",
               data:{id:id,title:title,start:start,end:end},
               success:function (data) {
                   if (data == "success"){
                       calendar.fullCalendar('refetchEvents');
                       alert("update successfully");
                   }
                   else if(data == "error")
                       alert("add error");
               }
           })
       },
       eventClick:function(event){
          if(confirm("Are you sure want to remove it ?")){
              var id = event.id;
              $.ajax({
                  url:"/api/calendar/delete",
                  type:"POST",
                  data:{id:id},
                  success:function (data) {
                      if (data == "success"){
                          calendar.fullCalendar('refetchEvents');
                          alert("deleted successfully");
                      }
                      else if(data == "error")
                          alert("add error");
                  }
              })
          }
       }
   });
});

