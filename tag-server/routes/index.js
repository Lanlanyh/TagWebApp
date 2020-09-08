var express = require('express');

var router = express.Router();

var tags = [
  {tagColor:'#007bff',tagContent:'紧急'},
  {tagColor:'#e4606d',tagContent:'开会'},
  {tagColor:'#20c997',tagContent:'写报告'},
  {tagColor:'#ffdf7e',tagContent:'发邮件'}
]

router.get('/index', function(req, res, next) {
  res.send({tags});
});

router.post('/index', function(req, res, next) {
  const {tag} =req.body
  const newTag = {tagColor: tag.tagColor, tagContent: tag.tagContent}
  tags.push(tag)
  res.send({tags});
});

router.put('/index', function(req, res, next) {
  const {tag} =req.body
  tags.splice(tag.tagIndex,1,{tagColor: tag.tagColor, tagContent: tag.tagContent})
  res.send({tags});
});

router.post('/index/delete', function(req, res, next) {
  const {index} =req.body
  tags.splice(index,1)
  res.send({tags});
});


module.exports = router;
