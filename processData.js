let count = 0;
let all = 0;

//体重指数评分=体重/身高^2   kg/m^2
function weightScore(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i]["身高"] == undefined || data[i]["体重"] == undefined) {
            continue;
        }
        var sex = parseInt(data[i]["性别"]);
        var heightData = parseFloat(data[i]["身高"]) / 100;
        var weightData = parseFloat(data[i]["体重"]) / 100;
        //体重指数评分:BMI
        var BMI = Math.round(weightData / heightData / heightData * 100);

        // if(BMI <= 17.8 && BMI >= 24.0 && BMI <= 27.8)
        //console.log(BMI);
        //男
        if (sex == 1) {
            if (BMI >= 28.0) {
                data[i]["体重指数评分"] = "60";

            }
            if (BMI <= 23.9 && BMI >= 17.9) {
                data[i]["体重指数评分"] = "100";

            }
            if (BMI <= 17.8 || (BMI >= 24.0 && BMI <= 27.9)) {
                data[i]["体重指数评分"] = "80";
            }
        }
        //女
        else if (sex == 2) {
            if (BMI >= 28.0) {
                data[i]["体重指数评分"] = "60";

            }
            if (BMI <= 23.9 && BMI >= 17.2) {
                data[i]["体重指数评分"] = "100";

            }
            if (BMI <= 17.1 || (BMI >= 24.0 && BMI <= 27.9)) {
                data[i]["体重指数评分"] = "80";
            }
        }
    }

}

//肺活量评分
function lungVolumeScore(data) {
    for (var i = 0; i < data.length; i++) {
        var sex = parseInt(data[i]["性别"]);
        var quantity = parseInt(data[i]["肺活量"]);
        //男
        if (sex == 1) {
            if (quantity < 2300) {
                data[i]["肺活量评分"] = "0";
            } else if (quantity >= 2300 && quantity < 2460) {
                data[i]["肺活量评分"] = "10";
            } else if (quantity >= 2460 && quantity < 2620) {
                data[i]["肺活量评分"] = "20";
            } else if (quantity >= 2620 && quantity < 2780) {
                data[i]["肺活量评分"] = "30";
            } else if (quantity >= 2780 && quantity < 2940) {
                data[i]["肺活量评分"] = "40";
            } else if (quantity >= 2940 && quantity < 3100) {
                data[i]["肺活量评分"] = "50";
            } else if (quantity >= 3100 && quantity < 3220) {
                data[i]["肺活量评分"] = "60";
            } else if (quantity >= 3220 && quantity < 3340) {
                data[i]["肺活量评分"] = "62";
            } else if (quantity >= 3340 && quantity < 3460) {
                data[i]["肺活量评分"] = "64";
            } else if (quantity >= 3460 && quantity < 3580) {
                data[i]["肺活量评分"] = "66";
            } else if (quantity >= 3580 && quantity < 3700) {
                data[i]["肺活量评分"] = "68";
            } else if (quantity >= 3700 && quantity < 3820) {
                data[i]["肺活量评分"] = "70";
            } else if (quantity >= 3820 && quantity < 3940) {
                data[i]["肺活量评分"] = "72";
            } else if (quantity >= 3940 && quantity < 4060) {
                data[i]["肺活量评分"] = "74";
            } else if (quantity >= 4060 && quantity < 4180) {
                data[i]["肺活量评分"] = "76";
            } else if (quantity >= 4180 && quantity < 4300) {
                data[i]["肺活量评分"] = "78";
            } else if (quantity >= 4300 && quantity < 4550) {
                data[i]["肺活量评分"] = "80";
            } else if (quantity >= 4550 && quantity < 4800) {
                data[i]["肺活量评分"] = "85";
            } else if (quantity >= 4800 && quantity < 4920) {
                data[i]["肺活量评分"] = "90";
            } else if (quantity >= 4920 && quantity < 5040) {
                data[i]["肺活量评分"] = "95";
            } else if (quantity >= 5040) {
                data[i]["肺活量评分"] = "100";
            }
        }
        //女
        else if (sex == 2) {
            if (quantity < 1800) {
                data[i]["肺活量评分"] = "0";
            } else if (quantity >= 1800 && quantity < 1840) {
                data[i]["肺活量评分"] = "10";
            } else if (quantity >= 1840 && quantity < 1880) {
                data[i]["肺活量评分"] = "20";
            } else if (quantity >= 1880 && quantity < 1920) {
                data[i]["肺活量评分"] = "30";
            } else if (quantity >= 1920 && quantity < 1960) {
                data[i]["肺活量评分"] = "40";
            } else if (quantity >= 1960 && quantity < 2000) {
                data[i]["肺活量评分"] = "50";
            } else if (quantity >= 2000 && quantity < 2100) {
                data[i]["肺活量评分"] = "60";
            } else if (quantity >= 2100 && quantity < 2200) {
                data[i]["肺活量评分"] = "62";
            } else if (quantity >= 2200 && quantity < 2300) {
                data[i]["肺活量评分"] = "64";
            } else if (quantity >= 2300 && quantity < 2400) {
                data[i]["肺活量评分"] = "66";
            } else if (quantity >= 2400 && quantity < 2500) {
                data[i]["肺活量评分"] = "68";
            } else if (quantity >= 2500 && quantity < 2600) {
                data[i]["肺活量评分"] = "70";
            } else if (quantity >= 2600 && quantity < 2700) {
                data[i]["肺活量评分"] = "72";
            } else if (quantity >= 2700 && quantity < 2800) {
                data[i]["肺活量评分"] = "74";
            } else if (quantity >= 2800 && quantity < 2900) {
                data[i]["肺活量评分"] = "76";
            } else if (quantity >= 2900 && quantity < 3000) {
                data[i]["肺活量评分"] = "78";
            } else if (quantity >= 3000 && quantity < 3150) {
                data[i]["肺活量评分"] = "80";
            } else if (quantity >= 3150 && quantity < 3300) {
                data[i]["肺活量评分"] = "85";
            } else if (quantity >= 3300 && quantity < 3350) {
                data[i]["肺活量评分"] = "90";
            } else if (quantity >= 3350 && quantity < 3400) {
                data[i]["肺活量评分"] = "95";
            } else if (quantity >= 3400) {
                data[i]["肺活量评分"] = "100";
            }
        }
    }
}

