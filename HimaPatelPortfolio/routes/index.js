var express = require('express');
var router = express.Router();
var hbs = require('hbs');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hima Patel' });
});

router.get('/about', (req,res,next) =>{
  res.render('about', {title:'About'})
});

/* router.get('/project', (req,res,next) =>{
  res.render('project', {title:'Project'})
});
 */
router.get('/contact', (req,res,next) =>{
  res.render('contact', {title:'Contact'})
});

const navigation = hbs.compile(fs.readFileSync('C:/Program Files/nodejs/HimaPatel/HimaPatelPortfolio/views/partials/navigation.hbs').toString('utf-8'));
hbs.registerPartial('navigation', navigation)

const about = hbs.compile(fs.readFileSync('C:/Program Files/nodejs/HimaPatel/HimaPatelPortfolio/views/partials/about.hbs').toString('utf-8'));
hbs.registerPartial('about', about)

const experience = hbs.compile(fs.readFileSync('C:/Program Files/nodejs/HimaPatel/HimaPatelPortfolio/views/partials/experience.hbs').toString('utf-8'));
hbs.registerPartial('experience', experience)

const education = hbs.compile(fs.readFileSync('C:/Program Files/nodejs/HimaPatel/HimaPatelPortfolio/views/partials/education.hbs').toString('utf-8'));
hbs.registerPartial('education', education)

const project = hbs.compile(fs.readFileSync('C:/Program Files/nodejs/HimaPatel/HimaPatelPortfolio/views/partials/project.hbs').toString('utf-8'));
hbs.registerPartial('project', project)

const contact = hbs.compile(fs.readFileSync('C:/Program Files/nodejs/HimaPatel/HimaPatelPortfolio/views/partials/contact.hbs').toString('utf-8'));
hbs.registerPartial('contact', contact)

module.exports = router;
