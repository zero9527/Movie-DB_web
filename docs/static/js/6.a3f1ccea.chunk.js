(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{164:function(e,t,i){var n=i(165);"string"==typeof n&&(n=[[e.i,n,""]]);i(73)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},165:function(e,t,i){(t=e.exports=i(72)(void 0)).push([e.i,".search__19nYsb{width:100%}.no-data__3uIK5D{text-align:center;color:#999}.movie-item__3be2x_{display:-ms-flexbox;display:flex;margin-bottom:10px}.movie-item__3be2x_:active{background:#f6f6f6}.movie-item-pic__2ZZ9BI{width:60px;height:80px;margin-right:10px}.movie-item-pic__2ZZ9BI .img__2_bzD8{width:100%;height:100%}.movie-item-content__1abpQe{padding-top:4px;font-size:14px}\n",""]),t.locals={search:"search__19nYsb","no-data":"no-data__3uIK5D","movie-item":"movie-item__3be2x_","movie-item-pic":"movie-item-pic__2ZZ9BI",img:"img__2_bzD8","movie-item-content":"movie-item-content__1abpQe"}},171:function(e,t,i){"use strict";i.r(t),i(74);var n=i(53),o=i.n(n),a=i(3),r=i(0),s=i(148),c=i(141),l=i(145),m=i(146),p=i(147),u=i(4),d=i(164),h=i.n(d),v=[{title:"",images:{medium:""},rating:{average:""}}],f={isLoading:!1,input:"",searchList:v,scrTop:0},g=function(e){function t(t){var i=e.call(this,t)||this;return i.state=f,i._onScroll=i._onScroll.bind(i),i}return Object(a.c)(t,e),t.prototype.componentDidMount=function(){var e=this,t=Object(p.b)();t&&t.input&&(this.setState({input:decodeURI(t.input)}),this.searchMovie(decodeURI(t.input)),this.props.history.listen((function(t){e.onRouteChange(t)})),window.addEventListener("scroll",this._onScroll))},t.prototype.componentWillUnmount=function(){this.setState=function(){},window.removeEventListener("scroll",this._onScroll)},t.prototype.onRouteChange=function(e){if("/search"===e.pathname){var t=this.state.scrTop;window.addEventListener("scroll",this._onScroll),this.setScrollTop(t)}e.pathname.includes("/movie-detail/")&&(this.setScrollTop(0),window.removeEventListener("scroll",this._onScroll))},t.prototype.setScrollTop=function(e){document.body.scrollTop=e,document.documentElement.scrollTop=e},t.prototype._onScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;"/search"===this.props.location.pathname?this.setState({scrTop:e}):window.removeEventListener("scroll",this._onScroll)},t.prototype.searchMovie=function(e){var t=this;if(void 0===e&&(e=""),!this.state.isLoading){this.setState({isLoading:!0});var i=localStorage.getItem("movieTop250All");if(i){var n=JSON.parse(i).filter((function(t){return t.title.includes(e)}));setTimeout((function(){t.setState({isLoading:!1})}),300),this.setState({searchList:n})}else Object(p.a)((function(i){if(!Array.isArray(i))return t.setState({isLoading:!1}),void o.a.fail("请求失败，请稍后再试！");var n=i.filter((function(t){return t.title.includes(e)}));setTimeout((function(){t.setState({isLoading:!1})}),300),t.setState({searchList:n})}))}},t.prototype.toDetail=function(e){e&&this.props.history.push("/search/movie-detail/"+e)},t.prototype.onChange=function(e){var t=this;void 0===e&&(e=""),this.inputTimer&&clearTimeout(this.inputTimer),this.inputTimer=setTimeout((function(){return t.searchMovie(e)}),600)},t.prototype.onConfirm=function(e){this.searchMovie(e)},t.prototype.isDetailPage=function(){return this.props.location.pathname.includes("/movie-detail/")},t.prototype.render=function(){var e=this,t=this.state,i=t.input,n=t.isLoading,o=t.searchList;return r.createElement("div",{className:h.a.search,style:{paddingTop:this.isDetailPage()?"":"60px"}},r.createElement("div",{className:"center-content",style:{display:this.isDetailPage()?"none":"block"}},!this.isDetailPage()&&r.createElement(s.a,{value:i,onChange:function(t){return e.onChange(t)},onConfirm:function(t){return e.onConfirm(t)},onClear:function(){return e.searchMovie()}}),n&&r.createElement(l.a,null),r.createElement(_,{movieList:o,toDetail:function(t){return e.toDetail(t)}}),r.createElement(m.a,null)),this.props.children)},t}(r.Component);function _(e){var t=void 0===e?{}:e,i=t.movieList,n=void 0===i?v:i,o=t.toDetail,a=void 0===o?function(e){}:o;return r.createElement("div",null,r.createElement("section",{className:"desc"},r.createElement("div",null,"豆瓣电影搜索Api已挂。。。"),r.createElement("div",null,"不知道其他Api还能活多久。。。"),r.createElement("div",null,"目前的搜索结果来自Top250。。。"),r.createElement("br",null)),r.createElement("div",{className:h.a["movie-item"]+" desc"},"搜索到 ",n[0]&&n[0].title?n.length:0," 条数据"),n[0]&&n[0].title&&n.map((function(e,t){return r.createElement("section",{className:h.a["movie-item"],key:t,onClick:function(){return a(e.id)}},r.createElement("div",{className:h.a["movie-item-pic"]},r.createElement("img",{src:e.images.small,alt:"加载中...",className:h.a.img})),r.createElement("div",{className:h.a["movie-item-content"]},r.createElement("div",{className:h.a["movie-item-name"]},e.title),r.createElement("div",{className:h.a["movie-item-score"]+" desc"},0!==e.rating.average?r.createElement(r.Fragment,null,r.createElement(c.a,{score:e.rating.average,readonly:!0}),r.createElement("span",null,e.rating.average)):r.createElement("span",null,"尚未上映"))))})))}t.default=Object(u.withRouter)(g)}}]);