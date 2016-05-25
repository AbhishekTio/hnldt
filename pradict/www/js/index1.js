/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
	var app = {
    // Application Constructor
    initialize : function() {
        this.bindEvents();
    },
    bindEvents : function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
     
    onDeviceReady : function() {
        registerThePush();
    },
     
    receivedEvent : function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
 
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
 
        console.log('Received Event: ' + id);
    }
};
 
	app.initialize();
	 
	function registerThePush() {
		var channelName = device.uuid;
		 
		alert(device.uuid);
		var pushNotification;
		pushNotification = window.plugins.pushNotification;
		pushNotification.register(channelHandler, errorHandler, {
			"channelName" :"device.uuid",
			"ecb" : "onNotificationWP8",
			"uccb" : "channelHandler1",
			"errcb" : "jsonErrorHandler"
		});
	}
	 
	//handle MPNS notifications for WP8
	function onNotificationWP8(e) {
	 
		if (e.type == "toast" && e.jsonContent) {
			pushNotification.showToastNotification(successHandler, errorHandler,
			{
				"Title": e.jsonContent["wp:Text1"], "Subtitle": e.jsonContent["wp:Text2"], "NavigationUri": e.jsonContent["wp:Param"]
			});
			}
	 
		if (e.type == "raw" && e.jsonContent) {
			alert(e.jsonContent.Body);
		}
	}
	 
	function channelHandler1(result) {
		alert('registered### 1' + JSON.stringify(result));
		document.getElementById("labelname").innerHTML = JSON.stringify(result);
	}
	function errorHandler(error) {
		alert('error###' + JSON.stringify(error));
	}
	 
	function jsonErrorHandler(error) {
		alert(JSON.stringify(error));
	}