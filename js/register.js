       window.onload = function() {
           let pho = document.querySelector('#phone')
           let yzm = document.querySelector('#yzm')
           let psw = document.querySelector('#pws')
           let surepsw = document.querySelector('#surepsw')
               //正则表达式
           let regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号
           let regmsg = /^\d{6}$/; //验证码
           let regpwd = /^[a-zA-Z0-9_-]{6,16}$/; //密码
           regexp(pho, regtel)
           regexp(yzm, regmsg)
           regexp(psw, regpwd)
               //封装验证函数
           function regexp(ele, reg) {
               ele.onblur = function() {
                   if (reg.test(this.value)) {
                       this.nextElementSibling.className = 'success';
                       this.nextElementSibling.innerHTML = '<i class="success_ico"></i>';
                   } else if (this.value === '') {
                       this.nextElementSibling.className = '';
                       this.nextElementSibling.innerHTML = '';
                   } else {
                       this.nextElementSibling.className = 'error';
                       this.nextElementSibling.innerHTML = '<i class="error_ico"></i> 格式不正确，请重新输入 ';
                   }
               }
           };
           //确认密码
           surepsw.onblur = function() {
               if (this.value === '') {
                   this.nextElementSibling.className = '';
                   this.nextElementSibling.innerHTML = '';
               } else if (this.value === psw.value) {
                   this.nextElementSibling.className = 'success';
                   this.nextElementSibling.innerHTML = '<i class="success_ico"></i>';
               } else {
                   this.nextElementSibling.className = 'error';
                   this.nextElementSibling.innerHTML = '<i class="error_ico"></i> 两次密码输入不一致';

               }
           }
       }