//男：1000米   女：800米
function runningScore(data) {
    for (var i = 0; i < data.length; i++) {
        var sex = parseInt(data[i]["性别"]);
        //男
        if (sex == 1) {
            var thsoundTime = parseFloat(data[i]["1000米跑"]);
            thsoundTime = thsoundTime.toFixed(2);
            if (thsoundTime <= 2.42) {
                data[i]["1000米跑评分"] = "110";
            } else if (thsoundTime > 2.42 && thsoundTime <= 2.45) {
                data[i]["1000米跑评分"] = "109";
            } else if (thsoundTime > 2.45 && thsoundTime <= 2.48) {
                data[i]["1000米跑评分"] = "108";
            } else if (thsoundTime > 2.48 && thsoundTime <= 2.51) {
                data[i]["1000米跑评分"] = "107";
            } else if (thsoundTime > 2.51 && thsoundTime <= 2.54) {
                data[i]["1000米跑评分"] = "106";
            } else if (thsoundTime > 2.54 && thsoundTime <= 2.57) {
                data[i]["1000米跑评分"] = "105";
            } else if (thsoundTime > 2.57 && thsoundTime <= 3.01) {
                data[i]["1000米跑评分"] = "104";
            } else if (thsoundTime > 3.01 && thsoundTime <= 3.05) {
                data[i]["1000米跑评分"] = "103";
            } else if (thsoundTime > 3.05 && thsoundTime <= 3.09) {
                data[i]["1000米跑评分"] = "102";
            } else if (thsoundTime > 3.09 && thsoundTime <= 3.13) {
                data[i]["1000米跑评分"] = "101";
            } else if (thsoundTime > 3.13 && thsoundTime <= 3.17) {
                data[i]["1000米跑评分"] = "100";
            } else if (thsoundTime > 3.17 && thsoundTime <= 3.22) {
                data[i]["1000米跑评分"] = "95";
            } else if (thsoundTime > 3.22 && thsoundTime <= 3.27) {
                data[i]["1000米跑评分"] = "90";
            } else if (thsoundTime > 3.27 && thsoundTime <= 3.34) {
                data[i]["1000米跑评分"] = "85";
            } else if (thsoundTime > 3.34 && thsoundTime <= 3.42) {
                data[i]["1000米跑评分"] = "80";
            } else if (thsoundTime > 3.42 && thsoundTime <= 3.47) {
                data[i]["1000米跑评分"] = "78";
            } else if (thsoundTime > 3.47 && thsoundTime <= 3.52) {
                data[i]["1000米跑评分"] = "76";
            } else if (thsoundTime > 3.52 && thsoundTime <= 3.57) {
                data[i]["1000米跑评分"] = "74";
            } else if (thsoundTime > 3.57 && thsoundTime <= 4.02) {
                data[i]["1000米跑评分"] = "72";
            } else if (thsoundTime > 4.02 && thsoundTime <= 4.07) {
                data[i]["1000米跑评分"] = "70";
            } else if (thsoundTime > 4.07 && thsoundTime <= 4.12) {
                data[i]["1000米跑评分"] = "68";
            } else if (thsoundTime > 4.12 && thsoundTime <= 4.17) {
                data[i]["1000米跑评分"] = "66";
            } else if (thsoundTime > 4.17 && thsoundTime <= 4.22) {
                data[i]["1000米跑评分"] = "64";
            } else if (thsoundTime > 4.22 && thsoundTime <= 4.27) {
                data[i]["1000米跑评分"] = "62";
            } else if (thsoundTime > 4.27 && thsoundTime <= 4.32) {
                data[i]["1000米跑评分"] = "60";
            } else if (thsoundTime > 4.32 && thsoundTime <= 4.52) {
                data[i]["1000米跑评分"] = "50";
            } else if (thsoundTime > 4.52 && thsoundTime <= 5.12) {
                data[i]["1000米跑评分"] = "40";
            } else if (thsoundTime > 5.12 && thsoundTime <= 5.32) {
                data[i]["1000米跑评分"] = "30";
            } else if (thsoundTime > 5.32 && thsoundTime <= 5.52) {
                data[i]["1000米跑评分"] = "20";
            } else if (thsoundTime > 5.52 && thsoundTime <= 6.12) {
                data[i]["1000米跑评分"] = "10";
            } else if (thsoundTime > 6.12 && thsoundTime <= 9.00) {
                data[i]["1000米跑评分"] = "0";
            }
        }
        //女
        else if (sex == 2) {
            var hundredTime = parseFloat(data[i]["800米跑"]);
            hundredTime = hundredTime.toFixed(2);
            if (hundredTime <= 2.68) {
                data[i]["800米跑评分"] = "110";
            } else if (hundredTime > 2.68 && hundredTime <= 2.73) {
                data[i]["800米跑评分"] = "109";
            } else if (hundredTime > 2.73 && hundredTime <= 2.78) {
                data[i]["800米跑评分"] = "108";
            } else if (hundredTime > 2.78 && hundredTime <= 2.83) {
                data[i]["800米跑评分"] = "107";
            } else if (hundredTime > 2.83 && hundredTime <= 2.88) {
                data[i]["800米跑评分"] = "106";
            } else if (hundredTime > 2.88 && hundredTime <= 2.93) {
                data[i]["800米跑评分"] = "105";
            } else if (hundredTime > 2.93 && hundredTime <= 2.98) {
                data[i]["800米跑评分"] = "104";
            } else if (hundredTime > 2.98 && hundredTime <= 3.03) {
                data[i]["800米跑评分"] = "103";
            } else if (hundredTime > 3.03 && hundredTime <= 3.08) {
                data[i]["800米跑评分"] = "102";
            } else if (hundredTime > 3.08 && hundredTime <= 3.13) {
                data[i]["800米跑评分"] = "101";
            } else if (hundredTime > 3.13 && hundredTime <= 3.18) {
                data[i]["800米跑评分"] = "100";
            } else if (hundredTime > 3.18 && hundredTime <= 3.24) {
                data[i]["800米跑评分"] = "95";
            } else if (hundredTime > 3.24 && hundredTime <= 3.30) {
                data[i]["800米跑评分"] = "90";
            } else if (hundredTime > 3.30 && hundredTime <= 3.37) {
                data[i]["800米跑评分"] = "85";
            } else if (hundredTime > 3.37 && hundredTime <= 3.44) {
                data[i]["800米跑评分"] = "80";
            } else if (hundredTime > 3.44 && hundredTime <= 3.49) {
                data[i]["800米跑评分"] = "78";
            } else if (hundredTime > 3.49 && hundredTime <= 3.54) {
                data[i]["800米跑评分"] = "76";
            } else if (hundredTime > 3.54 && hundredTime <= 3.59) {
                data[i]["800米跑评分"] = "74";
            } else if (hundredTime > 3.59 && hundredTime <= 4.04) {
                data[i]["800米跑评分"] = "72";
            } else if (hundredTime > 4.04 && hundredTime <= 4.09) {
                data[i]["800米跑评分"] = "70";
            } else if (hundredTime > 4.09 && hundredTime <= 4.14) {
                data[i]["800米跑评分"] = "68";
            } else if (hundredTime > 4.14 && hundredTime <= 4.19) {
                data[i]["800米跑评分"] = "66";
            } else if (hundredTime > 4.19 && hundredTime <= 4.24) {
                data[i]["800米跑评分"] = "64";
            } else if (hundredTime > 4.24 && hundredTime <= 4.29) {
                data[i]["800米跑评分"] = "62";
            } else if (hundredTime > 4.29 && hundredTime <= 4.34) {
                data[i]["800米跑评分"] = "60";
            } else if (hundredTime > 4.34 && hundredTime <= 4.44) {
                data[i]["800米跑评分"] = "50";
            } else if (hundredTime > 4.44 && hundredTime <= 4.54) {
                data[i]["800米跑评分"] = "40";
            } else if (hundredTime > 4.54 && hundredTime <= 5.04) {
                data[i]["800米跑评分"] = "30";
            } else if (hundredTime > 5.04 && hundredTime <= 5.14) {
                data[i]["800米跑评分"] = "20";
            } else if (hundredTime > 5.14 && hundredTime <= 5.24) {
                data[i]["800米跑评分"] = "10";
            } else if (hundredTime > 5.24 && hundredTime <= 9.00) {
                data[i]["800米跑评分"] = "0";
            }
        }
    }
}

