(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,i){var n=i(180);"string"==typeof n&&(n=[[e.i,n,""]]);i(80)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},180:function(e,t,i){(t=e.exports=i(79)(void 0)).push([e.i,".search__19nYsb{width:100%}.no-data__3uIK5D{text-align:center;color:#999}.movie-item__3be2x_{display:-ms-flexbox;display:flex;margin-bottom:10px}.movie-item__3be2x_:active{background:#f6f6f6}.movie-item-pic__2ZZ9BI{width:60px;height:80px;margin-right:10px}.movie-item-pic__2ZZ9BI .img__2_bzD8{width:100%;height:100%}.movie-item-content__1abpQe{padding-top:4px;font-size:14px}\n",""]),t.locals={search:"search__19nYsb","no-data":"no-data__3uIK5D","movie-item":"movie-item__3be2x_","movie-item-pic":"movie-item-pic__2ZZ9BI",img:"img__2_bzD8","movie-item-content":"movie-item-content__1abpQe"}},186:function(e,t,i){"use strict";i.r(t);var n=i(4),o=i(0),a=i(163),r=i(156),s=i(160),c=i(161),l=i(162),m=i(6),p=i(179),u=i.n(p),d=[{title:"",images:{medium:""},rating:{average:""}}],h={isLoading:!1,input:"",searchList:d,scrTop:0},v=function(e){function t(t){var i=e.call(this,t)||this;return i.state=h,i._onScroll=i._onScroll.bind(i),i}return Object(n.c)(t,e),t.prototype.componentDidMount=function(){var e=this,t=Object(l.b)();t&&t.input&&(this.setState({input:decodeURI(t.input)}),this.searchMovie(decodeURI(t.input)),this.props.history.listen((function(t){e.onRouteChange(t)})),window.addEventListener("scroll",this._onScroll))},t.prototype.componentWillUnmount=function(){this.setState=function(){},window.removeEventListener("scroll",this._onScroll)},t.prototype.onRouteChange=function(e){if("/search"===e.pathname){var t=this.state.scrTop;window.addEventListener("scroll",this._onScroll),this.setScrollTop(t)}e.pathname.includes("/movie-detail/")&&(this.setScrollTop(0),window.removeEventListener("scroll",this._onScroll))},t.prototype.setScrollTop=function(e){document.body.scrollTop=e,document.documentElement.scrollTop=e},t.prototype._onScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;"/search"===this.props.location.pathname?this.setState({scrTop:e}):window.removeEventListener("scroll",this._onScroll)},t.prototype.searchMovie=function(e){var t=this;if(void 0===e&&(e=""),!this.state.isLoading){this.setState({isLoading:!0});var i=localStorage.getItem("movieTop250All");if(i){var n=JSON.parse(i).filter((function(t){return t.title.includes(e)}));this.setState({searchList:n},(function(){t.setState({isLoading:!1})}))}else Object(l.a)((function(i){if(!Array.isArray(i))return t.setState({isLoading:!1}),void alert("请求失败，请稍后再试！");var n=i.filter((function(t){return t.title.includes(e)}));t.setState({searchList:n},(function(){t.setState({isLoading:!1})}))}))}},t.prototype.toDetail=function(e){e&&this.props.history.push("/search/movie-detail/"+e)},t.prototype.onChange=function(e){var t=this;this.inputTimer&&clearTimeout(this.inputTimer),this.inputTimer=setTimeout((function(){return t.searchMovie(e)}),500)},t.prototype.onConfirm=function(e){this.searchMovie(e)},t.prototype.render=function(){var e=this,t=this.state,i=t.input,n=t.isLoading,r=t.searchList;return o.createElement("div",{className:u.a.search,style:{paddingTop:this.props.location.pathname.includes("/movie-detail/")?"":"60px"}},o.createElement("div",{className:"center-content",style:{display:this.props.location.pathname.includes("/movie-detail/")?"none":"block"}},!this.props.location.pathname.includes("/movie-detail/")&&o.createElement(a.a,{value:i,onChange:function(t){return e.onChange(t)},onConfirm:function(t){return e.onConfirm(t)}}),n&&o.createElement(s.a,null),o.createElement(f,{movieList:r,toDetail:function(t){return e.toDetail(t)}}),o.createElement(c.a,null)),this.props.children)},t}(o.Component);function f(e){var t=void 0===e?{}:e,i=t.movieList,n=void 0===i?d:i,a=t.toDetail,s=void 0===a?function(e){}:a;return o.createElement("div",null,o.createElement("section",{className:"desc"},o.createElement("div",null,"豆瓣电影搜索Api已挂。。。"),o.createElement("div",null,"不知道其他Api还能活多久。。。"),o.createElement("div",null,"目前的搜索结果来自Top250。。。"),o.createElement("br",null)),o.createElement("div",{className:u.a["movie-item"]+" desc"},"搜索到 ",n[0]&&n[0].title?n.length:0," 条数据"),n[0]&&n[0].title&&n.map((function(e,t){return o.createElement("section",{className:u.a["movie-item"],key:t,onClick:function(){return s(e.id)}},o.createElement("div",{className:u.a["movie-item-pic"]},o.createElement("img",{src:e.images.small,alt:"加载中...",className:u.a.img})),o.createElement("div",{className:u.a["movie-item-content"]},o.createElement("div",{className:u.a["movie-item-name"]},e.title),o.createElement("div",{className:u.a["movie-item-score"]+" desc"},0!==e.rating.average?o.createElement(o.Fragment,null,o.createElement(r.a,{score:e.rating.average,readonly:!0}),o.createElement("span",null,e.rating.average)):o.createElement("span",null,"尚未上映"))))})))}t.default=Object(m.withRouter)(v)}}]);