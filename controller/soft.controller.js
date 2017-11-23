/*
* @Author: askMeWhy
* @Date:   2017-11-15 15:56:08
* @Last Modified by:   smile
* @Last Modified time: 2017-11-23 15:58:27
*/
const moment = require('moment/moment.js');
const device = require('../model/device.list.js');
const { DeviceList,DeviceNow,DeviceInfo } = device;
const deviceSet = require("../model/device.set.js");
const {LockTimeList,LockAreaList,RecordList,UserInfoList,BoxList,BoxHis} = deviceSet;
const softController = (req,res)=>{
	const requestBody = req.body;

	if(requestBody.method && requestBody.method == 'test'){
		softHandle.test(req,res);
	}else if(requestBody.method && requestBody.method == 'web.login'){
		softHandle.login(req,res);
	}else if(requestBody.method && requestBody.method == 'web.devicelist'){
		softHandle.getDevice(req,res);
	}else if(requestBody.method && requestBody.method == 'device.now'){
		softHandle.getDeviceNow(req,res);
	}else if(requestBody.method && requestBody.method == 'device.info'){
		softHandle.getDeviceInfo(req,res);
	}else if(requestBody.method && requestBody.method == 'device.timelimitlist'){
		softHandle.getLockTimeList(req,res);
	}else if(requestBody.method && requestBody.method == 'device.timelimit'){
		softHandle.addLockTimeList(req,res);
	}else if(requestBody.method && requestBody.method == 'device.arealimitlist'){
		softHandle.getAreaList(req,res);
	}else if(requestBody.method && requestBody.method == 'device.arealimit'){
		softHandle.addAreaList(req,res);
	}else if(requestBody.method && requestBody.method == 'device.lock'){
		softHandle.setManualLock(req,res);
	}else if(requestBody.method && requestBody.method == 'device.authorize'){
		softHandle.setRemoteAuth(req,res);
	}else if(requestBody.method && requestBody.method == 'set.device'){
		softHandle.setIntervalInfo(req,res);
	}else if(requestBody.method && requestBody.method == 'web.devicelog'){
		softHandle.getRecordList(req,res);
	}else if(requestBody.method && requestBody.method == 'web.adduser'){
		softHandle.addUserInfo(req,res);
	}else if(requestBody.method && requestBody.method == 'web.deviceuser'){
		softHandle.getUserInfo(req,res);
	}else if(requestBody.method && requestBody.method == 'goods.list'){
		softHandle.getBoxList(req,res);
	}else if(requestBody.method && requestBody.method == 'goods.his'){
		softHandle.getBoxHis(req,res);
	}else{
		res.json({
			"ok": false
		});
	}
}
const softHandle = {
	auth: null,
	test(req,res){
		const requestBody = req.body;
		res.json({
			type:"test",
			msg: requestBody.msg
		})
	},
	login(req,res){
		this.auth = 'ask'+Date.now();
		res.json({
			code: 1000,
			data: {
				access_token: this.auth
			}
		})
	},
	getDevice(req,res){
		const requestBody = req.body;

		/*if(requestBody.access_token != this.auth){
			res.json({
				code: 1003,
				message:"access_token缺失或不正确"
			})
			return;
		}*/
		if(requestBody.keyword){
			let _ser = [];
			DeviceList.data.list.map(index=>{
				if(index.device_list && index.device_list.length > 0){
					index.device_list.map(sub=>{
						if(sub.name.indexOf(requestBody.keyword) != -1){
							_ser.push(sub);
						}
					})	
				}else{
					if(index.name.indexOf(requestBody.keyword) != -1){
						_ser.push(index);
					}
				}
			})
			res.json({
				"code": "1000",
				"message": "",
				"hasmore": false,
				"data":{
					"list": _ser
				}
			})
		}else{
			res.json(DeviceList);
		}
	},
	getDeviceNow(req,res){
		const requestBody = req.body;
		let _now = JSON.stringify(DeviceNow);
		_now = JSON.parse(_now);

		if(requestBody.imei == DeviceList.data.list[2].imei){
			_now.data.lat = '30.660699';
			_now.data.lng = '104.075327';
		}
		res.json(_now);
	},
	getDeviceInfo(req,res){
		res.json(DeviceInfo);
	},
	getLockTimeList(req,res){
		const requestBody = req.body;
		let page = parseInt(requestBody.page, 10);

		let _now = JSON.stringify(LockTimeList);

		_now = JSON.parse(_now);

		let _list = [];

		_now.data.list.map((index,key)=>{
			if(key >=page - 1 && key <= (page*10 - 1)){
				_list.push(index);
			}
		})

		if(_now.data.list.length > page*10) _now.hasmore = true;
		else _now.hasmore = false;

		_now.data.list = _list;

		res.json(_now);
	},
	addLockTimeList(req,res){
		const requestBody = req.body;
		let _m = {
			"start_time":null,
			"end_time":null,
			"name": null,
			"id":null
		}
		_m.start_time = moment.unix(requestBody.start_time).format("YYYY-MM-DD HH:mm:ss");
		_m.end_time = moment.unix(requestBody.end_time).format("YYYY-MM-DD HH:mm:ss");
		_m.name = requestBody.name;
		_m.id = LockTimeList.data.list[0].id + 1;
		
		LockTimeList.data.list.unshift(_m);
		res.json({
			"code": 1000,
			"ok":true
		})
	},
	getAreaList(req,res){
		const requestBody = req.body;
		let page = parseInt(requestBody.page, 10);

		let _now = JSON.stringify(LockAreaList);

		_now = JSON.parse(_now);

		let _list = [];

		_now.data.list.map((index,key)=>{
			if(key >=page - 1 && key <= (page*10 - 1)){
				_list.push(index);
			}
		})

		if(_now.data.list.length > page*10) _now.hasmore = true;
		else _now.hasmore = false;

		_now.data.list = _list;

		res.json(_now);
	},
	addAreaList(req,res){
		const requestBody = req.body;
		let _m = {
			"id": null, 
			"name": null, 
			"address": null, 
			"lng": null, 
			"lat": null, 
			"lnglats": null
		}
		_m.lnglats = JSON.parse(requestBody.lnglats);
		_m.lng = requestBody.lng;
		_m.lat = requestBody.lat;
		_m.address = requestBody.address;
		_m.name = requestBody.name;
		_m.id = LockAreaList.data.list[0].id + 1;
		
		LockAreaList.data.list.unshift(_m);
		res.json({
			"code": 1000,
			"ok":true
		})
	},
	setManualLock(req,res){
		DeviceNow.data.lock_man = DeviceNow.data.lock_man == "1" ? "0":"1";
		res.json({
			"code": 1000,
			"ok":true
		})
	},
	setRemoteAuth(req,res){
		DeviceNow.data.authorize = DeviceNow.data.authorize == "1" ? "0":"1";
		res.json({
			"code": 1000,
			"ok":true
		})
	},
	setIntervalInfo(req,res){
		const requestBody = req.body;
		DeviceNow.data.set01 = requestBody.set01;
		DeviceNow.data.set02 = requestBody.set02;
		res.json({
			"code": 1000,
			"ok":true
		})
	},
	getRecordList(req,res){
		const requestBody = req.body;
		let page = parseInt(requestBody.page, 10);

		let _now = JSON.stringify(RecordList);

		_now = JSON.parse(_now);

		let _list = [];

		_now.data.list.map((index,key)=>{
			if(key >=page - 1 && key <= (page*10 - 1)){
				_list.push(index);
			}
		})

		if(_now.data.list.length > page*10) _now.hasmore = true;
		else _now.hasmore = false;

		_now.data.list = _list;

		res.json(_now);
	},
	addUserInfo(req,res){
		const requestBody = req.body;
		let _m = {
			"id": null, 
			"user_id": null, 
			"username": null, 
			"group_name": null, 
			"can_relieve": true
		}
		_m.group_name = requestBody.group_id == '3' ? '管理员':'普通用户';
		_m.username = requestBody.username;
		_m.id = parseInt(UserInfoList.data.list[0].id, 10) + 1;
		_m.user_id = parseInt(UserInfoList.data.list[0].user_id, 10) + 1;
		
		UserInfoList.data.list.unshift(_m);
		res.json({
			"code": 1000,
			"ok":true
		})
	},
	getUserInfo(req,res){

		const requestBody = req.body;
		let page = parseInt(requestBody.page, 10);

		let _now = JSON.stringify(UserInfoList);

		_now = JSON.parse(_now);

		let _list = [];

		_now.data.list.map((index,key)=>{
			if(key >=page - 1 && key <= (page*10 - 1)){
				_list.push(index);
			}
		})

		if(_now.data.list.length > page*10) _now.hasmore = true;
		else _now.hasmore = false;

		_now.data.list = _list;

		res.json(_now);
	},
	getBoxList(req,res){

		const requestBody = req.body;
		let page = parseInt(requestBody.page, 10);

		let _now = JSON.stringify(BoxList);

		_now = JSON.parse(_now);

		let _list = [];

		_now.data.list.map((index,key)=>{
			if(key >=page - 1 && key <= (page*10 - 1)){
				_list.push(index);
			}
		})

		if(_now.data.list.length > page*10) _now.hasmore = true;
		else _now.hasmore = false;

		_now.data.list = _list;

		res.json(_now);
	},
	getBoxHis(req,res){
		const requestBody = req.body;
		let page = parseInt(requestBody.page, 10);

		let _now = JSON.stringify(BoxHis);

		_now = JSON.parse(_now);

		let _list = [];

		_now.data.list.map((index,key)=>{
			if(key >=page - 1 && key <= (page*10 - 1)){
				_list.push(index);
			}
		})

		if(_now.data.list.length > page*10) _now.hasmore = true;
		else _now.hasmore = false;

		_now.data.list = _list;

		res.json(_now);
	}
}
module.exports = softController;