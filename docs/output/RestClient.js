Ext.data.JsonP.RestClient({"subclasses":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/restclient.html#RestClient' target='_blank'>restclient.js</a></div></pre><div class='doc-contents'><p>Little REST Client written in JS</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-OAUTH2GrantTypes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-OAUTH2GrantTypes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-OAUTH2GrantTypes' class='name expandable'>OAUTH2GrantTypes</a><span> : Object</span></div><div class='description'><div class='short'>Setting the OAUTH2 Grant Types ...</div><div class='long'><p>Setting the OAUTH2 Grant Types</p>\n<p>Defaults to: <code>{&quot;code&quot;: &quot;authorization_code&quot;, &quot;implicit&quot;: &quot;token&quot;, &quot;user&quot;: &quot;password&quot;, &quot;client&quot;: &quot;client_credentials&quot;, &quot;refresh&quot;: &quot;refresh_token&quot;}</code></p></div></div></div><div id='property-RESTMethods' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-RESTMethods' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-RESTMethods' class='name expandable'>RESTMethods</a><span> : Object</span></div><div class='description'><div class='short'>Stores the REST method/verbs accepted ...</div><div class='long'><p>Stores the REST method/verbs accepted</p>\n<p>Defaults to: <code>{&quot;create&quot;: &quot;POST&quot;, &quot;read&quot;: &quot;GET&quot;, &quot;update&quot;: &quot;PUT&quot;, &quot;delete&quot;: &quot;DELETE&quot;}</code></p></div></div></div><div id='property-VERSION' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-VERSION' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-VERSION' class='name expandable'>VERSION</a><span> : String</span></div><div class='description'><div class='short'>Library's Version ...</div><div class='long'><p>Library's Version</p>\n<p>Defaults to: <code>&quot;0.1.2&quot;</code></p></div></div></div><div id='property-accessToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-accessToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-accessToken' class='name expandable'>accessToken</a><span> : Object</span></div><div class='description'><div class='short'>Stores the Oauth2.0 access token ...</div><div class='long'><p>Stores the Oauth2.0 access token</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-authorization' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-authorization' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-authorization' class='name expandable'>authorization</a><span> : Object</span></div><div class='description'><div class='short'>Stores the authorization variables ...</div><div class='long'><p>Stores the authorization variables</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-authorizationType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-authorizationType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-authorizationType' class='name expandable'>authorizationType</a><span> : String</span></div><div class='description'><div class='short'>Stores the authorization type. ...</div><div class='long'><p>Stores the authorization type. Values Accepted: none, basic, oauth2</p>\n<p>Defaults to: <code>&quot;none&quot;</code></p></div></div></div><div id='property-headers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-headers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-headers' class='name expandable'>headers</a><span> : Object</span></div><div class='description'><div class='short'>Stores the header variables ...</div><div class='long'><p>Stores the header variables</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-needsAuthorization' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-needsAuthorization' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-needsAuthorization' class='name expandable'>needsAuthorization</a><span> : Boolean</span></div><div class='description'><div class='short'>Stores the authorization mode ...</div><div class='long'><p>Stores the authorization mode</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-response' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-response' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-response' class='name expandable'>response</a><span> : Object</span></div><div class='description'><div class='short'>Stores the response variables ...</div><div class='long'><p>Stores the response variables</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-server' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-property-server' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-property-server' class='name expandable'>server</a><span> : Object</span></div><div class='description'><div class='short'>Stores the server variables ...</div><div class='long'><p>Stores the server variables</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/RestClient-method-constructor' class='name expandable'>RestClient</a>( <span class='pre'></span> ) : <a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></div><div class='description'><div class='short'>Create the RestClient namespace and object ...</div><div class='long'><p>Create the RestClient namespace and object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-authorize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-authorize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-authorize' class='name expandable'>authorize</a>( <span class='pre'>Object config</span> ) : Boolean</div><div class='description'><div class='short'>Request an authorization ...</div><div class='long'><p>Request an authorization</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-consume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-consume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-consume' class='name expandable'>consume</a>( <span class='pre'>String operation, String url, Object data, String id</span> ) : Object</div><div class='description'><div class='short'>Consume  REST method ...</div><div class='long'><p>Consume  REST method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operation</span> : String<div class='sub-desc'><p>REST Verb/Method</p>\n</div></li><li><span class='pre'>url</span> : String<div class='sub-desc'><p>REST Endpoint</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Optional Indentificator</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createXHR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-createXHR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-createXHR' class='name expandable'>createXHR</a>( <span class='pre'></span> ) : *</div><div class='description'><div class='short'>Create an object XmlHttpRequest or returns false if fails ...</div><div class='long'><p>Create an object XmlHttpRequest or returns false if fails</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-deleteCall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-deleteCall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-deleteCall' class='name expandable'>deleteCall</a>( <span class='pre'>String url, String id, Object data</span> ) : Object</div><div class='description'><div class='short'>Consume REST through DELETE Method ...</div><div class='long'><p>Consume REST through DELETE Method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>REST Endpoint</p>\n</div></li><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identificator</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>JSON Response</p>\n</div></li></ul></div></div></div><div id='method-getCall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-getCall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-getCall' class='name expandable'>getCall</a>( <span class='pre'>String url, Object data</span> ) : Object</div><div class='description'><div class='short'>Consume REST through GET Method ...</div><div class='long'><p>Consume REST through GET Method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>REST Endpoint</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>JSON Response</p>\n</div></li></ul></div></div></div><div id='method-getVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-getVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-getVersion' class='name expandable'>getVersion</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the library version ...</div><div class='long'><p>Returns the library version</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>RestClient Version</p>\n</div></li></ul></div></div></div><div id='method-postCall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-postCall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-postCall' class='name expandable'>postCall</a>( <span class='pre'>String url, Object data</span> ) : Object</div><div class='description'><div class='short'>Consume REST through POST Method ...</div><div class='long'><p>Consume REST through POST Method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>REST Endpoint</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>JSON Response</p>\n</div></li></ul></div></div></div><div id='method-putCall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-putCall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-putCall' class='name expandable'>putCall</a>( <span class='pre'>String url, String id, Object data</span> ) : Object</div><div class='description'><div class='short'>Consume REST through PUT Method ...</div><div class='long'><p>Consume REST through PUT Method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>REST Endpoint</p>\n</div></li><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identificator</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>JSON Response</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> ) : <a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></div><div class='description'><div class='short'>Resets the RestClient ...</div><div class='long'><p>Resets the RestClient</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAccessToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setAccessToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setAccessToken' class='name expandable'>setAccessToken</a>( <span class='pre'>Object obj</span> ) : *</div><div class='description'><div class='short'>Set manually with an access token ...</div><div class='long'><p>Set manually with an access token</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAuthorizationMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setAuthorizationMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setAuthorizationMode' class='name expandable'>setAuthorizationMode</a>( <span class='pre'>Boolean value</span> ) : <a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></div><div class='description'><div class='short'>Set Authorization Mode ...</div><div class='long'><p>Set Authorization Mode</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Boolean<div class='sub-desc'><p>Authorization Mode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAuthorizationServer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setAuthorizationServer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setAuthorizationServer' class='name expandable'>setAuthorizationServer</a>( <span class='pre'>String url</span> ) : Boolean</div><div class='description'><div class='short'>Setting the Server URL to consume REST ...</div><div class='long'><p>Setting the Server URL to consume REST</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>Authorization URL</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAuthorizationType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setAuthorizationType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setAuthorizationType' class='name expandable'>setAuthorizationType</a>( <span class='pre'>String type</span> ) : Boolean</div><div class='description'><div class='short'>Sets the authorization type ...</div><div class='long'><p>Sets the authorization type</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>Valid Authorization Type</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setBasicCredentials' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setBasicCredentials' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setBasicCredentials' class='name expandable'>setBasicCredentials</a>( <span class='pre'>String username, String password</span> ) : <a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></div><div class='description'><div class='short'>Set the user and password for the basic authentication method ...</div><div class='long'><p>Set the user and password for the basic authentication method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>username</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>password</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setClient' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setClient' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setClient' class='name expandable'>setClient</a>( <span class='pre'>String client_id, String client_secret, String client_url</span> ) : <a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></div><div class='description'><div class='short'>Setting the client authorization credentials ...</div><div class='long'><p>Setting the client authorization credentials</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>client_id</span> : String<div class='sub-desc'><p>Client Identificator</p>\n</div></li><li><span class='pre'>client_secret</span> : String<div class='sub-desc'><p>Client Secret or Password</p>\n</div></li><li><span class='pre'>client_url</span> : String<div class='sub-desc'><p>Authorization URL</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setGrantType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setGrantType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setGrantType' class='name expandable'>setGrantType</a>( <span class='pre'>String type, Object data</span> ) : <a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></div><div class='description'><div class='short'>Setting the OAuth2 Grant Type and Data ...</div><div class='long'><p>Setting the OAuth2 Grant Type and Data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>Grant Type</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/RestClient\" rel=\"RestClient\" class=\"docClass\">RestClient</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-setHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-setHeader' class='name expandable'>setHeader</a>( <span class='pre'>String name, String value</span> ) : Boolean</div><div class='description'><div class='short'>Add HTML header information to send though XHR ...</div><div class='long'><p>Add HTML header information to send though XHR</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name Field</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>Value Field</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-method-toParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-method-toParams' class='name expandable'>toParams</a>( <span class='pre'>Object obj</span> ) : String</div><div class='description'><div class='short'>Convert an Object to Key/Value string ...</div><div class='long'><p>Convert an Object to Key/Value string</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>Input Object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-RequestFailure' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-event-RequestFailure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-event-RequestFailure' class='name expandable'>RequestFailure</a>( <span class='pre'>Object data</span> )</div><div class='description'><div class='short'>Event is called when the Request has failed ...</div><div class='long'><p>Event is called when the Request has failed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Error Response</p>\n</div></li></ul></div></div></div><div id='event-RestFailure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-event-RestFailure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-event-RestFailure' class='name expandable'>RestFailure</a>( <span class='pre'>Object method, Object data</span> )</div><div class='description'><div class='short'>Event is called when the REST request has failed ...</div><div class='long'><p>Event is called when the REST request has failed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-RestSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RestClient'>RestClient</span><br/><a href='source/restclient.html#RestClient-event-RestSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RestClient-event-RestSuccess' class='name expandable'>RestSuccess</a>( <span class='pre'>Object method, Object data</span> )</div><div class='description'><div class='short'>Event is called when the REST request is successfully ...</div><div class='long'><p>Event is called when the REST request is successfully</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","html_meta":{},"aliases":{},"files":[{"href":"restclient.html#RestClient","filename":"restclient.js"}],"superclasses":[],"component":false,"tagname":"class","requires":[],"members":{"event":[{"owner":"RestClient","meta":{},"tagname":"event","name":"RequestFailure","id":"event-RequestFailure"},{"owner":"RestClient","meta":{},"tagname":"event","name":"RestFailure","id":"event-RestFailure"},{"owner":"RestClient","meta":{},"tagname":"event","name":"RestSuccess","id":"event-RestSuccess"}],"property":[{"owner":"RestClient","meta":{},"tagname":"property","name":"OAUTH2GrantTypes","id":"property-OAUTH2GrantTypes"},{"owner":"RestClient","meta":{},"tagname":"property","name":"RESTMethods","id":"property-RESTMethods"},{"owner":"RestClient","meta":{},"tagname":"property","name":"VERSION","id":"property-VERSION"},{"owner":"RestClient","meta":{},"tagname":"property","name":"accessToken","id":"property-accessToken"},{"owner":"RestClient","meta":{},"tagname":"property","name":"authorization","id":"property-authorization"},{"owner":"RestClient","meta":{},"tagname":"property","name":"authorizationType","id":"property-authorizationType"},{"owner":"RestClient","meta":{},"tagname":"property","name":"headers","id":"property-headers"},{"owner":"RestClient","meta":{},"tagname":"property","name":"needsAuthorization","id":"property-needsAuthorization"},{"owner":"RestClient","meta":{},"tagname":"property","name":"response","id":"property-response"},{"owner":"RestClient","meta":{},"tagname":"property","name":"server","id":"property-server"}],"css_var":[],"method":[{"owner":"RestClient","meta":{},"tagname":"method","name":"constructor","id":"method-constructor"},{"owner":"RestClient","meta":{},"tagname":"method","name":"authorize","id":"method-authorize"},{"owner":"RestClient","meta":{},"tagname":"method","name":"consume","id":"method-consume"},{"owner":"RestClient","meta":{},"tagname":"method","name":"createXHR","id":"method-createXHR"},{"owner":"RestClient","meta":{},"tagname":"method","name":"deleteCall","id":"method-deleteCall"},{"owner":"RestClient","meta":{},"tagname":"method","name":"getCall","id":"method-getCall"},{"owner":"RestClient","meta":{},"tagname":"method","name":"getVersion","id":"method-getVersion"},{"owner":"RestClient","meta":{},"tagname":"method","name":"postCall","id":"method-postCall"},{"owner":"RestClient","meta":{},"tagname":"method","name":"putCall","id":"method-putCall"},{"owner":"RestClient","meta":{},"tagname":"method","name":"reset","id":"method-reset"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setAccessToken","id":"method-setAccessToken"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setAuthorizationMode","id":"method-setAuthorizationMode"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setAuthorizationServer","id":"method-setAuthorizationServer"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setAuthorizationType","id":"method-setAuthorizationType"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setBasicCredentials","id":"method-setBasicCredentials"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setClient","id":"method-setClient"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setGrantType","id":"method-setGrantType"},{"owner":"RestClient","meta":{},"tagname":"method","name":"setHeader","id":"method-setHeader"},{"owner":"RestClient","meta":{},"tagname":"method","name":"toParams","id":"method-toParams"}],"css_mixin":[],"cfg":[]},"alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"name":"RestClient","extends":null,"id":"class-RestClient","parentMixins":[],"singleton":false,"uses":[],"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]}});