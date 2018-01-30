<template>
    <div class="responseNeed">
        <div class="content">
            <form action="" class="formStyle">
                <!-- 服务所属类型 -->
                <div class="serviceFromType">
                    <label for="">服务所属类型：</label>
                    <select name="" id="">
                        <option value="1">老年人服务</option>
                        <option value="2">残疾人服务</option>
                        <option value="3">妇女儿童服务</option>
                        <option value="4">低保人员服务</option>
                        <option value="5">优抚人员服务</option>
                        <option value="6">务工人员服务</option>
                        <option value="7">其他服务</option>
                    </select>
                </div>
                <!-- 需求简要描述 -->
                <div class="serviceSimpleDescribe">
                    <label >需求简要描述：</label>
                    <textarea maxlength="50" cols="30" rows="10" placeholder="请简要填写服务需求，不超过50个字...">
                    </textarea>
                </div>
            </form>
            <!-- 【底部】发起需求 -->
            <div class="responseNeedBotton">
                发起需求
            </div>

        </div>
        
    </div>
</template>
<style scoped lang="scss">
.responseNeed{
    .formStyle{
        margin: 30px 15px;
        // 服务所属类型
        .serviceFromType{
            height: 40px;
            line-height: 40px;
            display: flex;
            select{
                flex: 1;
                height: 38px;
                border: 1px solid #666666;
                border-radius: 3px;
                font-size: 14px;
                color: #444444;
                
            }
        }
        // 需求简要描述
        .serviceSimpleDescribe{
            margin-top:3%;
            height: 220px;
            display: flex;
            line-height: 220px;
            textarea{
                padding: 8px 12px;
                font-size: 14px;
                margin-top:5%;
                height: 80%;
                flex: 1;
                border:1px solid #eeeeee;
                border-radius:4px;
            }
        }
    }
    .responseNeedBotton{
        text-align: center;
        position: fixed;
        line-height: 50px;
        color: #777777;
        font-weight: 900;
        bottom: 0;
        width: 100%;
        height: 50px;
        border: 1px solid #dddddd;
        // background-color: #666666;
    }
}
</style>

<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            
        }
    }
</script>

