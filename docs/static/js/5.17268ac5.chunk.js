(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(e,t,i){var o=i(166);"string"==typeof o&&(o=[[e.i,o,""]]);i(78)(o,{hmr:!0,transform:void 0}),o.locals&&(e.exports=o.locals)},166:function(e,t,i){(t=e.exports=i(77)(void 0)).push([e.i,".home__12hUHQ{width:100%;background-color:#fff}.home__12hUHQ .home-content__3NFRm0{padding-top:80px}.home__12hUHQ .block-title__Ze0JjA{width:100%;margin-bottom:10px;color:#999;font-size:20px}.home__12hUHQ .block-title__Ze0JjA .title-item__1Ahtps{cursor:pointer}.home__12hUHQ .block-title__Ze0JjA .title-item__1Ahtps:nth-of-type(1){margin-right:10px}.home__12hUHQ .block-title__Ze0JjA .title-active__3g2Yqd{color:#2b2b2b;border-bottom:2px solid #2b2b2b}.home__12hUHQ .nomore__q0T1Tp{text-align:center;color:#999}.home__12hUHQ .movie-block__3fEgyc{margin-bottom:20px}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5{width:calc((100% - 20px) / 3);position:relative;display:inline-block;margin-bottom:16px;-webkit-transition:0.1s ease;-o-transition:0.1s ease;transition:0.1s ease;cursor:pointer}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5:not(:nth-of-type(3n)){margin-right:10px}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5:hover img{-webkit-box-shadow:0 1px 10px rgba(50,50,50,0.4);box-shadow:0 1px 10px rgba(50,50,50,0.4)}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5:active img{-webkit-box-shadow:0 1px 10px rgba(50,50,50,0.4);box-shadow:0 1px 10px rgba(50,50,50,0.4)}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5 .index__3END5S{position:absolute;top:0;left:0;padding:0 2px;border-radius:4px;color:#fff;font-size:14px;background:rgba(0,0,0,0.5)}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5 .img__1IJiJt{width:100%;height:150px;display:inline-block;border-radius:4px;overflow:hidden}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5 .movie-title__1jGat6{margin-top:6px;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5 .score__EnkDua{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#ccc;line-height:1}.home__12hUHQ .movie-block__3fEgyc .movie-item__3sDKa5 .score__EnkDua>span{margin-left:2px}\n",""]),t.locals={home:"home__12hUHQ","home-content":"home-content__3NFRm0","block-title":"block-title__Ze0JjA","title-item":"title-item__1Ahtps","title-active":"title-active__3g2Yqd",nomore:"nomore__q0T1Tp","movie-block":"movie-block__3fEgyc","movie-item":"movie-item__3sDKa5",index:"index__3END5S",img:"img__1IJiJt","movie-title":"movie-title__1jGat6",score:"score__EnkDua"}},173:function(e,t,i){"use strict";i.r(t),i(79);var o=i(56),n=i.n(o),a=i(9),l=i(0),s=i(143),c=i(144),r=i(148),m=i(149),p=i(151),v=i(150),h=i(5),_=i(73),d=i(165),g=i.n(d),u=[{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}},{title:"",images:{medium:""},rating:{average:""}}],f={isLoading:!1,currentPage:0,movieLineStatus:0,movieLine:u,movieComing:u,movieTop250:u,isTop250FullLoaded:!1,scrTop:0},b=function(e){function t(t){var i=e.call(this,t)||this;return i.state=f,i._onScroll=i._onScroll.bind(i),setTimeout((function(){document.querySelector("#white-loading").style.visibility="hidden"}),1e3),i}return Object(a.d)(t,e),t.prototype.componentDidMount=function(){var e=this;this._getMovieLine(),this._getMovieTop250(),Object(v.a)(),this.props.homeStore.setCount(2),console.log(this.props.homeStore.count),this.props.history.listen((function(t){e.onRouteChange(t)})),window.addEventListener("scroll",this._onScroll)},t.prototype.componentWillUnmount=function(){this.setState=function(){},window.removeEventListener("scroll",this._onScroll)},t.prototype.onRouteChange=function(e){if("/"===e.pathname){var t=this.state.scrTop;window.addEventListener("scroll",this._onScroll),this.setScrollTop(t)}e.pathname.includes("/movie-detail/")&&(this.setScrollTop(0),window.removeEventListener("scroll",this._onScroll))},t.prototype.setScrollTop=function(e){document.body.scrollTop=e,document.documentElement.scrollTop=e},t.prototype._onScroll=function(){var e=window.innerHeight,t=document.documentElement.scrollHeight,i=document.body.scrollTop||document.documentElement.scrollTop;t-e-i<=300&&this._getMovieTop250({start:10*this.state.currentPage}),"/"===this.props.location.pathname?this.setState({scrTop:i}):window.removeEventListener("scroll",this._onScroll)},t.prototype._getMovieLine=function(){var e=this;this.state.movieLine[0].title||Object(s.c)({start:0,count:9,city:"深圳"}).then((function(t){e.setState({movieLine:t.subjects})})).catch((function(e){console.log("err: ",e),n.a.fail("数据加载失败，请稍后再试")}))},t.prototype._getMovieComing=function(){var e=this;this.state.movieComing[0].title||Object(s.a)({start:0,count:9}).then((function(t){e.setState({movieComing:t.subjects})})).catch((function(e){console.log("err: ",e)}))},t.prototype._getMovieTop250=function(e){var t=this,i=void 0===e?{}:e,o=i.start,n=void 0===o?0:o,l=i.count,c=void 0===l?20:l,r=this.state,m=r.isLoading,p=r.movieTop250,v=r.currentPage,h=r.isTop250FullLoaded;m||h||this.setState({isLoading:!0},(function(){Object(s.d)({start:n,count:c}).then((function(e){t.setState({movieTop250:p[0].title?Object(a.g)(p,e.subjects):e.subjects,isLoading:!1,currentPage:v+1,isTop250FullLoaded:0===e.subjects.length})})).catch((function(e){console.log("err: ",e),t.setState({isLoading:!1})}))}))},t.prototype.movieStatusChange=function(e){this.setState({movieLineStatus:e});var t=this.state,i=t.movieLine,o=t.movieComing;0!==e||i[0].title||this._getMovieLine(),1!==e||o[0].title||this._getMovieComing()},t.prototype.toDetail=function(e){e&&this.props.history.push("/movie-detail/"+e)},t.prototype.onConfirm=function(e){e&&this.props.history.push("/search?input="+e)},t.prototype.isDetailPage=function(){return this.props.location.pathname.includes("/movie-detail/")},t.prototype.render=function(){var e=this,t=this.state,i=t.movieLineStatus,o=t.isLoading,n=t.movieLine,a=t.movieComing,s=t.movieTop250,c=t.isTop250FullLoaded;return l.createElement("div",{className:""+g.a.home},this.props.children,!this.isDetailPage()&&l.createElement(p.a,{onConfirm:function(t){return e.onConfirm(t)}}),l.createElement("div",{className:g.a["home-content"]+" center-content",style:{display:this.isDetailPage()?"none":"block"}},l.createElement("section",{className:g.a["movie-block"]},l.createElement("div",{className:g.a["block-title"]},l.createElement("span",{className:g.a["title-item"]+" "+(0===i&&g.a["title-active"]),onClick:function(){return e.movieStatusChange(0)}},"院线热映"),l.createElement("span",{className:g.a["title-item"]+" "+(1===i&&g.a["title-active"]),onClick:function(){return e.movieStatusChange(1)}},"即将上映")),0===i?l.createElement(E,{movieList:n,toDetail:function(t){return e.toDetail(t)}}):l.createElement(E,{movieList:a,toDetail:function(t){return e.toDetail(t)}})),l.createElement(y,{isLoading:o,movieTop250:s,toDetail:function(t){return e.toDetail(t)}}),o&&l.createElement(r.a,null),l.createElement(m.a,null),c&&l.createElement("div",{className:g.a.nomore},"没有更多数据了~")))},Object(a.c)([Object(_.b)("homeStore"),_.c],t)}(l.Component);function E(e){var t=void 0===e?{}:e,i=t.movieList,o=void 0===i?u:i,n=t.toDetail,a=void 0===n?function(e){}:n;return l.createElement("div",null,o.map((function(e,t){return l.createElement("div",{className:g.a["movie-item"],key:t,title:e.title,onClick:function(){return a(e.id)}},o[0].title?l.createElement("img",{className:g.a.img,src:e.images.medium,alt:"loading"}):l.createElement("div",{className:g.a.img+" loading-shink"}),l.createElement("div",{className:g.a["movie-title"]},e.title),0===e.rating.average?l.createElement("span",{className:"desc"},"尚未上映"):l.createElement("div",{className:g.a.score},l.createElement(c.a,{score:e.rating.average,readonly:!0}),l.createElement("span",null,e.rating.average)))})))}function y(e){var t=void 0===e?{}:e,i=t.isLoading,o=void 0!==i&&i,n=t.movieTop250,a=void 0===n?u:n,s=t.toDetail,r=void 0===s?function(e){}:s;return l.createElement("section",{className:g.a["movie-block"]},l.createElement("div",{className:g.a["block-title"]},l.createElement("span",{className:g.a["title-active"]},"Top250")),l.createElement("div",null,a.map((function(e,t){return l.createElement("div",{className:g.a["movie-item"],key:t,title:e.title,onClick:function(){return r(e.id)}},l.createElement("span",{className:g.a.index},t+1),o&&!a[0].title?l.createElement("div",{className:g.a.img+" loading-shink"}):l.createElement("img",{className:g.a.img,src:e.images.medium,alt:"loading"}),l.createElement("div",{className:g.a["movie-title"]},e.title),l.createElement("div",{className:g.a.score},l.createElement(c.a,{score:e.rating.average,readonly:!0}),l.createElement("span",null,e.rating.average)))}))))}t.default=Object(h.h)(b)}}]);