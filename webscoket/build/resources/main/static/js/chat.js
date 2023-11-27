const websocket = new WebSocket("ws://localhost:8080/ws/chat");
websocket.onmessage = onMessage;
websocket.onopen = onOpen;
websocket.onclose = onClose;

id = document.getElementById('id');

// 메시지 전송
function send() {
    let msg = document.getElementById("inputMsg");
    // console.log('msg: ' + msg.value);
    // websocket.send(msg.value);

    let data = JSON.stringify({
        id: id.value,
        msg: msg.value,
        timestamp: getTimeStamp()
    });
    websocket.send(data);
    msg.value = '';
}

// 메시지 수신
function onMessage(data) {
    let msg = JSON.parse(data.data);
    if(msg != null) {
        // 상대가 보낸 메시지일 때
        if (msg['id'] != id.value) {
            $('#chatTable').append($('<tr />').append($('<td />').append($('<span />', {
                style: "background-color: white; color: darkblue",
                text: msg['id']
            }))).append($('<td />', {
                text: msg['msg']
            })).append($('<td />', {
                text: msg['timestamp']
            })));
        } else {
            // 본인이 보낸 메시지일 때
            $('#chatTable').append($('<tr />').append($('<td />', {
                text: msg['id']
            })).append($('<td />', {
                text: msg['msg']
            })).append($('<td />', {
                text: msg['timestamp']
            })));
        }

    }
}

//채팅창에서 나갔을 때
function onClose(evt) {
    let data = JSON.stringify({
        id: id.value,
        msg: id.value + "님이 방을 나가셨습니다.",
        timestamp: getTimeStamp()
    });
    websocket.send(data);
}

//채팅창에 들어왔을 때
function onOpen(evt) {
    let data = JSON.stringify({
        id: id.value,
        msg: id.value + "님이 방을 입장하셨습니다.",
        timestamp: getTimeStamp()
    });
    websocket.send(data);
}