//50米评分
function fiftyScore(data) {
    for (var i = 0; i < data.length; i++) {
        var fiftyTime = parseFloat(data[i]["50米跑"]);
        var sex = parseInt(data[i]["性别"]);
        //男
        if (sex == 1) {
            if (fiftyTime <= 6.7)
                data[i]["50米跑评分"] = "100";
            else if (fiftyTime > 6.7 && fiftyTime <= 6.8)
                data[i]["50米跑评分"] = "95";
            else if (fiftyTime > 6.8 && fiftyTime <= 6.9)
                data[i]["50米跑评分"] = "90";
            else if (fiftyTime > 6.9 && fiftyTime <= 7.0)
                data[i]["50米跑评分"] = "85";
            else if (fiftyTime > 7.0 && fiftyTime <= 7.1)
                data[i]["50米跑评分"] = "80";
            else if (fiftyTime > 7.1 && fiftyTime <= 7.3)
                data[i]["50米跑评分"] = "78";
            else if (fiftyTime > 7.3 && fiftyTime <= 7.5)
                data[i]["50米跑评分"] = "76";
            else if (fiftyTime > 7.5 && fiftyTime <= 7.7)
                data[i]["50米跑评分"] = "74";
            else if (fiftyTime > 7.7 && fiftyTime <= 7.9)
                data[i]["50米跑评分"] = "72";
            else if (fiftyTime > 7.9 && fiftyTime <= 8.1)
                data[i]["50米跑评分"] = "70";
            else if (fiftyTime > 8.1 && fiftyTime <= 8.3)
                data[i]["50米跑评分"] = "68";
            else if (fiftyTime > 8.3 && fiftyTime <= 8.5)
                data[i]["50米跑评分"] = "66";
            else if (fiftyTime > 8.5 && fiftyTime <= 8.7)
                data[i]["50米跑评分"] = "64";
            else if (fiftyTime > 8.7 && fiftyTime <= 8.9)
                data[i]["50米跑评分"] = "62";
            else if (fiftyTime > 8.9 && fiftyTime <= 9.1)
                data[i]["50米跑评分"] = "60";
            else if (fiftyTime > 9.1 && fiftyTime <= 9.3)
                data[i]["50米跑评分"] = "50";
            else if (fiftyTime > 9.3 && fiftyTime <= 9.5)
                data[i]["50米跑评分"] = "40";
            else if (fiftyTime > 9.5 && fiftyTime <= 9.7)
                data[i]["50米跑评分"] = "30";
            else if (fiftyTime > 9.7 && fiftyTime <= 9.9)
                data[i]["50米跑评分"] = "20";
            else if (fiftyTime > 9.9 && fiftyTime <= 10.1)
                data[i]["50米跑评分"] = "10";
            else if (fiftyTime > 10.1 && fiftyTime <= 20.0)
                data[i]["50米跑评分"] = "0";

        }
        //女
        else if (sex == 2) {
            if (fiftyTime <= 7.5)
                data[i]["50米跑评分"] = "100";
            else if (fiftyTime > 7.5 && fiftyTime <= 7.6)
                data[i]["50米跑评分"] = "95";
            else if (fiftyTime > 7.6 && fiftyTime <= 7.7)
                data[i]["50米跑评分"] = "90";
            else if (fiftyTime > 7.7 && fiftyTime <= 8.0)
                data[i]["50米跑评分"] = "85";
            else if (fiftyTime > 8.0 && fiftyTime <= 8.3)
                data[i]["50米跑评分"] = "80";
            else if (fiftyTime > 8.3 && fiftyTime <= 8.5)
                data[i]["50米跑评分"] = "78";
            else if (fiftyTime > 8.5 && fiftyTime <= 8.7)
                data[i]["50米跑评分"] = "76";
            else if (fiftyTime > 8.7 && fiftyTime <= 8.9)
                data[i]["50米跑评分"] = "74";
            else if (fiftyTime > 8.9 && fiftyTime <= 9.1)
                data[i]["50米跑评分"] = "72";
            else if (fiftyTime > 9.1 && fiftyTime <= 9.3)
                data[i]["50米跑评分"] = "70";
            else if (fiftyTime > 9.3 && fiftyTime <= 9.5)
                data[i]["50米跑评分"] = "68";
            else if (fiftyTime > 9.5 && fiftyTime <= 9.7)
                data[i]["50米跑评分"] = "66";
            else if (fiftyTime > 9.7 && fiftyTime <= 9.9)
                data[i]["50米跑评分"] = "64";
            else if (fiftyTime > 9.9 && fiftyTime <= 10.1)
                data[i]["50米跑评分"] = "62";
            else if (fiftyTime > 10.1 && fiftyTime <= 10.3)
                data[i]["50米跑评分"] = "60";
            else if (fiftyTime > 10.3 && fiftyTime <= 10.5)
                data[i]["50米跑评分"] = "50";
            else if (fiftyTime > 10.5 && fiftyTime <= 10.7)
                data[i]["50米跑评分"] = "40";
            else if (fiftyTime > 10.7 && fiftyTime <= 10.9)
                data[i]["50米跑评分"] = "30";
            else if (fiftyTime > 10.9 && fiftyTime <= 11.1)
                data[i]["50米跑评分"] = "20";
            else if (fiftyTime > 11.1 && fiftyTime <= 11.3)
                data[i]["50米跑评分"] = "10";
            else if (fiftyTime > 11.3 && fiftyTime <= 20.0)
                data[i]["50米跑评分"] = "0";
        }
    }
}

