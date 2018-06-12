
function test{
    $.ajax({
        type: "POST",
        data: {
        	'dname':dname,
        	'db_source':db_source;
        },
        url: "/consumer/dept/add",
        success: function (data) {
           alert("chenggong");
        },
        error: function (err) {
        	alert("服务类型错误！");
        }
    })
}