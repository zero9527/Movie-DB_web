(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return m}));var i=a(38),n=a.n(i);function o(e){return void 0===e&&(e={}),n.a.get("/v2/movie/in_theaters",{params:e})}function r(e){return void 0===e&&(e={}),n.a.get("/v2/movie/coming_soon",{params:e})}function c(e){return void 0===e&&(e={}),n.a.get("/v2/movie/top250",{params:e})}function m(e){var t=(void 0===e?{}:e).id,a=void 0===t?"":t;return n.a.get("/v2/movie/subject/"+a)}},144:function(e,t,a){"use strict";var i=a(9),n=a(0),o=a(145),r=a.n(o),c=n.useState;t.a=function(e){var t=e.readonly,a=void 0!==t&&t,o=e.score,m=(Object(i.f)(e,["readonly","score"]),c(o||0)),s=m[0],l=m[1];return n.createElement("section",{className:r.a["m-star"]},a?n.createElement("div",{className:r.a["star-wrappwer"]},n.createElement("div",{className:r.a["star-score"],style:{width:Number(o)/10*100+"%"}},n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"})),n.createElement("div",{className:r.a["star-bg"]},n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}),n.createElement("i",{className:"iconfont icon-changyongtubiao-mianxing-11"}))):n.createElement("div",{className:r.a["star-bg"]},[0,1,2,3,4].map((function(e){return n.createElement("i",{key:e,onClick:function(){return l(e+1)},className:"iconfont icon-changyongtubiao-mianxing-11 "+(s>=e+1?r.a["star-active"]:"")})}))))}},145:function(e,t,a){var i=a(146);"string"==typeof i&&(i=[[e.i,i,""]]);a(78)(i,{hmr:!0,transform:void 0}),i.locals&&(e.exports=i.locals)},146:function(e,t,a){(t=e.exports=a(77)(void 0)).push([e.i,".m-star__12tOHL{position:relative;display:inline-block}.m-star__12tOHL .star-wrappwer__3L7oFC{position:relative;display:inline-block;vertical-align:middle;letter-spacing:0}.m-star__12tOHL .star-wrappwer__3L7oFC .star-score__36Ya4J{position:absolute;left:0;top:0;color:orange;overflow:hidden}.m-star__12tOHL .star-wrappwer__3L7oFC .score__d--UZk{margin-left:4px;vertical-align:middle}.m-star__12tOHL .star-score__36Ya4J i,.m-star__12tOHL .star-bg__225AWC i{margin-left:-0.5px}.m-star__12tOHL .star-bg__225AWC{color:#ddd}.m-star__12tOHL .star-active__1l6jeE{color:orange}\n",""]),t.locals={"m-star":"m-star__12tOHL","star-wrappwer":"star-wrappwer__3L7oFC","star-score":"star-score__36Ya4J",score:"score__d--UZk","star-bg":"star-bg__225AWC","star-active":"star-active__1l6jeE"}},169:function(e,t,a){var i=a(170);"string"==typeof i&&(i=[[e.i,i,""]]);a(78)(i,{hmr:!0,transform:void 0}),i.locals&&(e.exports=i.locals)},170:function(e,t,a){(t=e.exports=a(77)(void 0)).push([e.i,".movie-detail__HCdfNa{width:100%;height:100%}.desc{color:#ccc;font-size:12px}.movie-header__1pN4zC{position:relative;padding-top:20px;padding-bottom:20px;color:#fff;background:#7f6f5b}.movie-top__8Yu0Yx{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.movie-top__8Yu0Yx .movie-img__74s9K7{-ms-flex:120px 0;flex:120px 0;-ms-flex-negative:0;flex-shrink:0;height:160px;position:relative;margin-right:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}.movie-top__8Yu0Yx .movie-img__74s9K7 .img__28KxEi{width:100%}.movie-top__8Yu0Yx .movie-top-content__3THX-V{width:100%}.movie-top__8Yu0Yx .movie-top-content__3THX-V .movie-title__2vT-2y{font-size:22px}.movie-score__oBwCjp{margin-top:10px;padding:14px;border-radius:6px;font-size:12px;background:rgba(0,0,0,0.1)}.movie-score__oBwCjp .score-wrapper__1SHwNP{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.movie-score__oBwCjp .score__1Gnevk{margin-right:10px;font-size:36px}.block-title__1uHetr{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:10px;font-size:16px;color:#999}.block-title__1uHetr .desc__16yNUh{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.scroll-x__1adgU-{white-space:nowrap;overflow:auto hidden}.movie-info__2ejLMx .content__2onC6Y{height:60px;line-height:20px;display:inline-block;overflow:hidden}.movie-info__2ejLMx .more__321uZk{position:absolute;bottom:14px;right:15px;padding:2px 5px;color:#42bd56;background-color:#fff;cursor:pointer}.movie-info__2ejLMx .more__321uZk::after{content:'';position:absolute;top:0;left:0;margin-left:-60px;width:60px;height:20px;display:block;background:-webkit-gradient(linear, left top, right top, from(transparent), to(#fff));background:-webkit-linear-gradient(left, transparent, #fff);background:-o-linear-gradient(left, transparent, #fff);background:linear-gradient(90deg, transparent, #fff)}.movie-actor__2nydwh .actor-item__K08ILr{position:relative;display:inline-block;margin-right:10px;text-align:center}.movie-actor__2nydwh .actor-item__K08ILr img{width:96px;height:128px;border-radius:4px;background:#eee}.movie-actor__2nydwh .actor-item__K08ILr .actor-name__vLmdKf{margin:4px 0;font-size:12px}.movie-actor__2nydwh .actor-item__K08ILr .no-img__2A9dqU{width:96px;height:128px;line-height:128px;position:absolute;top:0;left:0;font-size:10px;text-align:center;color:#ccc;background-color:#f6f6f6}.movie-pic-item__2tZ00r{display:inline-block}.movie-pic-item__2tZ00r img{width:160px;height:120px;margin-right:6px;border-radius:4px;background:#eee}.comment-item__2VpUae{padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #eee}.comment-item__2VpUae .comment-title__2xYzbl{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:10px}.comment-item__2VpUae .comment-title__2xYzbl>span{margin-right:6px}.comment-item__2VpUae .comment-title__2xYzbl>img{width:20px;height:20px;margin-right:6px;border-radius:20px;background:#eee}.comment-item__2VpUae .comment-content__3IO4Dk{word-break:break-word}\n",""]),t.locals={"movie-detail":"movie-detail__HCdfNa","movie-header":"movie-header__1pN4zC","movie-top":"movie-top__8Yu0Yx","movie-img":"movie-img__74s9K7",img:"img__28KxEi","movie-top-content":"movie-top-content__3THX-V","movie-title":"movie-title__2vT-2y","movie-score":"movie-score__oBwCjp","score-wrapper":"score-wrapper__1SHwNP",score:"score__1Gnevk","block-title":"block-title__1uHetr",desc:"desc__16yNUh","scroll-x":"scroll-x__1adgU-","movie-info":"movie-info__2ejLMx",content:"content__2onC6Y",more:"more__321uZk","movie-actor":"movie-actor__2nydwh","actor-item":"actor-item__K08ILr","actor-name":"actor-name__vLmdKf","no-img":"no-img__2A9dqU","movie-pic-item":"movie-pic-item__2tZ00r","comment-item":"comment-item__2VpUae","comment-title":"comment-title__2xYzbl","comment-content":"comment-content__3IO4Dk"}},177:function(e,t,a){"use strict";a.r(t),a(79);var i=a(56),n=a.n(i),o=a(0),r=a(9),c=o.useEffect,m=o.useState,s=function(e){var t=m(!1),a=t[0],i=t[1],n=m(!1),o=n[0],s=n[1],l=m(),_=l[0],d=l[1];return c((function(){var t=!1;return Object(r.b)(void 0,void 0,void 0,(function(){var a;return Object(r.e)(this,(function(n){switch(n.label){case 0:i(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,e];case 2:return a=n.sent(),t||(i(!1),d(a)),[3,4];case 3:return n.sent(),s(!0),[3,4];case 4:return[2]}}))})),function(){t=!0}}),[]),{isLoading:a,isError:o,resData:_}},l=a(5),_=a(143),d=a(144),p=a(169),g=a.n(p),v=o.useState,u=o.useEffect,f={id:"",images:{medium:""},title:"",original_title:"",summary:"",countries:[],genres:[],pubdates:[],durations:[],rating:{average:""},ratings_count:"",directors:[{name:"",avatars:{medium:""}}],casts:[{name:"",avatars:{medium:""}}],photos:[{image:""}],popular_reviews:[{summary:"",author:{avatar:"",name:""},rating:{value:0}}]};t.default=function(){var e=v(!1),t=e[0],a=e[1],i=v(f),r=i[0],c=i[1],m=Object(l.g)(),p=s(Object(_.b)({id:m.id})),x=p.isLoading,b=p.isError,h=p.resData;return u((function(){h&&c(h)}),[h]),u((function(){b&&n.a.fail("出错了，请稍后再试！")}),[b]),o.createElement("div",{className:""+g.a["movie-detail"]},o.createElement("section",{className:g.a["movie-header"]+" center-content"},o.createElement("div",{className:g.a["movie-top"]},o.createElement("div",{className:g.a["movie-img"]+" "+(x&&"loading-shink")},x?o.createElement("div",{className:g.a.img}):o.createElement("img",{className:g.a.img,src:r.images.medium,alt:"loading"})),o.createElement("div",{className:g.a["movie-top-content"]},o.createElement("div",{className:g.a["movie-title"]+" "+(x&&"loading-shink")},r.title||"..."),o.createElement("div",{className:""+(x&&"loading-shink")},r.original_title),o.createElement("div",{className:"desc "+(x&&"loading-shink"),style:{margin:"6px 0 12px"}},r.countries.toString()," / ",r.genres.toString()," / ",r.pubdates.toString()," / 片长",r.durations[0]))),o.createElement("div",{className:g.a["movie-score"]},o.createElement("div",null,"豆瓣评分 TM"),o.createElement("div",{className:g.a["score-wrapper"]},o.createElement("span",{className:g.a.score},r.rating.average||"0.0"),o.createElement("div",null,o.createElement(d.a,{score:r.rating.average,readonly:!0}),o.createElement("div",{className:"desc"},r.ratings_count,"人评价"))))),o.createElement("section",{className:g.a["movie-info"]+" center-content"},o.createElement("div",{className:g.a["block-title"]},"剧情简介"),o.createElement("div",{className:g.a.content,style:{height:t?"auto":"60px"}},r.summary),!x&&!t&&o.createElement("span",{className:g.a.more,onClick:function(){return a(!0)}},"展开")),o.createElement("section",{className:g.a["movie-actor"]+" center-content"},o.createElement("div",{className:g.a["block-title"]},"演职员"),o.createElement("div",{className:g.a["scroll-x"],style:{display:x?"none":""}},r.directors.map((function(e,t){return o.createElement("div",{className:g.a["actor-item"],key:t},o.createElement("img",{src:e.avatars?e.avatars.medium:""}),!e.avatars&&o.createElement("span",{className:g.a["no-img"]},"没有图片"),o.createElement("div",{className:g.a["actor-name"]},e.name),o.createElement("span",{className:"desc"},"导演"))})),r.casts.map((function(e,t){return o.createElement("div",{className:g.a["actor-item"],key:t},o.createElement("img",{src:e.avatars?e.avatars.medium:""}),!e.avatars&&o.createElement("span",{className:g.a["no-img"]},"没有图片"),o.createElement("div",{className:g.a["actor-name"]},e.name),o.createElement("span",{className:"desc"},"演员"))})))),o.createElement("section",{className:"movie-pic center-content"},o.createElement("div",{className:g.a["block-title"]},"预告片 / 剧照"),o.createElement("div",{className:g.a["scroll-x"],style:{display:x?"none":""}},r.photos.map((function(e){return o.createElement("div",{className:g.a["movie-pic-item"],key:e.image},o.createElement("img",{src:e.image,alt:"loading"}))})))),o.createElement("section",{className:"movie-comment center-content"},o.createElement("div",{className:g.a["block-title"]},"影评"),o.createElement("div",{style:{display:x?"none":""}},r.popular_reviews.map((function(e,t){return o.createElement("div",{className:g.a["comment-item"],key:t},o.createElement("div",{className:g.a["comment-title"]+" desc"},o.createElement("img",{src:e.author.avatar,alt:"loading"}),o.createElement("span",null,e.author.name),o.createElement(d.a,{score:""+2*e.rating.value,readonly:!0})),o.createElement("div",{className:g.a["comment-content"]},e.summary))})))))}}}]);
//# sourceMappingURL=3.d90beb1f.chunk.js.map