//坐位体前屈
function sitAndReachScore(data) {
    for (var i = 0; i < data.length; i++) {
        var sex = parseInt(data[i]["性别"]);
        var distance = parseFloat(data[i]["坐位体前屈"]);
        //男
        if (sex == 1) {
            if (distance < -1.3) {
                data[i]["坐位体前屈评分"] = "0";
            } else if (distance >= -1.3 && distance < -0.3) {
                data[i]["坐位体前屈评分"] = "10";
            } else if (distance >= -0.3 && distance < 0.7) {
                data[i]["坐位体前屈评分"] = "20";
            } else if (distance >= 0.7 && distance < 1.7) {
                data[i]["坐位体前屈评分"] = "30";
            } else if (distance >= 1.7 && distance < 2.7) {
                data[i]["坐位体前屈评分"] = "40";
            } else if (distance >= 2.7 && distance < 3.7) {
                data[i]["坐位体前屈评分"] = "50";
            } else if (distance >= 3.7 && distance < 5.1) {
                data[i]["坐位体前屈评分"] = "60";
            } else if (distance >= 5.1 && distance < 6.5) {
                data[i]["坐位体前屈评分"] = "62";
            } else if (distance >= 6.5 && distance < 7.9) {
                data[i]["坐位体前屈评分"] = "64";
            } else if (distance >= 7.9 && distance < 9.3) {
                data[i]["坐位体前屈评分"] = "66";
            } else if (distance >= 9.3 && distance < 10.7) {
                data[i]["坐位体前屈评分"] = "68";
            } else if (distance >= 10.7 && distance < 12.1) {
                data[i]["坐位体前屈评分"] = "70";
            } else if (distance >= 12.1 && distance < 13.5) {
                data[i]["坐位体前屈评分"] = "72";
            } else if (distance >= 13.5 && distance < 14.9) {
                data[i]["坐位体前屈评分"] = "74";
            } else if (distance >= 14.9 && distance < 16.3) {
                data[i]["坐位体前屈评分"] = "76";
            } else if (distance >= 16.3 && distance < 17.7) {
                data[i]["坐位体前屈评分"] = "78";
            } else if (distance >= 17.7 && distance < 19.5) {
                data[i]["坐位体前屈评分"] = "80";
            } else if (distance >= 19.5 && distance < 21.3) {
                data[i]["坐位体前屈评分"] = "85";
            } else if (distance >= 21.3 && distance < 23.1) {
                data[i]["坐位体前屈评分"] = "90";
            } else if (distance >= 23.1 && distance < 24.9) {
                data[i]["坐位体前屈评分"] = "95";
            } else if (distance >= 24.9) {
                data[i]["坐位体前屈评分"] = "100";
            }
        }
        //女
        else if (sex == 2) {

            if (distance < 2.0) {
                data[i]["坐位体前屈评分"] = "0";
            } else if (distance >= 2.0 && distance < 2.8) {
                data[i]["坐位体前屈评分"] = "10";
            } else if (distance >= 2.8 && distance < 3.6) {
                data[i]["坐位体前屈评分"] = "20";
            } else if (distance >= 3.6 && distance < 4.4) {
                data[i]["坐位体前屈评分"] = "30";
            } else if (distance >= 4.4 && distance < 5.2) {
                data[i]["坐位体前屈评分"] = "40";
            } else if (distance >= 5.2 && distance < 6.0) {
                data[i]["坐位体前屈评分"] = "50";
            } else if (distance >= 6.0 && distance < 7.3) {
                data[i]["坐位体前屈评分"] = "60";
            } else if (distance >= 7.3 && distance < 8.6) {
                data[i]["坐位体前屈评分"] = "62";
            } else if (distance >= 8.6 && distance < 9.9) {
                data[i]["坐位体前屈评分"] = "64";
            } else if (distance >= 9.9 && distance < 11.2) {
                data[i]["坐位体前屈评分"] = "66";
            } else if (distance >= 11.2 && distance < 12.5) {
                data[i]["坐位体前屈评分"] = "68";
            } else if (distance >= 12.5 && distance < 13.8) {
                data[i]["坐位体前屈评分"] = "70";
            } else if (distance >= 13.8 && distance < 15.1) {
                data[i]["坐位体前屈评分"] = "72";
            } else if (distance >= 15.1 && distance < 16.4) {
                data[i]["坐位体前屈评分"] = "74";
            } else if (distance >= 16.4 && distance < 17.7) {
                data[i]["坐位体前屈评分"] = "76";
            } else if (distance >= 17.7 && distance < 19.0) {
                data[i]["坐位体前屈评分"] = "78";
            } else if (distance >= 19.0 && distance < 20.6) {
                data[i]["坐位体前屈评分"] = "80";
            } else if (distance >= 20.6 && distance < 22.4) {
                data[i]["坐位体前屈评分"] = "85";
            } else if (distance >= 22.2 && distance < 24.0) {
                data[i]["坐位体前屈评分"] = "90";
            } else if (distance >= 24.0 && distance < 25.8) {
                data[i]["坐位体前屈评分"] = "95";
            } else if (distance >= 25.8) {
                data[i]["坐位体前屈评分"] = "100";
            }
        }
    }
}

