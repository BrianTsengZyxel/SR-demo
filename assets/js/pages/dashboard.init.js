$(function(){$("#right-modal select").kendoDropDownList(),$("#grid").kendoGrid({columns:[{field:"FirstName",title:"First Name"},{field:"LastName",title:"Last Name"}],dataSource:{data:[{FirstName:"Joe",LastName:"Smith"},{FirstName:"Jane",LastName:"Smith"}]}}),$("#device-disconnect-alert").modal("show"),$(".security-indicator-group .custom-date-range-picker").on("custom.apply",function(o,t,e){console.log(t.format("YYYY-MM-DD HH:mm:ss")),console.log(e.format("YYYY-MM-DD HH:mm:ss"))}),$(".traffic-usage-group .custom-date-range-picker").on("custom.apply",function(o,t,e){console.log(t.format("YYYY-MM-DD HH:mm:ss")),console.log(e.format("YYYY-MM-DD HH:mm:ss"))})});