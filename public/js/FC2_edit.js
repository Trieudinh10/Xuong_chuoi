///// CHƯƠNG TRÌNH CON NÚT NHẤN SỬA //////
// Tạo 1 tag tạm báo đang sửa dữ liệu
var Main_data_edditting = false;
function fn_EditBtt(){
    // Cho hiển thị nút nhấn lưu
    fn_DataEdit('btt_Main_Save','btt_Main_Edit');
    // Cho tag báo đang sửa dữ liệu lên giá trị true
    Main_data_edditting = true;
    // Kích hoạt chức năng sửa của các IO Field
    document.getElementById("kehoachbn").disabled = false;
    document.getElementById("kehoachtn").disabled = false;
    document.getElementById("kehoach9").disabled = false;
    document.getElementById("kehoach13").disabled = false;
    document.getElementById("kehoach18").disabled = false;
}
///// CHƯƠNG TRÌNH CON NÚT NHẤN LƯU //////
function fn_SaveBtt(){
// Cho hiển thị nút nhấn sửa
fn_DataEdit('btt_Main_Edit','btt_Main_Save');
    // Cho tag đang sửa dữ liệu về 0
    Main_data_edditting = false;
                        // Gửi dữ liệu cần sửa xuống PLC
    var data_edit_array = [document.getElementById('kehoachbn').value,
                            document.getElementById('kehoachtn').value,
                            document.getElementById('kehoach9').value,
                            document.getElementById('kehoach13').value,
                            document.getElementById('kehoach18').value];
    socket.emit('cmd_Main_Edit_Data', data_edit_array);
    alert('Dữ liệu đã được lưu!');
    // Vô hiệu hoá chức năng sửa của các IO Field
    document.getElementById("kehoachbn").disabled = true;
    document.getElementById("kehoachtn").disabled = true;
    document.getElementById("kehoach9").disabled = true;
    document.getElementById("kehoach13").disabled = true;
    document.getElementById("kehoach18").disabled = true;
}

// function fn_IOField_IO(tag, IOField, tofix) {
//     if (tofix == 0 & Main_data_edditting != true) {
//         document.getElementById(IOField).value = plcData[tag];
//     } else if (Main_data_edditting != true) {
//         document.getElementById(IOField).value = plcData[tag].toFixed(tofix);
//     }
// }

// Chương trình con đọc dữ liệu lên IO Field

function fn_IOField_IO(tag, IOField, tofix)
{
    socket.on(tag, function(data){
        if (tofix == 0 & Main_data_edditting != true)
        {
            document.getElementById(IOField).value = data;
        }
        else if(Main_data_edditting != true)
        {
            document.getElementById(IOField).value = data.toFixed(tofix);
        }
    });
}


// function assignValue() {
//     console.log('Hàm assignValue() được gọi.'); // Thêm dòng này
//     // Phần còn lại của mã của bạn...


//     const inputValue = document.getElementById('inputValue').value;

//     // Gán giá trị cho biến abd
//     Buong_ngaykh = inputValue;

//     // Hiển thị giá trị đã gán (bạn có thể bỏ qua dòng này nếu không muốn hiển thị)
//     console.log('Giá trị đã gán cho biến abd:', Buong_ngaykh);
// }



