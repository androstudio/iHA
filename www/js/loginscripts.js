<script>
			function loginUser()
			{
				//var UserName=form.user.value;
				//var PassWord=form.pass.value;
				var UserName =$("#Username").val();
				var PassWord = $("#Password").val();
				var WebMethodName= "CheckPatientLogin";
				$.ajax({
					ServiceCallID: 1,
					type: "POST",
					url: "http://appdataservice.iphysicianhub.in/Service.asmx/CheckPatientLogin",
					data: "{'UserName':'" + UserName + "','PassWord':'" + PassWord + "'}",
                   contentType: "application/json; charset=utf-8",
                   dataType: "json",
					
					success: function (result) {
					   returnVal = result.d;
					   //alert(returnVal);
					   
					   var text=returnVal;
					   var obj = JSON.parse(text);
					   
					   if(obj.MemberId  == "" || obj.MemberId  == null) {
							alert("Wrong Credintials");
							$("#Username").val() = "";
							$("#Password").val() = "";
					   } else {
							alert(obj.FirstName + " " + obj.LastName);
					   }
					   //document.getElementById("demo").innerHTML =obj.FirstName + " " + obj.LastName;
					   
					   //alert(obj.FirstName);
					   //console.log(obj);
                   
                   },
                   error: function (XMLHttpRequest, textStatus, errorThrown) {
                   returnVal = '';
				   alert("Error");
                   }
                });
			}
		</script>