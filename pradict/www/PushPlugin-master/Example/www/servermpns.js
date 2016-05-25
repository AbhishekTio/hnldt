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
 
var mpns = require('mpns');
 
//Here channel Url( or channel uri ) is used that will be given by device in previous STEP 1.
var channelUrl = "https://bn2.notify.windows.com/?token=AwYAAABFJY4IjS%2fHPkALnDKTGyepq9OUSRyu%2bTiTRHk3dc2Ai6au1mxa1mdjLTPwuoh9U780KOxKCE%2fQG7bvaB7MUodcjsUyw20U%2f5ymctTs9I8ILC6tXzGy9na9qv2rlem%2fbOg%3d";
 
var options = {
    text1: 'Hello!',
    text2: 'hey buddy'
    };
 
mpns.sendToast(channelUrl, options, function (error, result) {
    if (error)
        console.error(error);
    else
        console.log(result);
});
