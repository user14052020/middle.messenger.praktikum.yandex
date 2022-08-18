import menu from './menu.hbs';
import atorization_registration_input from './atorization_registration_input.hbs';
import profile_row from './profile_row.hbs';
import profile_change_row from './profile_change_row.hbs';
import profile_change_link from './profile_change_link.hbs';
import profile_ava from './profile_ava.hbs';
import profile_sidebar from './profile_sidebar.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerPartial('menu',menu);
Handlebars.registerPartial('atorization_registration_input',atorization_registration_input);
Handlebars.registerPartial('profile_row',profile_row);
Handlebars.registerPartial('profile_change_row',profile_change_row);
Handlebars.registerPartial('profile_change_link',profile_change_link);
Handlebars.registerPartial('profile_ava',profile_ava);
Handlebars.registerPartial('profile_sidebar',profile_sidebar);