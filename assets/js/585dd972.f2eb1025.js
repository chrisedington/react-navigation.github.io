"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[22081],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(83117),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function g(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),v=g[0],f=g[1],k=m({queryString:s,groupId:u}),b=k[0],w=k[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=y[0],x=y[1],C=function(){var e=null!=b?b:N;return h({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),x(e)}),[w,x,p]),tabValues:p}}var v=n(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){var t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},38109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),l={id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},s=void 0,u={unversionedId:"navigating",id:"version-3.x/navigating",title:"Moving between screens",description:'In the previous section, "Hello React Navigation", we defined a stack navigator with two routes (Home and Details), but we didn\'t learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).',source:"@site/versioned_docs/version-3.x/navigating.md",sourceDirName:".",slug:"/navigating",permalink:"/docs/3.x/navigating",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigating.md",tags:[],version:"3.x",frontMatter:{id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},sidebar:"version-3.x-docs",previous:{title:"Supported React Native versions",permalink:"/docs/3.x/supported-react-native-versions"},next:{title:"Navigation lifecycle",permalink:"/docs/3.x/navigation-lifecycle"}},c={},p=[{value:"Navigating to a new screen",id:"navigating-to-a-new-screen",level:2},{value:"Navigate to a route multiple times",id:"navigate-to-a-route-multiple-times",level:2},{value:"Going back",id:"going-back",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous section, ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/hello-react-navigation"},'"Hello React Navigation"'),", we defined a stack navigator with two routes (",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Details"),"), but we didn't learn how to let a user navigate from ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," (although we did learn how to change the ",(0,o.kt)("em",{parentName:"p"},"initial")," route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine)."),(0,o.kt)("p",null,"If this was a web browser, we'd be able to write something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<a href="details.html">Go to Details</a>\n')),(0,o.kt)("p",null,"Another way to write this would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<a onClick={() => { document.location.href = "details.html"; }}>Go to Details</a>\n')),(0,o.kt)("p",null,"We'll do something similar to the latter, but rather than using a ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," global we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop that is passed down to our screen components."),(0,o.kt)("h2",{id:"navigating-to-a-new-screen"},"Navigating to a new screen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button, View, Text } from 'react-native';\nimport { createStackNavigator, createAppContainer } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\n// ... other code from the previous section\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/our-first-navigate-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"Let's break this down:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"this.props.navigation"),": the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop is passed in to every ",(0,o.kt)("strong",{parentName:"li"},"screen component")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/3.x/glossary-of-terms#screen-component"},"definition"),") in stack navigator (more about this later in ",(0,o.kt)("a",{parentName:"li",href:"/docs/3.x/navigation-prop"},'"The navigation prop in depth"'),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"navigate('Details')"),": we call the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigate")," function (on the ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop ","\u2014"," naming is hard!) with the name of the route that we'd like to move the user to.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If we call ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.navigation.navigate")," with a route name that we haven't defined on a stack navigator, nothing will happen. Said another way, we can only navigate to routes that have been defined on our stack navigator ","\u2014"," we cannot navigate to an arbitrary component.")),(0,o.kt)("p",null,"So we now have a stack with two routes: 1) the Home route 2) the Details route. What would happen if we navigated to the Details route again, from the Details screen?"),(0,o.kt)("h2",{id:"navigate-to-a-route-multiple-times"},"Navigate to a route multiple times"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/navigating-to-details-again-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"If you run this code, you'll notice that when you tap \"Go to Details... again\" that it doesn't do anything! This is because we are already on the Details route. The ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),' function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.'),(0,o.kt)("p",null,"Let's suppose that we actually ",(0,o.kt)("em",{parentName:"p"},"want")," to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),"!). To do this, we can change ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"push"),". This allows us to express the intent to add another route regardless of the existing navigation history."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Go to Details... again\"\n  onPress={() => this.props.navigation.push('Details')}\n/>\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/pushing-details-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"Each time you call ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," we add a new route to the navigation stack. When you call ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack."),(0,o.kt)("h2",{id:"going-back"},"Going back"),(0,o.kt)("p",null,"The header provided by stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button)."),(0,o.kt)("p",null,"Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.navigation.goBack();"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() => this.props.navigation.push('Details')}\n        />\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n        <Button\n          title=\"Go back\"\n          onPress={() => this.props.navigation.goBack()}\n        />\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/going-back-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"On Android, React Navigation hooks in to the hardware back button and fires the ",(0,o.kt)("inlineCode",{parentName:"p"},"goBack()")," function for you when the user presses it, so it behaves as the user would expect.")),(0,o.kt)("p",null,"Another common requirement is to be able to go back ",(0,o.kt)("em",{parentName:"p"},"multiple")," screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," so we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate('Home')")," (not ",(0,o.kt)("inlineCode",{parentName:"p"},"push"),"! try that out and see the difference). Another alternative would be ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.popToTop()"),", which goes back to the first screen in the stack."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"this.props.navigation.navigate('RouteName')")," pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen."),(0,o.kt)("li",{parentName:"ul"},"We can call ",(0,o.kt)("inlineCode",{parentName:"li"},"this.props.navigation.push('RouteName')")," as many times as we like and it will continue pushing routes."),(0,o.kt)("li",{parentName:"ul"},"The header bar will automatically show a back button, but you can programmatically go back by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"this.props.navigation.goBack()"),". On Android, the hardware back button just works as expected."),(0,o.kt)("li",{parentName:"ul"},"You can go back to an existing screen in the stack with ",(0,o.kt)("inlineCode",{parentName:"li"},"this.props.navigation.navigate('RouteName')"),", and you can go back to the first screen in the stack with ",(0,o.kt)("inlineCode",{parentName:"li"},"this.props.navigation.popToTop()"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"navigation")," prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://snack.expo.io/@react-navigation/going-back-v3"},"Full source of what we have built so far"),".")))}m.isMDXComponent=!0}}]);