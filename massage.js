var APP_ID = 'd2t6d0VsduGp8pFKL1y1Evqo-gzGzoHsz';
var APP_KEY = 'X0GqAkgoTm9Qg4bk1oLF72h4';

AV.init({
appId: APP_ID,
appKey: APP_KEY
});

var myForm = document.querySelector('#postMessageForm')

//获取留言板数据
var query = new AV.Query('Message');
  query.find().then(function (messages) {
    for(i=0;i<messages.length;i++){
    console.log(messages[i].attributes.content)
    }
  }).then(function() {
    //alert('获取留言信息成功～')
  }, function (error) {
      //更新失败
  });

//提交留言板数据
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    var content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        content: content
    }).then(function(object) {
        console.log('提交成功了！');
        alert('留言成功哦～')
    })
})