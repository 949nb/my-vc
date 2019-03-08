var APP_ID = 'd2t6d0VsduGp8pFKL1y1Evqo-gzGzoHsz';
var APP_KEY = 'X0GqAkgoTm9Qg4bk1oLF72h4';

AV.init({
appId: APP_ID,
appKey: APP_KEY
});

var myForm = document.querySelector('#postMessageForm')

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