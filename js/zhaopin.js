/*
* @Author: Administrator
* @Date:   2017-04-29 13:57:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-06 09:40:29
*/

$(document).ready(function(){
	// 日期
    	var date = new Date();
    	var year = date.getFullYear();
    	var month = date.getMonth();
    	var day = date.getDate();
    	var time = year+"年"+(month+1)+"月"+day+"日";
    	document.getElementById('date').innerHTML=time;
    //导航
    $('.nav a').eq(0).css({'background':'#F78A00',
					});
	$('.nav a').click(function(){
		$('.nav a').eq($(this).index()).css({'background':'#F78A00'})
		.siblings('a').css({'background':'#0B7722'});
			});
	// 轮播图
	var num = 1; 
	var timer= null;
	var count= $('.banner_img img').length;
	list(0);
	$('.banner_img img').eq(0).show();
	$('.right_btn').click(function(){
 		if (num==count) {
 			$('.banner_img img').hide();
 			$('.banner_img img').eq(0).show();
 				num=1;
				}else{
				$('.banner_img img').hide();
				$('.banner_img img').eq(num).show();
				num++;
			}
			list(num-1);
		});
	function list(index){
	 	$('.banner ul li').eq(index).addClass('current')
	 	.siblings('li').removeClass('current');}
	 $('.banner_left ul li').click(function(){
 			var index= $(this).index();
 			$('.banner_img img').eq(index).show()
 			.siblings('.banner_img img').hide();
			list(index);
			num=index+1
		})
	 timer= setInterval("$('.right_btn').click()",3000);
		$('.banner').mouseover(function(){
			clearInterval(timer);
		});
 		$('.banner').mouseout(function(){
		timer= setInterval("$('.right_btn').click()",3000);
		});

	 // 缤纷校园
	$(function() {
				$('.center_6_left div').hide();
				$('.center_6_left div:first').show();
				$('.center_6_left li a').css('color', '#ED3346');
				$('.center_6_left.aa').css({'background':'#F0F0F0',
					'border':'1px solid #ccc'});
				$('.center_6_left .aa').eq(0).css({'background':'white',
					'border-bottom':'1px solid white'});
				})
	$(function() {
				$('.center_6_right div').hide();
				$('.center_6_right div:first').show();
				$('.center_6_right li a').css('color', '#ED3346');
				$('.center_6_right.aa').css({'background':'#F0F0F0',
					'border':'1px solid #ccc'});
				$('.center_6_right .aa').eq(0).css({'background':'white',
					'border-bottom':'1px solid white'});
				})


	
	})