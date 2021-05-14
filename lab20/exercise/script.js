function val() {
  let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let error = document.getElementById("error_message");
  let text;
  error.style.padding = "10px";

  if (name.length < 6) {
    text = "Tên phải nhiều hơn 6 ký tự";
    error.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Địa chỉ email của bạn không hợp lệ.";
    error_message.innerHTML = text;
    return false;
    }
  if (phone == "") {
      text = "Bạn chưa nhập số điện thoại";
      error.innerHTML = text;
      return false;
    }
  if (pass.length < 8) {
    text = "Mật khẩu phải nhiều hơn 8 ký tự ";
    error.innerHTML = text;
    return false;
  }
  if (pass != cpass) {
    text = "Mật khẩu không trùng với mật khẩu trên";
    error.innerHTML = text;
    return false;
  }
  var frm = document.getElementById("myform");
  frm.style.display = "none";
  var hid = document.getElementById("hid");
  hid.style.display = "none";
  var disp = document.getElementById("success");
  disp.style.display = "block";
  error.style.padding = "0px";
  return false;
}
