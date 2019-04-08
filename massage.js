var APP_ID = 'd2t6d0VsduGp8pFKL1y1Evqo-gzGzoHsz';
var APP_KEY = 'X0GqAkgoTm9Qg4bk1oLF72h4';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
// 获取数据库中的数据
var query = new AV.Query('Message');//选中数据库中的仓库
query.find().then(function (messageData) {//.find()查找Message数据库中的数据
    console.log(messageData);
    for (let i = 0; 1 < messageData.length; i++) {
        var arr = messageData[i].attributes.content;
        var arrName = messageData[i].attributes.name;

        var li = document.createElement('li')
        li.innerText = `${arrName}:${arr}`;
        var messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    }//向页面添加获取的数据

    }).then(function (todos) {
        // 更新成功
    }, function (error) {
        // 异常处理
    });

var myForm = document.querySelector('#postMessageForm');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var content = myForm.querySelector('input[name = content]').value;//获取到用户输入的content
    var name = myForm.querySelector('input[name = name]').value;//获取到用户输入的name
    if(content == name){
        alert('请输入名字和内容，然后再提交留言哦～')
    }else{
        var Message = AV.Object.extend('Message');//数据库中的className
        var message = new Message();
        message.save({//数据库中的key:value
        content: `${content}`,
        name:name
        }).then(function (object) {
        // console.log(object);//object中储存的是数据的信息
        let li = document.createElement('li');
        li.innerText = `${object.attributes.name}:${object.attributes.content}`;
        let messageList = document.querySelector('#messageList');
        messageList.appendChild(li);
        myForm.querySelector('input[name = content]').value = ''
        // location.reload();如果在.then提交成功之后，不刷新页面 直接添加li
      });
    }
});



