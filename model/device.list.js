/*
 * @Author: askMeWhy
 * @Date:   2017-11-16 14:59:37
 * @Last Modified by:   bigWave
 * @Last Modified time: 2017-11-21 16:35:13
 */
const DeviceList = {
	"code": "1000",
	"message": "",
	"hasmore": false,
	"data": {
		"list": [{
			"name": "开发部",
			"device_list": [{
					"id": "156",
					"name": "内部测试",
					"device_code": "97acee9242412dc31",
					"imei": "97acee9242412dc31",
					"lat": "39.978592",
					"lng": "116.356316",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "70",
					"name": "net1",
					"device_code": "e8277fc2a6f4d50c2",
					"imei": "e8277fc2a6f4d50c2",
					"lat": "39.823835",
					"lng": "116.291661",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "77",
					"name": "Net3",
					"device_code": "3c6f5b1253dabfbc3",
					"imei": "3c6f5b1253dabfbc3",
					"lat": "39.826698",
					"lng": "116.290461",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "19",
					"name": "体验设备",
					"device_code": "c45cc0bd52f6f1c64",
					"imei": "c45cc0bd52f6f1c64",
					"lat": "39.823843",
					"lng": "116.291943",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "1",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "8",
					"name": "便携箱",
					"device_code": "123615713",
					"imei": "8650670244653805",
					"lat": "30.562186",
					"lng": "104.076219",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				}
			]
		},{
			"name": "研发部",
			"device_list": [{
					"id": "156",
					"name": "内部测试",
					"device_code": "97acee9242412dc36",
					"imei": "97acee9242412dc36",
					"lat": "39.978592",
					"lng": "116.356316",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "70",
					"name": "net1",
					"device_code": "e8277fc2a6f4d50c7",
					"imei": "e8277fc2a6f4d50c7",
					"lat": "39.823835",
					"lng": "116.291661",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "77",
					"name": "Net3",
					"device_code": "3c6f5b1253dabfbc8",
					"imei": "3c6f5b1253dabfbc8",
					"lat": "39.826698",
					"lng": "116.290461",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "19",
					"name": "体验设备",
					"device_code": "c45cc0bd52f6f1c69",
					"imei": "c45cc0bd52f6f1c69",
					"lat": "39.823843",
					"lng": "116.291943",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "1",
					"soc": "-1",
					"open": "0"
				},
				{
					"id": "8",
					"name": "便携箱",
					"device_code": "123615713",
					"imei": "86506702446538010",
					"lat": "30.562186",
					"lng": "104.076219",
					"place_status": "0",
					"dislocation_status": "0",
					"authorize": "0",
					"lock_man": "0",
					"soc": "-1",
					"open": "0"
				}
			]
		},{
			"id": "78",
			"name": "没有部门",
			"device_code": "3c6f5b1253dabfbc11",
			"imei": "3c6f5b1253dabfbc11",
			"lat": "39.826698",
			"lng": "116.290461",
			"place_status": "0",
			"dislocation_status": "0",
			"authorize": "0",
			"lock_man": "0",
			"soc": "-1",
			"open": "0"
		}]
	},
	"__time__": "API运行时间: 0.036354064941406 秒"
}

const DeviceNow = {
    "code": "1000", 
    "message": "", 
    "hasmore": false, 
    "data": {
        "id": "19", 
        "device_code": "c45cc0bd52f6f1c6", 
        "lat": "39.823843", 
        "lng": "116.291943", 
        "place_status": "0", 
        "dislocation_status": "0", 
        "authorize": "0", 
        "lock_man": "1", 
        "set01": "02", 
        "set02": "02", 
        "speed": "0", 
        "location_type": "2", 
        "location_radius": "500", 
        "created_at": "1504850353"
    }
}
const DeviceInfo = {
    "code": "1000", 
    "message": "", 
    "hasmore": false, 
    "data": [
        {
            "lat": "30.657598", 
            "lng": "104.057688", 
            "place_status": "2", 
            "dislocation_status": "0", 
            "speed": "120.00", 
            "location_type": "1", 
            "location_radius": "0", 
            "open": "1", 
            "created_at": "1492763032"
        },
        {
            "lat": "30.653777", 
            "lng": "104.067022", 
            "place_status": "0", 
            "dislocation_status": "2", 
            "speed": "120.00", 
            "location_type": "1", 
            "location_radius": "0", 
            "open": "1", 
            "created_at": "1492763032"
        }, 
        {
            "lat": "30.65889", 
            "lng": "104.071593", 
            "place_status": "2", 
            "dislocation_status": "2", 
            "speed": "130.00", 
            "location_type": "1", 
            "location_radius": "0", 
            "open": "0", 
            "created_at": "1493092790"
        }, 
        {
            "lat": "30.661788", 
            "lng": "104.062109", 
            "place_status": "2", 
            "dislocation_status": "2", 
            "speed": "0.00", 
            "location_type": "2", 
            "location_radius": "500", 
            "open": "0", 
            "created_at": "1495945456"
        }
    ], 
    "__time__": "API运行时间: 0.029082059860229 秒"
};
module.exports = { DeviceList,DeviceNow,DeviceInfo };