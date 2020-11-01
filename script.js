var num_flag = 0     //数字の入力があるかどうかを調べるフラグ
var op_flag = 0      //演算子の入力があるかどうかを管理するフラグ
var dot_flag = 0      //.が押されたかを管理するフラグ
var first_flag = 0   //初めてボタンが押されたかを管理するフラグ

var dis_num = ''     //ディスプレイに表示する変数
var total = 0        //計算結果を入れる変数
var op               //演算子をいれる変数


//数字 or . の入力があったとき
var input_number = function(value){
    if(value=='.'){
        if(first_flag==0){
            dis_num = total + value
            document.getElementById('output').textContent = dis_num;
            first_flag = 1;
            dot_flag=1;
        }
        else if(dot_flag!=1){
            dis_num += value;
            document.getElementById('output').textContent = dis_num;
            dot_flag=1;
        }
    }

    else if(first_flag==1 || value!='0'){
        num_flag = 1;
        dis_num += value;
        document.getElementById('output').textContent = dis_num;
        first_flag = 1;
    }
}

//演算子 or = の入力があったとき
var input_operator = function(value){
    if(num_flag==1){
        if(op_flag==0){
            if(value!='='){
                op_flag=1;
                total=dis_num;
                op=value;
                dis_num='';
                document.getElementById('output').textContent = total;
                console.log(op);
            }
        }
        else{
            if(value=='='){
                op_flag=0;
                total=eval(total + op + dis_num);
                document.getElementById('output').textContent = total;
                dis_num=total;
            }
            else{
                num_flag=0;
                total=eval(total + op + dis_num);
                dis_num='';
                document.getElementById('output').textContent = total;
                op = value;
                console.log(op);
            }
        }
        dot_flag=0;
    }
}

// %の入力があったとき
var input_percent = function(){
    var tmp = document.getElementById('output').textContent;
    dis_num=eval(tmp/100);
    document.getElementById('output').textContent = dis_num;
}

// cの入力があったとき
var input_clear = function(){
    num_flag=0;
    op_flag=0;
    first_flag=0;
    dot_flag=0;
    dis_num='';
    total=0;
    document.getElementById('output').textContent = total;
    console.log(total)
}

var input_clear_entry = function(){
    dis_num=0;
    document.getElementById('output').textContent = total;
    console.log(total)
}

document.getElementById('output').textContent = total;
