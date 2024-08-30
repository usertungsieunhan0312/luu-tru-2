const hoTen = document.querySelector(".hoten")
const sdt = document.querySelector(".dienthoai")
const diaChi = document.querySelector(".diachi")
const send = document.querySelector(".dathang")

send.addEventListener("click", (e) => {
    e.preventDefault();
  
    if (
      hoTen.value === "" ||
      sdt.value === "" ||
      diaCHi.value === "" 
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    alert("Gửi yêu cầu thành công");
    window.location.href = "3TOT.html";
  });
//count product
  function increaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity++;
    quantityInput.value = currentQuantity;
    updatePrice();
  }
  
  function decreaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityInput.value = currentQuantity;
      updatePrice();
    }
  }