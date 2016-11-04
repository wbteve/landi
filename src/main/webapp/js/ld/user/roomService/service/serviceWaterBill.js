// 客房服务--桶装水费

// 初始绑定搜索键盘事件
$(function(){
	$(".search-input").keydown(function(e){
		// 回车键
		if(e.keyCode==13){
			requestFirstWaterBillByRoomNum(this);
		}
	})
});


//拉取第一页 桶装水费信息
var requestFirstWaterBill = function(){
	requestAjaxWaterBill(parseInt(1));    
}

//拉取上一页 桶装水费信息
var requestBeforeWaterBill = function(){
	var nowpage = parseInt($("#waterBilllist_nowpage").val());
	if(nowpage == 1) return;
	requestAjaxWaterBill(nowpage-1);
}

// 拉取下一页 桶装水费信息（??当前处理，前端判断是否是最后一页）
var requestNextWaterBill = function(){
	var nowpage = parseInt($("#waterBilllist_nowpage").val());
	var totalpage = parseInt($("#waterBilllist_totalpage").text());
	if(nowpage == totalpage) return;
	requestAjaxWaterBill(nowpage+1);
}

// 查询系统桶装水费信息(桶装水费信息 type为2)
var requestAjaxWaterBill = function(pageNum){
	var type = parseInt(2); 
	console.log("请求第"+ pageNum + "页桶装水费信息");
	
//	$.ajax({
//		url:'/LD/userRoom/roomSearchBill.action',
//		type:'post',
//		contentType:'application/json',
//		data:'{"pageNum":"'+ pageNum +'","type":"'+ type +'"}',
//		dataType:'json',
//		success:function(data){
//			console.log(data);
			// 清空列表和页码
			$("#waterBillTbody").html("");
			$("#serviceWaterBillBottom").html("");
			
			for(var i=0; i<20; i++){
				$("#waterBillTbody").append("<tr><td><span>1</span></td><td>Ada</td><td>衣服</td><td>1</td>"+
						"<td>2016-3-30</td><td>2,000&nbsp;元</td><td>无</td></tr>");
			}	
			// 添加桶装水费 底部页码
			$("#serviceWaterBillBottom").append("<div class='bottom-page'>"+
		        	"<span class='page-before' onclick='requestBeforeWaterBill();'>上一页&nbsp;&nbsp;</span>"+
		        	"<span><input id='waterBilllist_nowpage' value='1' type='text' class='input_num'></span>"+
		        	"<span>&nbsp;/&nbsp;</span>"+
		        	"<span id='userlist_totalpage'>2</span>"+
		            "<span class='page-next' onclick='requestNextWaterBill();'>&nbsp;&nbsp;下一页</span>" +
		            "&nbsp;&nbsp;&nbsp;&nbsp;共83条记录</div>");
//		}
//	});
}

////////////////////////////////////////////////////////////////条件查询 桶装水费信息 start
//根据房间号 拉取第一页 桶装水费信息
var requestFirstWaterBillByRoomNum = function(element){
	$(".search-roomNo").css("height","0");
	var roomNum = $(element).parent().children("input").val();
	
	requestAjaxWaterBillByRoomNum(roomNum,parseInt(1));    
}

//根据房间号 拉取上一页 桶装水费信息
var requestBeforeWaterBillByRoomNum = function(){
	var roomNum = $(".searchRoomNum").text();
	//console.log("roomId:"+room_id);
	var nowpage = parseInt($("#waterBilllist_nowpage").val());
	if(nowpage == 1) return;
	
	requestAjaxWaterBillByRoomNum(roomNum,nowpage-1);
}

//根据房间号 拉取下一页 桶装水费信息（??当前处理，前端判断是否是最后一页）
var requestNextWaterBillByRoomNum = function(){
	var roomNum = $(".searchRoomNum").text();
	//console.log("roomId:"+room_id);
	var nowpage = parseInt($("#waterBilllist_nowpage").val());
	var totalpage = parseInt($("#waterBilllist_totalpage").text());
	if(nowpage == totalpage) return;
	
	requestAjaxWaterBillByRoomNum(roomNum,nowpage+1);
}


// 根据房间号查询系统桶装水费信息(桶装水费信息type为2)
var requestAjaxWaterBillByRoomNum = function(roomNum,pageNum){
	console.log("请求房间："+ roomNum +"  第" + pageNum + "页的桶装水费信息");
	
	var type = parseInt(2);
	
//	$.ajax({
//		url:'/LD/userRoom/roomSearchBill.action',
//		type:'post',
//		contentType:'application/json',
//		data:'{"type":"'+ type +'","pageNum":"'+ pageNum +'","roomNum":"'+ roomNum +'"}',
//		dataType:'json',
//		success:function(data){
//			console.log(data);
			
			$("#waterBillTbody").html("");
			$("#serviceWaterBillBottom").html("");
			
			for(var i=0; i<20; i++){
				$("#waterBillTbody").append("<tr><td><span>1</span></td><td>Ada</td><td>衣服</td><td>1</td>"+
						"<td>2016-3-30</td><td>2,000&nbsp;元</td><td>无</td></tr>");
			}	
			// 添加桶装水费 底部页码
			$("#serviceWaterBillBottom").append("<div class='searchRoomNum' style='display:none;'>"+ roomNum +"</div>");
			$("#serviceWaterBillBottom").append("<div class='bottom-page'>"+
		        	"<span class='page-before' onclick='requestBeforeWaterBillByRoomNum();'>上一页&nbsp;&nbsp;</span>"+
		        	"<span><input id='waterBilllist_nowpage' value='1' type='text' class='input_num'></span>"+
		        	"<span>&nbsp;/&nbsp;</span>"+
		        	"<span id='userlist_totalpage'>2</span>"+
		            "<span class='page-next' onclick='requestNextWaterBillByRoomNum();'>&nbsp;&nbsp;下一页</span>" +
		            "&nbsp;&nbsp;&nbsp;&nbsp;共83条记录</div>");
//		}
//	});
}
////////////////////////////////////////////////////////////////条件查询 桶装水费信息 end



