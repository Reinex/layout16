export default class Dialog {
    constructor(dialog) {
        this.dialog = dialog;
    }
    dialogRun(dialog) {
        document.querySelector('#show').onclick = function () {
            dialog.showModal();
            document.body.style.overflow = "hidden";
        };

        document.querySelector('#close').onclick = function () {
            dialog.close();
            document.body.style.overflow = "visible";
        }
    }
    sendRequest(dialog){
        dialog.querySelector('.menu-dialog__submit').onclick = function(){
            $.ajax({
                type:"GET",
                url: "https://httpbin.org/status/200",
                data: {email: $("#email").val(), pass: $("#password").val()},
                success: function () {
                    $('.menu-dialog .message.success').toggle()
                },
                error: function () {
                    $('.menu-dialog .message.failure').toggle()
                }
            })
        }
    }
}
