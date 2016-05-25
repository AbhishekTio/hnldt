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
var channelUrl = 'http://s.notify.live.net/u/1/sin/***********************************30hOL5O67sNTrYouCcMVgU4nzb-zLxyoKqwbC69P8PbDRXXzvAPHR/d2luZG93c3Bob25lZGVmYXVsdA/wKG8Zk7I5BGu****************************';
 
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
