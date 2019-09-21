<template>

  <div class="home">
     <el-container>
         <!-- 菜单栏 -->
          <el-menu default-active="$router.path" class="el-menu-vertical-demo"
            background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
               :collapse="isCollapse"
                router
            >
             
              <el-menu class="Aside-top" background-color='#FFEB3A' :collapse="isCollapse">
              <i><img src="../assets/favicon1.jpg"></i>
              <span v-show="!isCollapse">智学无忧教育</span>
            </el-menu>

            <el-submenu index="1">
              <template slot="title">
               <i class="el-icon-menu"></i>
                <span slot="title">在线测试</span>
              </template>
              <el-menu-item-group v-for="(items,index) in LineTest" :key="index">
                 <el-menu-item :index="items.url" @click="addTab(editableTabsValue)" >{{items.title}}</el-menu-item>
               <!-- <el-menu-item index="1-2">试卷管理</el-menu-item>
                <el-menu-item index="1-3">安排测试</el-menu-item>
                <el-menu-item index="1-4">批阅试卷</el-menu-item>
                <el-menu-item index="1-5">测试试卷</el-menu-item> -->
                </el-menu-item-group>
              </el-submenu>
              
            <el-submenu index="2">
              <template slot="title">
              <i class="el-icon-menu"></i>
                <span slot="title">基础测试</span>
              </template>
              <el-menu-item-group v-for="(items,ind) in Manage" :key="ind">
                <el-menu-item :index="items.url"  @click="addTab(editableTabsValue)">{{items.title}}</el-menu-item>
                <!-- <el-menu-item index="2-2">学生管理</el-menu-item>
                <el-menu-item index="2-3">老师管理</el-menu-item>
                <el-menu-item index="2-4">修改密码</el-menu-item> -->
                </el-menu-item-group>
              </el-submenu>
         </el-menu>

        <!-- 主体内容 -->
        <el-container>
          
          <el-header>
             <el-checkbox-button v-model="isCollapse" style="float:left">
             <!--   <i :class="isCollapse?'el-icon-caret-left':'el-icon-caret-right'"></i> -->
            </el-checkbox-button>

            <div class="Head-center">
                    
                <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                  <el-tab-pane
                    v-for="(item) in editableTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                  >
                    {{item.content}}
                  </el-tab-pane>
                </el-tabs>
            </div>
<!-- 退出首页 -->
            <div class="Head-right">
                <div class="quit">
                       <i class="el-icon-s-custom"></i>
                       <a style="margin-left:10px">退出</a>
                </div>
				<!-- 头像 -->
           <div class="Pic"> 
			 <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
<!--                   <!--  <el-avatar style="margin-left:20px;" icon="el-icon-user-solid"></elavatar> -->
               </div> 
            </div>

           </el-header>
             <el-main>
               
              <router-view />

             </el-main>
        </el-container>
    </el-container>

  </div>
</template>

<script>
// @ is an alias to /srcz
// 绑定的数据
export default {
  name: 'home',
  components: {

  },  
   data() {
      return {
        isCollapse: false,
        LineTest:[
            {title:'老师出卷',url:'/MakeTestPaper'},
            {title:'试卷管理',url:'/TestPaperManage'},
            {title:'安排测试',url:'/TestSetter'},
            {title:'批阅试卷',url:'/ViewTestPaper'},
            {title:'测试试卷',url:'/TestResult'}
        ],
        Manage:[
            {title:'班级管理',url:'/ClassManage'},
            {title:'学生管理',url:'/StudentManage'},
            {title:'老师管理',url:'/ClassManage'},
            {title:'修改密码',url:'/ModifyPassword'}
        ],

       editableTabsValue: '2',
        editableTabs: [{
          title: '首页',
          name: '1',
          content: '首页'
        }
        ],
        tabIndex: 2

      }
    },
    methods: {
         addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      
       removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }

</script>

<style lang="less" scoped>
	.Pic{
		border-radius:50%;
		width: 50px;
		height: 50px;
		background-color: gray;
		
		
	}
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-header{
    padding: 0px;
     width: 100%;
    position: relative;
    display: flex;
    .Head-center{
      width: 80%;
      height: 60px;
      .el-tabs{
        margin-top: 20px;
        margin-left: 10px;

      }
    }
    .Head-right{
      width: 200px;
      height: 60px;
      border-bottom:1px solid #cccccc;
      display: flex;
      text-align: center;
      .quit{
        width: 70px;
        font-size: 15px;
        margin-top: 18px;
       
      }
      
     .Pic .el-avatar{
        margin-top: 8px;
     }
    }
  }

 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 600px;
  }

  //侧边栏
  .Aside-top{
    padding: 8px 0px;
    
    img{
      width: 40px;
      margin-left: 10px;
      height: 40px;
      border: 1px solid #008181;
      border-radius: 50%;
      box-shadow: 0px 0px 5px 1px #008181;
      float: left;
    }
    span{
      margin-left: 15px;
      margin-top: 10px;
      color: #008181;
      font-weight: bold;
      position: absolute;
      }
  
  }

  .el-icon-menu{
    color: white
  }

/deep/ .el-checkbox-button__inner{
  background-color: #008181;
  border: none;
  height: 60px;
  width: 30px;
}

  .el-icon-caret-left,.el-icon-caret-right{
   color: white;
   font-size: 25px;
   position: absolute;
   top: 20px;
   right: 10px;
 }


  .table{
      overflow: hidden;
      margin-left: 20px;
  }

.right{
  width: 180px;
  height: 60px;
  background: #008181;
  float: right;
  
}




</style>