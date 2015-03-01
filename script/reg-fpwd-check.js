function change_style(obj1,obj2,obj3){
    obj1.style.color = '#D60A0A';
    obj2.style.color = '#D60A0A';
    obj3.style.border = "1px solid red";
}
function restore_style(obj1,obj2,obj3){
    obj1.style.color = '#595959';
    obj2.style.color = '#595959';
    obj3.style.border = "1px solid #595959";
}

function check_username(){
     var reg = /^[A-Za-z_0-9]+$/;
     var us = document.getElementById("us");
     var user_span = document.getElementById("user-span");
     var us_name = document.getElementById("username");
     var user_name = document.regform.username.value;
     if(user_name == " " || user_name.length < 6 || user_name.length > 16 || !reg.test(user_name)) {
        change_style(us,user_span,us_name);
        return false;
	 }
     restore_style(us,user_span,us_name);
     return true;
}
           
function check_password(){
    var pa = document.getElementById("pa");
	var pass_span1 = document.getElementById("pass-span1");
    var pass1 = document.getElementById("password1");
    var password1 = document.regform.password1.value;
    if(password1 == " " || password1.length < 6 || password1.length > 16) {
    	change_style(pa,pass_span1,pass1);
        return false;
    }
    restore_style(pa,pass_span1,pass1);
    return true;
}
            
function check_repassword(){
    var repa = document.getElementById("repa");
	var pass_span2 = document.getElementById("pass-span2");
    var pass1 = document.getElementById("password1");
    var pass2 = document.getElementById("password2");
    var password1 = document.regform.password1.value;
    var password2 = document.regform.password2.value;
    if(password2 == " ") {
    	pass_span2.innerHTML = "* 请再次输入密码";
        change_style(repa,pass_span2,pass2);
        return false;
    }
    if(password1 != password2) {
    	pass_span2.innerHTML = "* 第二次输入的密码与第一次输入的密码不一致";
        change_style(repa,pass_span2,pass2);
        return false;
    }
    restore_style(repa,pass_span2,pass2);
    pass_span2.innerHTML = " ";
    return true;
}

function check_email(){
    var email_span = document.getElementById("email-span");
    var em = document.getElementById("em");
    var email = document.regform.email.value;
    var e_mail = document.getElementById("email");
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (email.length == 0) {
        change_style(em,email_span,e_mail);
        return false;
    }
    if(!reg.test(email)){
        email_span.innerHTML = "* 邮箱格式不正确";
        change_style(em,email_span,e_mail);
        return false;
    }
    email_span.innerHTML = "* 邮箱将与支付及优惠相关，请填写正确的邮箱";
    restore_style(em,email_span,e_mail);
    return true;
}

function check_mphone(){
    var mphone_span = document.getElementById("mphone-span");
    var mp = document.getElementById("mp");
    var mphone = document.regform.mphone.value;
    var m_phone = document.getElementById("mphone");
    var reg = /(13|15)\d{9}$/;
    if(mphone == "") {
        change_style(mp,mphone_span,m_phone);
        return false;
    }
    if(!reg.test(mphone)) {
        mphone_span.innerHTML = "* 输入的手机号错误";
        change_style(mp,mphone_span,m_phone);
        return false;
    }
    mphone_span.innerHTML = "* 请输入正确的手机号码";
    restore_style(mp,mphone_span,m_phone);
    return true;
}

function check_vercode(){
    var vercode = document.getElementById("vercode");
    var v_code = document.getElementById("vcode");
    var vcode_span = document.getElementById("vcode_span"); 
    var ver_code = document.regform.vcode.value;
    if(ver_code == "") {
        vcode_span.innerHTML = "* 请输入审核码";
        change_style(vercode,vcode_span,v_code);
        return false;
    }
    restore_style(vercode,vcode_span,v_code);
    vcode_span.innerHTML = "* 审核码是找回密码的凭证";
    return true;

}

function check(){
	if (check_username() && check_password() && check_repassword() && check_email() && check_mphone() && scheck_vercode()) {
    	return true;
    }
    else {
        alert("亲！你还没完成注册呢！");
        return false;
    }
}