//立定跳远
function jumpingScore(data) {
    for (var i = 0; i < data.length; i++) {
        var distance = parseInt(data[i]["立定跳远"]);
        var sex = parseInt(data[i]["性别"]);
        //男
        if (sex == 1) {
            if (distance < 183) {
                data[i]["立定跳远评分"] = "0";
            } else if (distance >= 183 && distance < 188) {
                data[i]["立定跳远评分"] = "10";
            } else if (distance >= 188 && distance < 193) {
                data[i]["立定跳远评分"] = "20";
            } else if (distance >= 193 && distance < 198) {
                data[i]["立定跳远评分"] = "30";
            } else if (distance >= 198 && distance < 203) {
                data[i]["立定跳远评分"] = "40";
            } else if (distance >= 203 && distance < 208) {
                data[i]["立定跳远评分"] = "50";
            } else if (distance >= 208 && distance < 212) {
                data[i]["立定跳远评分"] = "60";
            } else if (distance >= 212 && distance < 216) {
                data[i]["立定跳远评分"] = "62";
            } else if (distance >= 216 && distance < 220) {
                data[i]["立定跳远评分"] = "64";
            } else if (distance >= 220 && distance < 224) {
                data[i]["立定跳远评分"] = "66";
            } else if (distance >= 224 && distance < 228) {
                data[i]["立定跳远评分"] = "68";
            } else if (distance >= 228 && distance < 232) {
                data[i]["立定跳远评分"] = "70";
            } else if (distance >= 232 && distance < 236) {
                data[i]["立定跳远评分"] = "72";
            } else if (distance >= 236 && distance < 240) {
                data[i]["立定跳远评分"] = "74";
            } else if (distance >= 240 && distance < 244) {
                data[i]["立定跳远评分"] = "76";
            } else if (distance >= 244 && distance < 248) {
                data[i]["立定跳远评分"] = "78";
            } else if (distance >= 248 && distance < 256) {
                data[i]["立定跳远评分"] = "80";
            } else if (distance >= 256 && distance < 263) {
                data[i]["立定跳远评分"] = "85";
            } else if (distance >= 263 && distance < 268) {
                data[i]["立定跳远评分"] = "90";
            } else if (distance >= 268 && distance < 273) {
                data[i]["立定跳远评分"] = "95";
            } else if (distance >= 273) {
                data[i]["立定跳远评分"] = "100";
            }
        }
        //女
        else if (sex == 2) {

            if (distance < 126) {
                data[i]["立定跳远评分"] = "0";
            } else if (distance >= 126 && distance < 131) {
                data[i]["立定跳远评分"] = "10";
            } else if (distance >= 131 && distance < 136) {
                data[i]["立定跳远评分"] = "20";
            } else if (distance >= 136 && distance < 141) {
                data[i]["立定跳远评分"] = "30";
            } else if (distance >= 141 && distance < 146) {
                data[i]["立定跳远评分"] = "40";
            } else if (distance >= 146 && distance < 151) {
                data[i]["立定跳远评分"] = "50";
            } else if (distance >= 151 && distance < 154) {
                data[i]["立定跳远评分"] = "60";
            } else if (distance >= 154 && distance < 157) {
                data[i]["立定跳远评分"] = "62";
            } else if (distance >= 157 && distance < 160) {
                data[i]["立定跳远评分"] = "64";
            } else if (distance >= 160 && distance < 163) {
                data[i]["立定跳远评分"] = "66";
            } else if (distance >= 163 && distance < 166) {
                data[i]["立定跳远评分"] = "68";
            } else if (distance >= 166 && distance < 169) {
                data[i]["立定跳远评分"] = "70";
            } else if (distance >= 169 && distance < 172) {
                data[i]["立定跳远评分"] = "72";
            } else if (distance >= 172 && distance < 175) {
                data[i]["立定跳远评分"] = "74";
            } else if (distance >= 175 && distance < 178) {
                data[i]["立定跳远评分"] = "76";
            } else if (distance >= 178 && distance < 181) {
                data[i]["立定跳远评分"] = "78";
            } else if (distance >= 181 && distance < 188) {
                data[i]["立定跳远评分"] = "80";
            } else if (distance >= 188 && distance < 195) {
                data[i]["立定跳远评分"] = "85";
            } else if (distance >= 195 && distance < 201) {
                data[i]["立定跳远评分"] = "90";
            } else if (distance >= 201 && distance < 207) {
                data[i]["立定跳远评分"] = "95";
            } else if (distance >= 207) {
                data[i]["立定跳远评分"] = "100";
            }
        }
    }
}

