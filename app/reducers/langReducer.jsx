import{SET_TO_ENGLISH, SET_TO_SCHINESE} from 'langActions';

export var getLang = ()=>{
    var lang = localStorage.getItem('lang');
    if(lang === undefined || lang === null){      
        lang = "en";
    } else if(lang.length === 0){
        lang = "en";
    }
    console.log('langReducer:>>getLang:',lang);
    return lang;
}

export var saveLang = (lang)=>{
    console.log('langReducer:saveLang:',lang);
    localStorage.setItem('lang', lang);
}

export var langReducer = (state=[], action) =>{
    console.log('langReducer:',state,action.type);
    switch(action.type){
        case SET_TO_ENGLISH:
            return Object.assign({}, state.lang, {lang:"en"}).lang;
        case SET_TO_SCHINESE:
            return Object.assign({}, state.lang, {lang:"zh"}).lang;
        default:
            return state;
    }
}