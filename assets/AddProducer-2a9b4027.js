import{u as h,i as y,j as _,r as D,a as l,b as a,k as n,d as o,f as T,w as Y,l as d,v as i,h as c}from"./index-e0410150.js";const x={class:"add"},g={key:0},G={class:"link"},V={key:1,class:"add__form"},P={class:"add__label",for:""},F={key:0,class:"add__error"},$={class:"add__label",for:""},C={key:0,class:"add__error"},U={class:"add__label",for:""},M={key:0,class:"add__error"},N={class:"add__label",for:""},w={key:0,class:"add__error"},B={class:"add__label",for:""},I={key:2,class:"add__success"},S={__name:"AddProducer",setup(j){const p=h(),u=y(!1),e=_({Title:"",Genre:"",Year:"",Director:"",Poster:""}),s=_({errorTitle:!1,errorGenre:!1,errorYear:!1,errorDirector:!1,errorPoster:!1}),f=()=>{m()&&(e.imdbID=Math.floor(Math.random()*1e4),u.value=!0,p.dispatch("addProducer",e))},m=()=>{if(e.Title.length<=2&&(s.errorTitle=!0),e.Genre.length<=2&&(s.errorGenre=!0),e.Year.length<=3&&(s.errorYear=!0),e.Director.length<=2&&(s.errorDirector=!0),e.Title.length>2&&e.Genre.length>2&&e.Year.length>3&&e.Director.length>2)return!0},v=()=>{b(),u.value=!1},b=()=>{e.Title="",e.Genre="",e.Year="",e.Director="",e.Poster=""};return(A,r)=>{const k=D("router-link");return l(),a("section",x,[u.value?n("",!0):(l(),a("h1",g,"Добавить режиссера")),o("div",G,[T(k,{to:"producer"},{default:Y(()=>[c(" Список режиссеров ")]),_:1})]),u.value?(l(),a("div",I,[c(" Режиссер успешно добавлен, перейдите в ваш список режиссеров. "),o("button",{onClick:r[10]||(r[10]=t=>v()),class:"add__btn"},"Добавить еще")])):(l(),a("div",V,[o("label",P,[d(o("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>e.Director=t),class:"add__input -error",type:"text",placeholder:"Режиссер",onFocus:r[1]||(r[1]=t=>s.errorDirector=!1)},null,544),[[i,e.Director]]),s.errorDirector?(l(),a("span",F,"Заполните поле")):n("",!0)]),o("label",$,[d(o("input",{"onUpdate:modelValue":r[2]||(r[2]=t=>e.Title=t),class:"add__input",type:"text",placeholder:"Название фильма",onFocus:r[3]||(r[3]=t=>s.errorTitle=!1)},null,544),[[i,e.Title]]),s.errorTitle?(l(),a("span",C,"Заполните поле")):n("",!0)]),o("label",U,[d(o("input",{"onUpdate:modelValue":r[4]||(r[4]=t=>e.Genre=t),class:"add__input",type:"text",placeholder:"Жанр фильма",onFocus:r[5]||(r[5]=t=>s.errorGenre=!1)},null,544),[[i,e.Genre]]),s.errorGenre?(l(),a("span",M,"Заполните поле")):n("",!0)]),o("label",N,[d(o("input",{"onUpdate:modelValue":r[6]||(r[6]=t=>e.Year=t),class:"add__input",type:"text",placeholder:"Год фильма",onInput:r[7]||(r[7]=t=>e.Year=e.Year.replace(/[^0-9]/g,"")),onFocus:r[8]||(r[8]=t=>s.errorYear=!1),maxlength:"4"},null,544),[[i,e.Year]]),s.errorYear?(l(),a("span",w,"Заполните поле")):n("",!0)]),o("label",B,[d(o("input",{"onUpdate:modelValue":r[9]||(r[9]=t=>e.Poster=t),class:"add__input",type:"text",placeholder:"Ссылка на картинку"},null,512),[[i,e.Poster]])]),o("button",{class:"add__btn",onClick:f}," Добавить")]))])}}};export{S as default};