//男：引体向上   女：仰卧起坐
function upAndSit(data) {

    for (var i = 0; i < data.length; i++) {
        var sex = parseInt(data[i]["性别"]);
        //男
        if (sex == 1) {
            var quantity = parseInt(data[i]["引体向上"]);
            if (quantity < 5) {
                data[i]["引体向上评分"] = "0";
            } else if (quantity >= 5 && quantity < 6) {
                data[i]["引体向上评分"] = "10";
            } else if (quantity >= 6 && quantity < 7) {
                data[i]["引体向上评分"] = "20";
            } else if (quantity >= 7 && quantity < 8) {
                data[i]["引体向上评分"] = "30";
            } else if (quantity >= 8 && quantity < 9) {
                data[i]["引体向上评分"] = "40";
            } else if (quantity >= 9 && quantity < 10) {
                data[i]["引体向上评分"] = "50";
            } else if (quantity >= 10 && quantity < 11) {
                data[i]["引体向上评分"] = "60";
            } else if (quantity >= 11 && quantity < 12) {
                data[i]["引体向上评分"] = "64";
            } else if (quantity >= 12 && quantity < 13) {
                data[i]["引体向上评分"] = "68";
            } else if (quantity >= 13 && quantity < 14) {
                data[i]["引体向上评分"] = "72";
            } else if (quantity >= 14 && quantity < 15) {
                data[i]["引体向上评分"] = "76";
            } else if (quantity >= 15 && quantity < 16) {
                data[i]["引体向上评分"] = "80";
            } else if (quantity >= 16 && quantity < 17) {
                data[i]["引体向上评分"] = "85";
            } else if (quantity >= 17 && quantity < 18) {
                data[i]["引体向上评分"] = "90";
            } else if (quantity >= 18 && quantity < 19) {
                data[i]["引体向上评分"] = "95";
            } else if (quantity >= 19 && quantity < 20) {
                data[i]["引体向上评分"] = "100";
            } else if (quantity >= 20 && quantity < 21) {
                data[i]["引体向上评分"] = "101";
            } else if (quantity >= 21 && quantity < 22) {
                data[i]["引体向上评分"] = "102";
            } else if (quantity >= 22 && quantity < 23) {
                data[i]["引体向上评分"] = "103";
            } else if (quantity >= 23 && quantity < 24) {
                data[i]["引体向上评分"] = "104";
            } else if (quantity >= 24 && quantity < 25) {
                data[i]["引体向上评分"] = "105";
            } else if (quantity >= 25 && quantity < 26) {
                data[i]["引体向上评分"] = "106";
            } else if (quantity >= 26 && quantity < 27) {
                data[i]["引体向上评分"] = "107";
            } else if (quantity >= 27 && quantity < 28) {
                data[i]["引体向上评分"] = "108";
            } else if (quantity >= 28 && quantity < 29) {
                data[i]["引体向上评分"] = "109";
            } else if (quantity >= 29) {
                data[i]["引体向上评分"] = "110";
            }

        }
        //女
        else if (sex == 2) {
            var quantity = parseInt(data[i]["一分钟仰卧起坐"]);
            if (quantity < 16) {
                data[i]["一分钟仰卧起坐评分"] = "0";
            } else if (quantity >= 16 && quantity < 18) {
                data[i]["一分钟仰卧起坐评分"] = "10";
            } else if (quantity >= 18 && quantity < 20) {
                data[i]["一分钟仰卧起坐评分"] = "20";
            } else if (quantity >= 20 && quantity < 22) {
                data[i]["一分钟仰卧起坐评分"] = "30";
            } else if (quantity >= 22 && quantity < 24) {
                data[i]["一分钟仰卧起坐评分"] = "40";
            } else if (quantity >= 24 && quantity < 26) {
                data[i]["一分钟仰卧起坐评分"] = "50";
            } else if (quantity >= 26 && quantity < 28) {
                data[i]["一分钟仰卧起坐评分"] = "60";
            } else if (quantity >= 28 && quantity < 30) {
                data[i]["一分钟仰卧起坐评分"] = "62";
            } else if (quantity >= 30 && quantity < 32) {
                data[i]["一分钟仰卧起坐评分"] = "64";
            } else if (quantity >= 32 && quantity < 34) {
                data[i]["一分钟仰卧起坐评分"] = "66";
            } else if (quantity >= 34 && quantity < 36) {
                data[i]["一分钟仰卧起坐评分"] = "68";
            } else if (quantity >= 36 && quantity < 38) {
                data[i]["一分钟仰卧起坐评分"] = "70";
            } else if (quantity >= 38 && quantity < 40) {
                data[i]["一分钟仰卧起坐评分"] = "72";
            } else if (quantity >= 40 && quantity < 42) {
                data[i]["一分钟仰卧起坐评分"] = "74";
            } else if (quantity >= 42 && quantity < 44) {
                data[i]["一分钟仰卧起坐评分"] = "76";
            } else if (quantity >= 44 && quantity < 46) {
                data[i]["一分钟仰卧起坐评分"] = "78";
            } else if (quantity >= 46 && quantity < 49) {
                data[i]["一分钟仰卧起坐评分"] = "80";
            } else if (quantity >= 49 && quantity < 52) {
                data[i]["一分钟仰卧起坐评分"] = "85";
            } else if (quantity >= 52 && quantity < 54) {
                data[i]["一分钟仰卧起坐评分"] = "90";
            } else if (quantity >= 54 && quantity < 56) {
                data[i]["一分钟仰卧起坐评分"] = "95";
            } else if (quantity >= 56 && quantity < 58) {
                data[i]["一分钟仰卧起坐评分"] = "100";
            } else if (quantity >= 58 && quantity < 60) {
                data[i]["一分钟仰卧起坐评分"] = "101";
            } else if (quantity >= 60 && quantity < 62) {
                data[i]["一分钟仰卧起坐评分"] = "102";
            } else if (quantity >= 62 && quantity < 63) {
                data[i]["一分钟仰卧起坐评分"] = "103";
            } else if (quantity >= 63 && quantity < 64) {
                data[i]["一分钟仰卧起坐评分"] = "104";
            } else if (quantity >= 64 && quantity < 65) {
                data[i]["一分钟仰卧起坐评分"] = "105";
            } else if (quantity >= 65 && quantity < 66) {
                data[i]["一分钟仰卧起坐评分"] = "106";
            } else if (quantity >= 66 && quantity < 67) {
                data[i]["一分钟仰卧起坐评分"] = "107";
            } else if (quantity >= 67 && quantity < 68) {
                data[i]["一分钟仰卧起坐评分"] = "108";
            } else if (quantity >= 68 && quantity < 69) {
                data[i]["一分钟仰卧起坐评分"] = "109";
            } else if (quantity >= 69) {
                data[i]["一分钟仰卧起坐评分"] = "110";
            }

        }
    }
}

