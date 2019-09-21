<template>
    <div id="box">
        <div id="login">
            <div class="mary">
                <div class="one">
                   <div class="Imgs">
                        <img src="../assets/favicon.jpg" alt="login">
                   </div>
                   <div class="Texts">
                        <span style="color:#169588;font-weight:900;">智学无忧后台系统</span>
                        <br/>
                        <p>做最有态度,责任，良心的TI教育</p>
                   </div>
                   <div>

                   </div>
                </div>
                <div class="two">
                    <el-form>
                    <div class="User">
                          <i class="el-icon-s-custom"></i>
                          <el-input v-model="form.input" placeholder="请输入用户名"></el-input>
                    </div>
                    <div class="Paw">
                         <i class="el-icon-lock"></i>
                         <el-input placeholder="请输入密码" v-model="form.input1" show-password></el-input>
                    </div>
					<br/>
                   &nbsp; &nbsp;<el-checkbox v-model="checked">记住密码</el-checkbox>
                    <p></p>
                   <el-button type="success" @click="login">登录</el-button>
                   </el-form>
             </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        checked:true,
        form:{
            input:'',
            input1:''
        }
      }
    },
    methods:{
    login() {
       
	   if (!this.form.input && !this.form.input1) {
	                 alert("请填写账号密码");
	                 return false;
	             }
	 			// 异步操作--向后台请求数据、
	 			// setTimeout(()=>{
	 			// 	this.$store.dispatch("login",this.form)
	    //      this.$store.dispatch("userStatus",{vipLevel:0,userStatus:0})
	 			// 	this.$router.push("/")
	 			// },3)
	         // }
	     },
	 // }; 
	   
      }
    }
// }
</script>
<style lang="less">
	
		

    #box{
         background: url("../assets/background.jpg") 0px 0px no-repeat;
        width:100%;
        height:640px;
        display: flex
    }

    #login{
      margin: auto
    }
  
 .mary{
            border-radius: 4px;
            // box-shadow: 0 2px 15px 0 #f3ededec;
			box-shadow: 5px 5px 5px 5px lightskyblue ;
            background: #D8ECF5;
			// background-color: red;
            width: 450px;
            height: 250px;
            position: absolute;
            top: 150px;
            left: 30%;
            display: flex;
    }
    .one{
        width: 50%;
        height: 100%;
        border-right: 1px solid #A3E6DB;
       .Imgs img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: relative;
        top: 20px;
        left: 60px;
    }
      .Texts{
        width: 100%;
        height:100px;
        margin-top: 30px;
        text-align: center;
    }
    
    .Texts p{
         font-size:13px;
           margin-top: 30px;
         display: inline-block;
         color: gray;
    }

    }


  


    .two{
        width: 50%;
        height: 100%;
        position: relative;
        .el-icon-s-custom{
        color: #63C240;
        position: absolute;
       top: 32px;
       left: 18px;
       z-index: 222;
       font-size: 23px
    }
    //user
    .el-button{
        margin-left:10px; 
        width: 200px;
    }

    .el-input__inner{
        margin-top: 25px;
        width: 200px;
        margin-left: 10px;
        padding: 0px 10px 0px 40px;
    }
    //Paw
    .el-icon-lock{
        color: #63C240;
            position: absolute;
        top: 95px;
        left: 18px;
        z-index: 222;
        font-size: 23px
        }
    }


    .el-input .el-input__clear{
        margin: 15px 10px 0px 0px;
    }
       
 
    .right .el-checkbox{
        margin: 10px 0px 0px 10px;
    }

 
</style>