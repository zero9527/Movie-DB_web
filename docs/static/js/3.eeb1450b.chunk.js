(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return m}));var i=a(36),n=a.n(i);function o(e){return void 0===e&&(e={}),n.a.get("/v2/movie/in_theaters",{params:e})}function r(e){return void 0===e&&(e={}),n.a.get("/v2/movie/coming_soon",{params:e})}function c(e){return void 0===e&&(e={}),n.a.get("/v2/movie/top250",{params:e})}function m(e){var t=(void 0===e?{}:e).id,a=void 0===t?"":t;return n.a.get("/v2/movie/subject/"+a)}},156:function(e,t,a){"use strict";var i=a(4),n=a(0),o=a(157),r=a.n(o),c=n.useState;t.a=function(e){var t=e.readonly,a=void 0!==t&&t,o=e.score,m=(Object(i.e)(e,["readonly","score"]),c(o||0)),s=m[0],l=m[1];return n.createElement("section",{className:r.a["m-star"]},a?n.createElement("div",{className:r.a["star-wrappwer"]},n.createElement("div",{className:r.a["star-score"],style:{width:Number(o)/10*100+"%"}},n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"})),n.createElement("div",{className:r.a["star-bg"]},n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}))):n.createElement("div",{className:r.a["star-bg"]},[0,1,2,3,4].map((function(e){return n.createElement("i",{key:e,onClick:function(){return l(e+1)},className:"iconfont icon-changyongtubiao-mianxing-11 "+(s>=e+1?r.a["star-active"]:"")})}))))}},157:function(e,t,a){var i=a(158);"string"==typeof i&&(i=[[e.i,i,""]]);a(80)(i,{hmr:!0,transform:void 0}),i.locals&&(e.exports=i.locals)},158:function(e,t,a){(t=e.exports=a(79)(void 0)).push([e.i,".m-star__12tOHL{position:relative;display:inline-block}.m-star__12tOHL .star-wrappwer__3L7oFC{position:relative;display:inline-block;vertical-align:middle;letter-spacing:0}.m-star__12tOHL .star-wrappwer__3L7oFC .star-score__36Ya4J{position:absolute;left:0;top:0;color:orange;overflow:hidden}.m-star__12tOHL .star-wrappwer__3L7oFC .score__d--UZk{margin-left:4px;vertical-align:middle}.m-star__12tOHL .star-score__36Ya4J i,.m-star__12tOHL .star-bg__225AWC i{margin-left:-0.5px}.m-star__12tOHL .star-bg__225AWC{color:#ddd}.m-star__12tOHL .star-active__1l6jeE{color:orange}\n",""]),t.locals={"m-star":"m-star__12tOHL","star-wrappwer":"star-wrappwer__3L7oFC","star-score":"star-score__36Ya4J",score:"score__d--UZk","star-bg":"star-bg__225AWC","star-active":"star-active__1l6jeE"}},171:function(e,t,a){var i=a(172);"string"==typeof i&&(i=[[e.i,i,""]]);a(80)(i,{hmr:!0,transform:void 0}),i.locals&&(e.exports=i.locals)},172:function(e,t,a){(t=e.exports=a(79)(void 0)).push([e.i,".movie-detail__HCdfNa{width:100%;height:100%}.desc{color:#ccc;font-size:12px}.movie-header__1pN4zC{position:relative;padding-top:20px;padding-bottom:20px;color:#fff;background:#7f6f5b}.movie-top__8Yu0Yx{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.movie-top__8Yu0Yx .movie-img__74s9K7{-ms-flex:120px 0;flex:120px 0;-ms-flex-negative:0;flex-shrink:0;height:160px;position:relative;margin-right:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}.movie-top__8Yu0Yx .movie-img__74s9K7 .img__28KxEi{width:100%}.movie-top__8Yu0Yx .movie-top-content__3THX-V{width:100%}.movie-top__8Yu0Yx .movie-top-content__3THX-V .movie-title__2vT-2y{font-size:22px}.movie-score__oBwCjp{margin-top:10px;padding:14px;border-radius:6px;font-size:12px;background:rgba(0,0,0,0.1)}.movie-score__oBwCjp .score-wrapper__1SHwNP{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.movie-score__oBwCjp .score__1Gnevk{margin-right:10px;font-size:36px}.block-title__1uHetr{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:10px;font-size:16px;color:#999}.block-title__1uHetr .desc__16yNUh{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.scroll-x__1adgU-{white-space:nowrap;overflow:auto hidden}.movie-info__2ejLMx .more__321uZk{float:right;color:#42bd56}.movie-actor__2nydwh .actor-item__K08ILr{display:inline-block;margin-right:10px;text-align:center}.movie-actor__2nydwh .actor-item__K08ILr img{width:96px;height:128px;border-radius:4px;background:#eee}.movie-pic-item__2tZ00r{display:inline-block}.movie-pic-item__2tZ00r img{width:160px;height:120px;margin-right:6px;border-radius:4px;background:#eee}.comment-item__2VpUae{padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #eee}.comment-item__2VpUae .comment-title__2xYzbl{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:10px}.comment-item__2VpUae .comment-title__2xYzbl>span{margin-right:6px}.comment-item__2VpUae .comment-title__2xYzbl>img{width:20px;height:20px;margin-right:6px;border-radius:20px;background:#eee}\n",""]),t.locals={"movie-detail":"movie-detail__HCdfNa","movie-header":"movie-header__1pN4zC","movie-top":"movie-top__8Yu0Yx","movie-img":"movie-img__74s9K7",img:"img__28KxEi","movie-top-content":"movie-top-content__3THX-V","movie-title":"movie-title__2vT-2y","movie-score":"movie-score__oBwCjp","score-wrapper":"score-wrapper__1SHwNP",score:"score__1Gnevk","block-title":"block-title__1uHetr",desc:"desc__16yNUh","scroll-x":"scroll-x__1adgU-","movie-info":"movie-info__2ejLMx",more:"more__321uZk","movie-actor":"movie-actor__2nydwh","actor-item":"actor-item__K08ILr","movie-pic-item":"movie-pic-item__2tZ00r","comment-item":"comment-item__2VpUae","comment-title":"comment-title__2xYzbl"}},175:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(155),o=a(156),r=a(171),c=a.n(r),m=i.useState,s=i.useEffect,l={id:"",images:{medium:""},title:"",original_title:"",summary:"",countries:[],genres:[],pubdates:[],durations:[],rating:{average:""},ratings_count:"",directors:[{name:"",avatars:{medium:""}}],casts:[{name:"",avatars:{medium:""}}],photos:[{image:""}],popular_reviews:[{summary:"",author:{avatar:"",name:""},rating:{value:0}}]};t.default=function(e){var t=m(!1),a=t[0],r=t[1],d=m(l),_=d[0],p=d[1],g=m(!1),v=g[0],u=g[1];return s((function(){!function(e){a||(r(!0),Object(n.b)({id:e}).then((function(e){location.hash.includes("/movie-detail/")&&(p(e),r(!1))})).catch((function(e){r(!1)})))}(e.match.params.id)}),[]),i.createElement("div",{className:""+c.a["movie-detail"]},i.createElement("section",{className:c.a["movie-header"]+" center-content"},i.createElement("div",{className:c.a["movie-top"]},i.createElement("div",{className:c.a["movie-img"]+" "+(a&&"loading-shink")},a?i.createElement("div",{className:c.a.img}):i.createElement("img",{className:c.a.img,src:_.images.medium,alt:"loading"})),i.createElement("div",{className:c.a["movie-top-content"]},i.createElement("div",{className:c.a["movie-title"]+" "+(a&&"loading-shink")},_.title||"..."),i.createElement("div",{className:""+(a&&"loading-shink")},_.original_title),i.createElement("div",{className:"desc "+(a&&"loading-shink"),style:{margin:"6px 0 12px"}},_.countries," /",_.genres," /",_.pubdates," / 片长",_.durations[0]))),i.createElement("div",{className:c.a["movie-score"]},i.createElement("div",null,"豆瓣评分 TM"),i.createElement("div",{className:c.a["score-wrapper"]},i.createElement("span",{className:c.a.score},_.rating.average||"0.0"),i.createElement("div",null,i.createElement(o.a,{score:_.rating.average,readonly:!0}),i.createElement("div",{className:"desc"},_.ratings_count,"人评价"))))),i.createElement("section",{className:c.a["movie-info"]+" center-content"},i.createElement("div",{className:c.a["block-title"]},"剧情简介"),i.createElement("span",null,v?_.summary:_.summary.substr(0,60)),!a&&!v&&i.createElement("span",{className:c.a.more,onClick:function(){return u(!0)}},"展开")),i.createElement("section",{className:c.a["movie-actor"]+" center-content"},i.createElement("div",{className:c.a["block-title"]},"演职员"),i.createElement("div",{className:c.a["scroll-x"],style:{display:a?"none":""}},_.directors.map((function(e){return i.createElement("div",{className:c.a["actor-item"],key:e.avatars.medium},i.createElement("img",{src:e.avatars.medium}),i.createElement("div",null,e.name),i.createElement("span",{className:"desc"},"导演"))})),_.casts.map((function(e){return i.createElement("div",{className:c.a["actor-item"],key:e.avatars.medium},i.createElement("img",{src:e.avatars.medium,alt:"loading"}),i.createElement("div",null,e.name),i.createElement("span",{className:"desc"},"演员"))})))),i.createElement("section",{className:c.a["movie-pic"]+" center-content"},i.createElement("div",{className:c.a["block-title"]},"预告片 / 剧照"),i.createElement("div",{className:c.a["scroll-x"],style:{display:a?"none":""}},_.photos.map((function(e){return i.createElement("div",{className:c.a["movie-pic-item"],key:e.image},i.createElement("img",{src:e.image,alt:"loading"}))})))),i.createElement("section",{className:c.a["movie-comment"]+" center-content"},i.createElement("div",{className:c.a["block-title"]},"影评"),i.createElement("div",{style:{display:a?"none":""}},_.popular_reviews.map((function(e,t){return i.createElement("div",{className:c.a["comment-item"],key:t},i.createElement("div",{className:c.a["comment-title"]+" desc"},i.createElement("img",{src:e.author.avatar,alt:"loading"}),i.createElement("span",null,e.author.name),i.createElement(o.a,{score:""+2*e.rating.value,readonly:!0})),i.createElement("div",null,e.summary))})))))}}}]);