//总分以及总分等级
function finalScore(data) {

    weightScore(data);
    lungVolumeScore(data);
    runningScore(data);
    fiftyScore(data);
    sitAndReachScore(data);
    jumpingScore(data);
    upAndSit(data);

    for (var i = 0; i < data.length; i++) {
        var sex = parseInt(data[i]["性别"]);
        var sum = 0;
        var add1 = 0;
        var add2 = 0;
        if (sex == 1) {
            //男子两项附加分
            if (parseInt(data[i]["引体向上评分"]) > 100)
                add1 = parseInt(data[i]["引体向上评分"]) - 100;
            if (parseInt(data[i]["1000米跑评分"]) > 100)
                add2 = parseInt(data[i]["1000米跑评分"]) - 100;
            data[i]["引体向上附加分"] = add1.toString();
            data[i]["1000米跑附加分"] = add2.toString();
            //总分=∑各项标准成绩（满分100）*权重+∑附加分（满分20）
            sum = parseInt(data[i]["体重指数评分"]) * 0.15 + parseInt(data[i]["肺活量评分"]) * 0.15 + parseInt(data[i]["50米跑评分"]) * 0.2 +
                parseInt(data[i]["坐位体前屈评分"]) * 0.1 + parseInt(data[i]["立定跳远评分"]) * 0.1 +
                (parseInt(data[i]["引体向上评分"]) > 100 ? 100 : parseInt(data[i]["引体向上评分"])) * 0.1 +
                (parseInt(data[i]["1000米跑评分"]) > 100 ? 100 : parseInt(data[i]["1000米跑评分"])) * 0.2 +
                add1 + add2;
        } else if (sex == 2) {
            //女子两项附加分
            if (parseInt(data[i]["一分钟仰卧起坐评分"]) > 100)
                add1 = parseInt(data[i]["一分钟仰卧起坐评分"]) - 100;
            if (parseInt(data[i]["800米跑评分"]) > 100)
                add2 = parseInt(data[i]["800米跑评分"]) - 100;
            data[i]["一分钟仰卧起坐附加分"] = add1.toString();
            data[i]["800米跑附加分"] = add2.toString();
            //总分=∑各项标准成绩（满分100）*权重+∑附加分（满分20）
            sum = parseInt(data[i]["体重指数评分"]) * 0.15 + parseInt(data[i]["肺活量评分"]) * 0.15 + parseInt(data[i]["50米跑评分"]) * 0.2 +
                parseInt(data[i]["坐位体前屈评分"]) * 0.1 + parseInt(data[i]["立定跳远评分"]) * 0.1 +
                (parseInt(data[i]["一分钟仰卧起坐评分"]) > 100 ? 100 : parseInt(data[i]["一分钟仰卧起坐评分"])) * 0.1 +
                (parseInt(data[i]["800米跑评分"]) > 100 ? 100 : parseInt(data[i]["800米跑评分"])) * 0.2 +
                add1 + add2;
        }
        //总分等级
        sum = sum.toFixed(2);
        data[i]["总分"] = sum;
        if (sum < 60) {
            data[i]["总分等级"] = '不及格';
        } else if (sum >= 60 && sum < 80) {
            data[i]["总分等级"] = '及格';
        } else if (sum >= 80 && sum < 90) {
            data[i]["总分等级"] = '良好';
        } else if (sum >= 90 ) {
            data[i]["总分等级"] = '优秀';
        }
    }
}

