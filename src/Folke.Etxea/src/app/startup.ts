import application from "bower_components/folke-core/folke";
import home from "components/home/home";
import * as identity from "bower_components/folke-identity/identity";
import * as defaultMenu from "bower_components/folke-menu/default-menu";
import * as localization from "bower_components/folke-ko-localization/folke-ko-localization";
import * as infiniteScroll from "bower_components/folke-ko-infinite-scroll/infinite-scroll";
import * as defaultComponents from "bower_components/folke-core/default-components";
import * as forum from 'bower_components/folke-forum/index';

localization.register();
defaultComponents.register();
defaultMenu.register();
infiniteScroll.register();
forum.register('bower_components/folke-forum');
identity.register('bower_components/folke-identity');
identity.registerMenu('bower_components/folke-identity');
forum.registerMenu('bower_components/folke-forum');
identity.registerAdministration('bower_components/folke-identity', 'Administrator');
identity.registerAdministrationMenu('Administrator');

home();
application.start();
