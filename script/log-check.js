
var $do_submit = false;

// 绑定回车键
$('#loginBox').keydown(function(e){
	if(13 == event.keyCode){
		login();
		}
					});

	function login()
		{
			if (true == $do_submit)
				{
					return false;
				}

			var $pre_submit = '登录', $done_submit = '登录中...';
			var $username = $('#username').val(), $password = $('#password').val(), $keepalive = $('#rememberPwdIcon').val();
			$('#login_button').text($done_submit);
			$do_submit = true;

			// check
			if ('' == $username || '' == $password)
			{
				$('#err_tips').text('您输入的帐号名或密码错误，请重新输入！');
				$('#err_area').show();
				$('#login_button').text($pre_submit);
				$do_submit = false;
				return false;
			}

			var $login_data = {
				username:$username,
				password:$password,
				keepalive:$keepalive
			};
				$.post('/login', $login_data, function(rs){
				if(rs.errno == 200)
				{
					location.href = rs.url_route;
				}
				else
				{
					$('#err_tips').text(rs.error);
					$('#err_area').show();
					$('#login_button').text($pre_submit);
				}
					$do_submit = false;
				}, 'json');
		}