//调整顺序并输出
function adjustArray(data) {
    finalScore(data);
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
        //规定顺序
        newData[i] = {
            "年级编号": "",
            "班级名称": "",
            "学籍号": "",
            "姓名": "",
            "性别": "",
            "身高": "",
            "体重": "",
            "体重指数评分": "",
            "肺活量": "",
            "肺活量评分": "",
            "50米跑": "",
            "50米跑评分": "",
            "立定跳远": "",
            "立定跳远评分": "",
            "坐位体前屈": "",
            "坐位体前屈评分": "",
            "800米跑": "",
            "800米跑评分": "",
            "800米跑附加分": "",
            "1000米跑": "",
            "1000米跑评分": "",
            "1000米跑附加分": "",
            "一分钟仰卧起坐": "",
            "一分钟仰卧起坐评分": "",
            "一分钟仰卧起坐附加分": "",
            "引体向上": "",
            "引体向上评分": "",
            "引体向上附加分": "",
            "总分": "",
            "总分等级": ""
        };
        //调整并且输出调整后的顺序
        for (var key in newData[i]) {
            newData[i][key] = data[i][key];
            if (key == "总分" && data[i][key] < 60 && data[i][key] > 0) {
                if (data[i]["性别"] == "1" || data[i]["性别"] == "2")
                    count++;
            }
            if (key == "总分" && data[i][key] > 0) {
                all++;
            }
        }
    }
    return newData;
}