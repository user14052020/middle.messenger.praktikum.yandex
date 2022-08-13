// import templateFunction from './template.hbs';
// import template from './template.hbs';
// document.body.innerHTML = templateFunction();

// src/index.js
// import './pages/home/modules/login/style.css'; 
// import {sum} from './modules/sum';

// const root = document.querySelector('#root');
// root.textContent = sum(80, -1).toString();
const Handlebars = require("handlebars");
const inputs = { 
				"forms":[{
						"formName":"Логин",		
						"inputs":[
							        {
							            "inputDesctription": "Логин",
							            "inputName": "login"
							        }, 
							        {
							            "inputDesctription": "Пароль",
							            "inputName": "password"
							        }, 
							    ]
						}]				    
						
			};

// var template = document.getElementById('template').innerHTML;
const template = `
		{{#each forms}}
			<h1>{{formName}}</h1>
    		{{#each inputs}}
       			<input type="text" name="{{inputName}}">
          		<label>{{inputName}}</label>
          	{{/each}} 
        {{/each}}     
`;

// //Compile the template
var compiled_template = Handlebars.compile(template)(inputs);


// //Overwrite the contents of #target with the renderer HTML
document.getElementById('target').innerHTML = compiled_template;