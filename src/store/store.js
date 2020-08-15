import { createStore } from 'redux';
import MainReducer from '../reducers/MainReducer';


const store = createStore(MainReducer,{
    roundState:'not started',
    words:["actinomorphy","areocentric","autoharps","langlaufers","sceptred","thyroxine","levelled","gazers","overanxiety","phenologically","browed","waifs","supersessions","invoker","racialist","declarant","rubricates","artlessnesses","benthal","diverge","minicamp","eluates","methenamines","laterites","epicardium","contenting","tallaging","nonhomosexual","contemplator","habituated","chicaneries","yattered","psyching","chamferers","shines","hyperploidy","prefiling","slobberer","conscripts","oilmen","romanising","sympathectomies","scramjets","sinologues","provenances","repechages","nonlawyers","moussed","premaxillas","cyanohydrins"],
    position:0,
    wpm:0,
    accuracy:0
});

export default store;